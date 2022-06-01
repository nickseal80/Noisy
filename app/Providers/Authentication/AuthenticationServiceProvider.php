<?php

namespace App\Providers\Authentication;

use App\Repositories\Users\interfaces\UserInterface;
use App\Repositories\Users\User;
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
        $this->app->bind(UserInterface::class, User::class);
    }
}
