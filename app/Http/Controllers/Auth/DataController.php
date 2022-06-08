<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\JsonResponse;

class DataController
{
    public function getLoginData(): JsonResponse
    {
        $locales = [
            'header' => __('auth/text.headerLogin'),
            'fields'        => [
                'email'    => __('auth/labels.email'),
                'password' => __('auth/labels.password'),
                'submitLogin' => __('auth/labels.submitLogin'),
            ],
            'errorMessages' => [
                'emailRequireMessage'    => __('auth/errorMessages.login.emailRequireMessage'),
                'passwordRequireMessage' => __('auth/errorMessages.login.passwordRequireMessage'),
            ],
            'text' => [
                'notHaveAcc' => __('auth/text.notHaveAcc'),
                'login' => __('auth/text.login'),
                'forgetPassword' => __('auth/labels.forgetPassword'),
            ]
        ];

        return response()->json(['locales' => $locales]);
    }
}
