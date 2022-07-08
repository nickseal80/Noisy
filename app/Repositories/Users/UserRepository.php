<?php

namespace App\Repositories\Users;

use App\Models\User;
use App\Repositories\Repository;
use App\Repositories\Users\interfaces\UserInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class UserRepository extends Repository implements UserInterface
{
    protected Model $model;

    public function __construct(User $user)
    {
        $this->model = $user;
    }

    public function create(array $create): Model|Builder
    {
        $user = new User();
        collect($create)->each(function ($value, $attribute) use ($user) {
            $user->$attribute = $value;
        });

        if (!$user->remember_token) {
            $user->remember_token = Str::random(12);
        }
        $user->save();

        return $user;
    }
}
