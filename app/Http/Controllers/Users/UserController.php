<?php

namespace App\Http\Controllers\Users;

use App\Exceptions\Auth\NoAccessTokenException;
use App\Exceptions\User\UserNotFoundException;
use App\Http\Controllers\Controller;
use App\Repositories\Users\UserRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserController extends Controller
{
    protected UserRepository $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * @param Request $request
     * @return JsonResponse
     * @throws NoAccessTokenException
     * @throws UserNotFoundException
     */
    public function getUserData(Request $request): JsonResponse
    {
        if ($request->has('accessToken')) {
            $user = $this->userRepository->getByAccessToken($request->get('accessToken'));

            if (!$user) {
                throw new UserNotFoundException("User not found!", 404);
            }

            return response()->json(['user' => $user]);
        }

        throw new NoAccessTokenException("Access token missing", 401);
    }
}
