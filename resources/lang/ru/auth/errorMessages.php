<?php

return [
    'login' => [
        'emailRequireMessage' => 'Введите Email',
        'passwordRequireMessage' => 'Введите пароль',
    ],
    'register' => [
        'incorrectEmail' => 'Некорректный email',
        'minPasswdLength' => 'Минимальная длина пароля не должна быть меньше ' . config('auth.minPasswordLength') . ' символов',
        'maxPasswdLength' => 'Максимальная длина пароля не должна превышать ' . config('auth.maxPasswordLength') . ' символов',
        'passwdNotMatch' => 'Подтверждение пароля не совпадает с указанным паролем',
        'minNickname' => 'Ник в чате не должен быть менее ' . config('auth.minNickNameLength') . ' символов',
        'maxNickname' => 'Ник в чате не должен превышать ' . config('auth.maxNickNameLength') . ' символов',
    ],
];
