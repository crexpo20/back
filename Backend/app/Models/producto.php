<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class producto extends Model
{
    use HasFactory;
    protected $table = 'producto';
    protected $primaryKey = 'codprod';
    protected $fillable = ['producto','marca','descripcion','precio','image','codcat'];
    public $timestamps = false;

        public function categoria(){
            return $this->belongsTo(categorias::class,'codcat');
        }
        
}