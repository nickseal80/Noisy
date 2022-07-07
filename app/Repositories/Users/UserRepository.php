<?php

namespace App\Repositories\Users;

use App\Models\User;
use App\Repositories\Repository;
use App\Repositories\Users\interfaces\UserInterface;
use Illuminate\Database\Eloquent\Model;

class UserRepository extends Repository implements UserInterface
{
    protected Model $model;

    public function __construct(User $user)
    {
        $this->model = $user;
    }

    public function getByAccessToken(string $accessToken, array|string $select = '*'): Model|null
    {
        return User::query()
            ->select($select)
            ->where('access_token', '=', $accessToken)
            ->first();
    }
}
