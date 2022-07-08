<?php

namespace App\Repositories\Auth;

use App\Models\Auth\AccessToken;
use App\Repositories\Auth\interfaces\AccessTokenInterface;
use App\Repositories\Repository;
use Illuminate\Database\Eloquent\Model;

class AccessTokenRepository extends Repository implements AccessTokenInterface
{
    protected Model $model;

    public function __construct(AccessToken $accessToken)
    {
        $this->model = $accessToken;
    }

    public function getByToken(string $token): Model|null
    {
        return $this->model->newQuery()
            ->where('token', '=', $token)
            ->first();
    }
}
