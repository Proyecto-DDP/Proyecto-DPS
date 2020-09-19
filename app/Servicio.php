<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Servicio extends Model
{
    protected $table = "servicios";
    public $incrementing = false;
    protected $primaryKey = "idServicio";
    protected $fillable=['idServicio','nombreServicio', 'tiempoEstimado', 'formatoTiempo', 'precio'];
    public $timestamps= false;
}
