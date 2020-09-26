<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cita extends Model
{
    protected $table = "citas";
    public $incrementing = false;
    protected $primaryKey = "idCita";
    protected $fillable=['idCita','codigoUsuario', 'fecha', 'idRecibo'];
    public $timestamps= false;
}
