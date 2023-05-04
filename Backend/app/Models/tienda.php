<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tienda extends Model
{
    use HasFactory;
    protected $table = 'tienda';
    protected $primaryKey = 'codtienda';
    protected $fillable = ['nombre','dir','numero','propietario','descripcion','correo'];
    public $timestamps = false;

       
   
}
