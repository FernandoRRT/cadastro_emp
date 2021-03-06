<?php

namespace App\Models\Core;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $table = 'company';
    protected $primarykey = 'id';

    protected $fillable = [
        'trading_name',
        'cnpj',
        'foundation',
        'email',
        'phone',
        'zipcode',
        'address',
    ];
}
