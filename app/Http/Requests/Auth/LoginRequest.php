<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use JetBrains\PhpStorm\ArrayShape;

class LoginRequest extends FormRequest
{
    public function authorize(): bool
    {
        return Auth::guest();
    }

    #[ArrayShape(
        [
            'email'      => "string",
            'password'   => "string",
            'rememberMe' => "string"
        ]
    )]
    public function rules(): array
    {
        return [
            'email'      => 'required',
            'password'   => 'required',
            'rememberMe' => 'boolean',
        ];
    }

    #[ArrayShape(
        [
            'email.required'    => "string",
            'password.required' => "string"
        ]
    )]
    public function messages(): array
    {
        return [
            'email.required'    => 'Укажите email',
            'password.required' => 'Укажите пароль',
        ];
    }
}
