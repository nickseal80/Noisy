<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

interface RepositoryInterface
{
    public function get(string|array $select = '*', array $where = []): Collection|array;

    public function first(string|array $select = '*', array $where = []): Model;

    public function create(array $create): Model|Builder;

    public function update(array $update, array $where): int;

    public function delete(array $where);
}
