<?php

namespace App\Repositories\Users\interfaces;

use Illuminate\Database\Eloquent\Model;

interface UserInterface
{
    public function getByAccessToken(string $accessToken, array|string $select = '*'): Model|null;
}
