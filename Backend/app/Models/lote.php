<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class lote extends Model
{
    use HasFactory;
    protected $table = 'lote';
    protected $fillable = ['codprod','fechaentrada','fechavencimiento','preciocompra','cantidad'];
    public $timestamps = false;

    public function producto(){
        return $this->belongsTo(producto::class,'codprod');
    }
}