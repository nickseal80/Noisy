<?php

namespace App\Providers;

use App\View\Components\Auth\Field;
use App\View\Components\Auth\Form;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

class PackageServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(): void
    {
        Blade::component('auth-form', Form::class);
        Blade::component('auth-field', Field::class);
    }
}
