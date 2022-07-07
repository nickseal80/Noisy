<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use JetBrains\PhpStorm\ArrayShape;

class RegisterRequest extends FormRequest
{
    public function authorize(): bool
    {
        return Auth::guest();
    }

    #[ArrayShape(
        [
            'email'           => "string",
            'password'        => "array",
            'confirmPassword' => "array",
            'name'            => "array"
        ]
    )]
    public function rules(): array
    {
        return [
            'email'           => 'required|email|unique:users,email|max:255',
            'password'        => [
                'required',
                sprintf('min:%s', config('auth.minPasswordLength')),
                sprintf('max:%s', config('auth.maxPasswordLength')),
            ],
            'confirmPassword' => [
                'required',
                'same:password'
            ],
            'name'            => [
                'required',
                sprintf('min:%s', config('auth.minNickNameLength')),
                sprintf('max:%s', config('auth.maxNickNameLength')),
            ]
        ];
    }

    #[ArrayShape(
        [
            'email.required'           => 'string',
            'email.unique'             => 'string',
            'email.email'              => 'string',
            'password.required'        => 'string',
            'password.min'             => 'string',
            'password.max'             => 'string',
            'confirmPassword.required' => 'string',
            'confirmPassword.same'     => 'string',
            'name.required'            => 'string',
            'name.min'                 => 'string',
            'name.max'                 => 'string',
        ]
    )]
    public function messages(): array
    {
        return [
            'email.required' => 'Укажите email',
            'email.unique'   => 'Данный email уже существует',
            'email.email'    => 'Email некорректен',

            'password.required' => 'Укажите пароль',
            'password.min'      => 'Пароль не должен быть менее :min символов',
            'password.max'      => 'Пароль не должен превышать :max символов',

            'confirmPassword.required' => 'Подтвердите пароль',
            'confirmPassword.same'     => 'Подтверждение пароля не соответствует паролю',

            'name.required' => 'Укажите имя (или желаемый никнейм в чате)',
            'name.min'      => 'Имя не должно быть менее :min символов',
            'name.max'      => 'Имя не должно превышать :max символов',
        ];
    }
}
