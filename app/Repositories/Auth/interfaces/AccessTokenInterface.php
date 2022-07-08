<?php

namespace App\Repositories\Auth\interfaces;

use App\Repositories\RepositoryInterface;
use Illuminate\Database\Eloquent\Model;

interface AccessTokenInterface extends RepositoryInterface
{
    public function getByToken(string $token): Model|null;
}
