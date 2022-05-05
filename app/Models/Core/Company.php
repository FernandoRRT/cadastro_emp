<?php

namespace App\Models\Core;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Company extends Model
{
    use HasFactory;

    protected $table = 'company';
    //se você chama a primary key de ID, no laravel não precisa identificar, mas não faz mal identificar.
    protected $primarykey = 'id';

    //Aqui devem ser passados todos os campos que podem ser editados.
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
