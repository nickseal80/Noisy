<?php

namespace App\Http\Controllers\Auth\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use function response;

class AuthDataController extends Controller
{
    public function getSignInData(): JsonResponse
    {
        $data = [
            'loginRequiredMessage'    => __('authentication/errorMessages.signIn.emailRequireMessage'),
            'passwordRequiredMessage' => __('authentication/errorMessages.signIn.passwordRequireMessage'),
        ];

        return response()->json($data);
    }

    public function getSignUpData()
    {
        //
    }
}
