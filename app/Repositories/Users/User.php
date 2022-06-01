<?php

namespace App\Repositories\Users;

use App\Repositories\Repository;
use App\Repositories\Users\interfaces\UserInterface;
use Illuminate\Database\Eloquent\Model;

class User extends Repository implements UserInterface
{
    protected Model $model;

    public function __construct(\App\Models\User $user)
    {
        $this->model = $user;
    }
}
