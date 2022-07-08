<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\PersonalAccessToken;
use Tests\TestCase;

class AuthTest extends TestCase
{
    use DatabaseTransactions;

    private PersonalAccessToken $accessToken;

    public function setUp(): void
    {
        parent::setUp();

        $user = User::factory()->create([
            'name'  => 'Klim Chugunkin',
            'email' => 'klim@test.com',
        ]);

        $this->accessToken = $user->createToken('test_token')->accessToken;
    }

    /**
     * @test
     */
    public function getAuthUser()
    {
        $data = ['accessToken' => $this->accessToken->token];

        $response = $this->withHeaders(['X_REQUESTED_WITH' => 'XMLHttpRequest'])
            ->json('GET', route('auth.user'), $data);

        /* @var User $user */
        $user = $response->original['user'];

        /* @var string $token */
        $token = $response->original['accessToken'];

        $this->assertEquals('Klim Chugunkin', $user->name);
        $this->assertEquals('klim@test.com', $user->email);
        $this->assertEquals($this->accessToken->token, $token);
    }

    /**
     * @test
     */
    public function getAuthUserWithLogin()
    {
        $data = [
            'accessToken' => $this->accessToken->token,
            'login'       => true,
        ];

        $this->withHeaders(['X_REQUESTED_WITH' => 'XMLHttpRequest'])
            ->json('GET', route('auth.user'), $data);

        $this->assertTrue(Auth::check());
        $this->assertEquals('Klim Chugunkin', Auth::user()->name);
    }

    /**
     * @test
     */
    public function getAuthUserWithInvalidToken()
    {
        $data = ['accessToken' => '123456789'];

        $this->withHeaders(['X_REQUESTED_WITH' => 'XMLHttpRequest'])
            ->json('GET', route('auth.user'), $data)
            ->assertStatus(401);
    }
}
