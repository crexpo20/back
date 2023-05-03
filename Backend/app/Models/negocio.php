<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class negocio extends Model
{
    use HasFactory;
    protected $table = 'negocio';
    protected $primaryKey = 'id';
    protected $fillable = ['nombre','direccion','numero','propietario','descripcion','correo'];
    public $timestamps = false;

       
   
}