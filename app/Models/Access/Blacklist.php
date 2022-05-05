<?php

namespace App\Models\Access;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blacklist extends Model
{
    use HasFactory;
    
    protected $table = 'blacklist';
    //se você chama a primary key de ID, no laravel não precisa identificar, mas não faz mal identificar.
    protected $primarykey = 'id';

    //Aqui devem ser passados todos os campos que podem ser editados.
    protected $fillable = [
        'email',
    ];
}
