<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class lote extends Model
{
    use HasFactory;
    protected $table = 'lote';
    protected $primaryKey = 'codlote';
    protected $fillable = ['codprod','fechaentrada','fechavencimiento','cantidad',];

    public function lote(){
        return $this->hasOne(producto::class,'codprod');
    }


}