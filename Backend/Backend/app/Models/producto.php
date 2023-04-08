<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class modeloProducto extends Model
{
    use HasFactory;
    protected $table = 'producto';
    protected $primaryKey = 'codprod';
    protected $fillable = ['codcat','nombrepr','marca','descripcion','precioventa','cantidadtotal','image_path'];
       

        public function categoria(){
            return $this->hasOne(categoria::class,'codcat');
        }
}
