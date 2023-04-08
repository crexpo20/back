<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class modeloOferta extends Model
{
    use HasFactory;

    
    protected $table = 'oferta';
    protected $primaryKey = 'codoferta';
    protected $fillable = ['codprod','descripcion','fechaIni','fechaFin','precioVenta'];

    public function oferta(){
        return $this->hasOne(producto::class,'codprod');
    }
     
}
