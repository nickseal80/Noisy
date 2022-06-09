<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\JsonResponse;

class DataController
{
    public function getLoginData(): JsonResponse
    {
        $locales = [
            'header'        => __('auth/text.headerLogin'),
            'fields'        => [
                'email'       => __('auth/labels.email'),
                'password'    => __('auth/labels.password'),
                'submitLogin' => __('auth/labels.submitLogin'),
            ],
            'errorMessages' => [
                'emailRequireMessage'    => __('auth/errorMessages.login.emailRequireMessage'),
                'passwordRequireMessage' => __('auth/errorMessages.login.passwordRequireMessage'),
            ],
            'text'          => [
                'notHaveAcc'     => __('auth/text.notHaveAcc'),
                'login'          => __('auth/text.login'),
                'forgetPassword' => __('auth/labels.forgetPassword'),
            ],
        ];

        return response()->json(['locales' => $locales]);
    }

    public function getRegisterData(): JsonResponse
    {
        $locales = [
            'header'        => __('auth/text.headerRegister'),
            'fields'        => [
                'email'           => __('auth/labels.email'),
                'password'        => __('auth/labels.password'),
                'confirmPassword' => __('auth/labels.confirmPassword'),
                'chatNickname'    => __('auth/labels.chatNickname'),
                'submitRegister'  => __('auth/labels.submitRegister'),
            ],
            'errorMessages' => [
                'incorrectEmail'  => __('auth/errorMessages.register.incorrectEmail'),
                'minPasswdLength' => __('auth/errorMessages.register.minPasswdLength'),
                'maxPasswdLength' => __('auth/errorMessages.register.maxPasswdLength'),
                'passwdNotMatch'  => __('auth/errorMessages.register.passwdNotMatch'),
                'minNickname'     => __('auth/errorMessages.register.minNickname'),
                'maxNickname'     => __('auth/errorMessages.register.maxNickname'),
            ],
            'text'          => [
                'haveAcc'  => __('auth/text.haveAcc'),
                'register' => __('auth/text.register'),
            ],
        ];

        $config = [
            'minPasswordLength' => config('auth.minPasswordLength'),
            'maxPasswordLength' => config('auth.maxPasswordLength'),
            'minNickNameLength' => config('auth.minNickNameLength'),
            'maxNickNameLength' => config('auth.maxNickNameLength'),
        ];

        return response()->json([
            'locales' => $locales,
            'config'  => $config,
        ]);
    }
}
