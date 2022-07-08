<?php

namespace App\Providers\Authentication;

use App\Repositories\Auth\AccessTokenRepository;
use App\Repositories\Auth\interfaces\AccessTokenInterface;
use App\Repositories\Users\interfaces\UserInterface;
use App\Repositories\Users\UserRepository;
use Illuminate\Support\ServiceProvider;

class AuthenticationServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot(): void
    {
        //
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register(): void
    {
        $this->app->bind(UserInterface::class, UserRepository::class);
        $this->app->bind(AccessTokenInterface::class, AccessTokenRepository::class);
    }
}
