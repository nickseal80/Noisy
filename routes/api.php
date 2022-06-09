<?php

use App\Http\Controllers\Users\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*
|--------------------------------------------------------------------------
| AUTHENTICATION
|--------------------------------------------------------------------------
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(UserController::class)->group(function () {
    Route::get('user-data', 'getUserData')
        ->name('api.get.user-data');
});

Route::controller(\App\Http\Controllers\Auth\DataController::class)->group(function () {
    Route::get('login-data', 'getLoginData')
        ->name('api.get.login-data');

    Route::get('register-data', 'getRegisterData')
        ->name('api.get.register-data');
});
