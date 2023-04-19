<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class categoria extends Model
{
    use HasFactory;

    
    protected $table = 'categoria';
    protected $primaryKey = 'codcat';
    protected $fillable = ['nombrecat'];
    public $timestamps = false;

    public function productos(){
        return $this->hasMany(productos::class,'codcat');
    }
    
}