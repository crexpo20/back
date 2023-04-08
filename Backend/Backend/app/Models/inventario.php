<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class modeloInventario extends Model
{
    use HasFactory;

    protected $fillable = [
        'codInventario',
    ];
}
