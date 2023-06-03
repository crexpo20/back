<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class producto extends Model
{
    use HasFactory;
    protected $table = 'producto';
    protected $primaryKey = 'codprod';
    protected $fillable = ['producto','marca','desc','precio','image','codcat','stock','estado'];
    public $timestamps = false;

        public function categoria(){
            return $this->belongsTo(categoria::class,'codcat');
        }
        
}