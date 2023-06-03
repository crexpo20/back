<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class oferta extends Model
{
    use HasFactory;

    
    protected $table = 'oferta';
    protected $primaryKey = 'codoferta';
     protected $fillable = ['codprod','desc','fechaini','fechafin','precioventa','precioanterior','estado','nombre','image'];
    public $timestamps = false;
    
    public function producto(){
        return $this->hasOne(producto::class,'codprod');
    }
     
}
