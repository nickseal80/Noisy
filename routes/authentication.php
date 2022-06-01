<?php

use App\Http\Controllers\Auth\AuthenticationController;
use Illuminate\Support\Facades\Route;

Route::controller(AuthenticationController::class)->prefix('auth')->group(function () {
    Route::post('login', 'login')
        ->name('auth.post.login');

    Route::post('register', 'register')
        ->name('auth.post.register');
});
