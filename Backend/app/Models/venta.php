<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\detalle_venta;
use App\Models\cliente;
class venta extends Model
{
    use HasFactory;
    protected $table = 'venta';
    protected $primaryKey = 'codventa';
    protected $fillable = ['codetalle','costototal','codcliente'];
    public $timestamps = False;    
    
    public function detallesVenta()
    {
        return $this->hasMany(detalle_venta::class, 'codetalle');
    }

    public function cliente()
    {
        return $this->belongsTo(cliente::class, 'codcliente');
    }
}