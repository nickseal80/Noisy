<?php

namespace App\Http\Controllers\Auth;

use App\Exceptions\Auth\UserUnauthorizedException;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\AuthRequest;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\Auth\AccessToken;
use App\Models\User;
use App\Repositories\Auth\AccessTokenRepository;
use App\Repositories\Users\UserRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    protected UserRepository $userRepository;
    protected AccessTokenRepository $accessTokenRepository;

    public function __construct(
        UserRepository $userRepository,
        AccessTokenRepository $accessTokenRepository
    ) {
        $this->userRepository = $userRepository;
        $this->accessTokenRepository = $accessTokenRepository;
    }

    /**
     * @param RegisterRequest $request
     * @return JsonResponse
     */
    public function signUp(RegisterRequest $request): JsonResponse
    {
        /* @var User $user */
        $user = $this->userRepository->create([
            'email'    => $request->get('email'),
            'password' => bcrypt($request->get('password')),
            'name'     => $request->get('name'),
        ]);

        /* @var AccessToken $accessToken */
        $accessToken = $user->createToken('users')->accessToken;

        return response()->json(['token' => $accessToken->token], 201);
    }

    /**
     * @param LoginRequest $request
     * @return JsonResponse
     */
    public function signIn(LoginRequest $request): JsonResponse
    {
        if (!Auth::attempt($request->all(), true)) {
            throw new UserUnauthorizedException("unauthorized");
        }

        return response()->json(Auth::user());
    }

    public function signOut()
    {
        /* @var User $user */
        $user = Auth::user();
        $user->tokens()->delete();
    }

    /**
     * @param AuthRequest $request
     * @return JsonResponse
     * @throws UserUnauthorizedException
     */
    public function getAuthUser(AuthRequest $request): JsonResponse
    {
        /* @var AccessToken $token */
        $token = $this->accessTokenRepository->getByToken($request->get('accessToken'));

        if ($token) {
            if ($request->get('login')) {
                Auth::login($token->tokenable);
            }

            return response()->json(
                [
                    'user'        => $token->tokenable,
                    'accessToken' => $token->token,
                ]
            );
        }

        throw new UserUnauthorizedException("access token is invalid");
    }
}
