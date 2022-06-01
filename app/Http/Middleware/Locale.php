<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class Locale
{
    public function handle(Request $request, Closure $next)
    {
        if ($request->route('locale') && in_array($request->route('locale'), ['ru', 'en'])) {
            App::setLocale($request->route('locale'));
        }

        return $next($request);
    }
}
