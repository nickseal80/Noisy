<?php

namespace App\Http\Controllers\Auth;

use App\Exceptions\Auth\UserUnauthorizedException;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Repositories\Users\UserRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    protected UserRepository $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * @param RegisterRequest $request
     * @return JsonResponse
     */
    public function signUp(RegisterRequest $request): JsonResponse
    {
        $user = $this->userRepository->create([
            'email'    => $request->get('email'),
            'password' => bcrypt($request->get('password')),
            'name'     => $request->get('name'),
        ]);

        return response()->json(['token' => $user->createToken('users')->plainTextToken], 201);
    }

    /**
     * @param LoginRequest $request
     * @return JsonResponse
     */
    public function signIn(LoginRequest $request): JsonResponse
    {
        if (!Auth::attempt($request->all())) {
            throw new UserUnauthorizedException("unauthorized");
        }

        return response()->json(Auth::user());
    }

    public function signOut()
    {
        Auth::user()->tokens()->delete();
    }

    public function getAuthUser(Request $request): JsonResponse
    {
        return response()->json(Auth::check());
    }
}
