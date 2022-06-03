<?php

use App\Http\Controllers\Auth\Api\AuthDataController;
use App\Http\Controllers\Auth\AuthenticationController;
use Illuminate\Support\Facades\Route;

Route::controller(AuthDataController::class)->prefix('auth')->group(function () {
    Route::get('sign-in_data', 'getSignInData')
        ->name('auth.get.sign-in_data');
});

Route::controller(AuthenticationController::class)->prefix('auth')->group(function () {
    Route::post('sign-in', 'login')
        ->name('auth.post.login');

    Route::post('sign-up', 'register')
        ->name('auth.post.sign-up');
});
