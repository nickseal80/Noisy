<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function getUserData(): JsonResponse
    {
        if (Auth::check()) {
            return response()->json(['user' => Auth::user()]);
        }

        return response()->json(['user' => 'guest']);
    }
}
