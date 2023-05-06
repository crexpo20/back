<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class stock extends Model
{
    use HasFactory;
    protected $table = 'stock';
    protected $primaryKey = 'codstock';
    protected $fillable = ['codprod','preciocompra','cantidad'];
    public $timestamps = false;

    public function producto(){
        return $this->belongsTo(producto::class,'codprod');
    }
}