<?php

namespace Tests\Feature\Auth;

use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;

class AuthRegisterTest extends TestCase
{
    use DatabaseTransactions;

    public function setUp(): void
    {
        parent::setUp();
    }

    /**
     * @test
     */
    public function register()
    {
        $data = [
            'email'           => 'test@test.com',
            'password'        => '123456789',
            'confirmPassword' => '123456789',
            'name'            => 'developer',
        ];

        $this->withHeaders(['X_REQUESTED_WITH' => 'XMLHttpRequest'])
            ->json('POST', route('auth.sign-up'), $data)
            ->assertStatus(201);

        $this->assertDatabaseHas('users', [
            'email' => 'test@test.com',
            'name'  => 'developer',
        ]);
    }

    /**
     * @test
     */
    public function registerWithoutEmail()
    {
        $data = [
            'email'           => null,
            'password'        => '123456789',
            'confirmPassword' => '123456789',
            'name'            => 'developer',
        ];

        $this->withHeaders(['X_REQUESTED_WITH' => 'XMLHttpRequest'])
            ->json('post', route('auth.sign-up'), $data)
            ->assertStatus(422);
    }

    /**
     * @test
     */
    public function registerWithPasswordsMismatch()
    {
        $data = [
            'email'           => 'test@test.com',
            'password'        => '123456789',
            'confirmPassword' => '1234567890',
            'name'            => 'developer',
        ];

        $this->withHeaders(['X_REQUESTED_WITH' => 'XMLHttpRequest'])
            ->json('post', route('auth.sign-up'), $data)
            ->assertStatus(422);
    }
}
