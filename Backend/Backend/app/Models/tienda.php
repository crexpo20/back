<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class modeloTienda extends Model
{
    use HasFactory;
    protected $table = 'tienda';
    protected $primaryKey = 'codtienda';
    protected $fillable = ['nombre','dirección','Numero','propietario','Descripcion','correo',];
       

       
   
}
