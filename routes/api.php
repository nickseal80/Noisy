<?php

use App\Http\Controllers\Auth\AuthController;
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

Route::controller(AuthController::class)->prefix('auth')->group(function () {
    Route::post('/sign-up', 'signUp')
        ->name('auth.sign-up');

    Route::post('/sign-in', 'signIn')
        ->name('auth.sign-in');

    Route::post('/sign-out', 'signOut')
        ->middleware('auth:sanctum')
        ->name('auth.sign-out');

    Route::get('/user-data', 'getAuthUser')
        ->name('auth.user');
});
