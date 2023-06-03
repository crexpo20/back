<?php

namespace App\Models;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cliente extends Model implements Authenticatable
{
    use HasFactory;

    protected $table = 'cliente';
    protected $primaryKey = 'codcliente';
    protected $fillable = ['nombre', 'apellido', 'correo', 'password'];
    public $timestamps = false;
    public function ventas(){
        return $this->hasMany(venta::class,'codcliente');
    }
    public function getAuthIdentifierName()
    {
        return 'codcliente';
    }

    public function getAuthIdentifier()
    {
        return $this->{$this->getAuthIdentifierName()};
    }

    public function getAuthPassword()
    {
        return $this->password;
    }

    public function getRememberToken()
    {
        return null;
    }

    public function setRememberToken($value)
    {
        // No se requiere implementación
    }

    public function getRememberTokenName()
    {
        return null;
    }

}
