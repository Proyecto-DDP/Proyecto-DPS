<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Recibo extends Model
{
    protected $table = "recibos";
    public $incrementing = false;
    protected $primaryKey = "idRecibo";
    protected $fillable=['idRecibo','codigoUsuario', 'idDetalle', 'total'];
    public $timestamps= false;
}
