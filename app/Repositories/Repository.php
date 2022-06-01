<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class Repository implements RepositoryInterface
{
    protected Model $model;

    public function get(string|array $select = '*', array $where = []): Collection|array
    {
        return $this->model->newQuery()
            ->select($select)
            ->where($where)
            ->get();
    }

    public function first(string|array $select = '*', array $where = []): Model
    {
        return $this->model->newQuery()
            ->select($select)
            ->where($where)
            ->first();
    }

    public function create(array $create): Model|Builder
    {
        return $this->model->newQuery()
            ->create($create);
    }

    public function update(array $update, array $where): int
    {
        return $this->model->newQuery()
            ->where($where)
            ->update($update);
    }

    public function delete(array $where)
    {
        return $this->model->newQuery()
            ->where($where)
            ->delete();
    }
}
