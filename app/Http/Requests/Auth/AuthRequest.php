<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use JetBrains\PhpStorm\ArrayShape;

class AuthRequest extends FormRequest
{
    public function authorize(): bool
    {
        return Auth::guest();
    }

    #[ArrayShape(
        [
            'accessToken' => "string",
            'login'       => "boolean"
        ]
    )]
    public function rules(): array
    {
        return [
            'accessToken' => 'required|string',
            'login'       => 'boolean',
        ];
    }
}
