<?php

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{action?}/{locale?}', function ($action = 'login') {
    return view('welcome', ['action' => $action]);
})->name('index');

Route::get('lang/{locale}', function ($locale) {
    if (! in_array($locale, ['ru', 'en'])) {
        abort(400);
    }

    App::setLocale($locale);
});
