<?php

namespace App\Models\Auth;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\PersonalAccessToken;

/**
 * @property int id
 * @property string tokenable_type
 * @property int tokenable_id
 * @property string name
 * @property string token
 * @property string abilities
 * @property string last_used_at
 * @property string created_at
 * @property string updated_at
 * @property Model tokenable
 */
class AccessToken extends PersonalAccessToken
{
    use HasFactory;

    protected $table = 'personal_access_tokens';

    public function user()
    {
        return $this->tokenable()
            ->where('tokenable_type', '=', "App\Models\User");
    }
}
