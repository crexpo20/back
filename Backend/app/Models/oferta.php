<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class oferta extends Model
{
    use HasFactory;

    
    protected $table = 'oferta';
    //protected $primaryKey = 'codoferta';
    protected $fillable = ['codprod','descripcion','fechaini','fechafin','precioventa'];
    public $timestamps = false;
    
    public function oferta(){
        return $this->hasOne(producto::class,'codprod');
    }
     
}
