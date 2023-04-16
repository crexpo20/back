<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class producto extends Model
{
    use HasFactory;
    protected $table = 'producto';
    protected $primaryKey = 'codprod';
    protected $fillable = ['producto','marca','descripcion','precio','image'];
       

        public function categoria(){
            return $this->hasOne(categorias::class,'codcat');
        }
}
