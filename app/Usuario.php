<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    protected $table = "usuarios";
    public $incrementing = false;
    protected $primaryKey = "codigoUsuario";
    protected $fillable=['codigoUsuario','nombresUsuario', 'apellidosUsuario', 'password', 'edad', 'dui', 'cargo', 'telefono'];
    public $timestamps= false;
}
