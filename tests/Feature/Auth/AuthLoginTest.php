<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;

class AuthLoginTest extends TestCase
{
    use DatabaseTransactions;

    private User $user;

    public function setUp(): void
    {
        parent::setUp();

        $this->user = User::factory()->create([
            'email'    => 'test@test.com',
            'password' => bcrypt('12345678'),
            'name'     => 'Kisa Vorobyaninov',
        ]);
    }

    /**
     * @test
     */
    public function login()
    {
        $data = [
            'email'    => 'test@test.com',
            'password' => '12345678',
        ];

        $this->withHeaders(['X_REQUESTED_WITH' => 'XMLHttpRequest'])
            ->json('POST', route('auth.sign-in'), $data)
            ->assertOk();

        $this->assertEquals('test@test.com', Auth::user()->email);
        $this->assertEquals('Kisa Vorobyaninov', Auth::user()->name);
    }

    /**
     * @test
     */
    public function loginWithWrongEmail()
    {
        $data = [
            'email'    => 'testER@test.com',
            'password' => '12345678',
        ];

        $this->withHeaders(['X_REQUESTED_WITH' => 'XMLHttpRequest'])
            ->json('POST', route('auth.sign-in'), $data)
            ->assertStatus(401);
    }
}
