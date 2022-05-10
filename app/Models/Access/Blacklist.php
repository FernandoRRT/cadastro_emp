<?php

namespace App\Models\Access;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blacklist extends Model
{
    use HasFactory;
    
    protected $table = 'blacklist';
    protected $primarykey = 'id';
    protected $fillable = [
        'email',
    ];
}
