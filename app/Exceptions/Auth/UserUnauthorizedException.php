<?php

namespace App\Exceptions\Auth;

use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;
use Throwable;

class UserUnauthorizedException extends UnauthorizedHttpException
{
    public function __construct(
        string $challenge,
        string $message = '',
        Throwable $previous = null,
        int $code = 0,
        array $headers = []
    ) {
        parent::__construct($challenge, $message, $previous, 401, $headers);
    }
}
