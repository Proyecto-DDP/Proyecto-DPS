<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Detalle extends Model
{
    protected $table = "detalle";
    public $incrementing = false;
    protected $primaryKey = "idRecibo";
    protected $fillable=['idRecibo','idServicio', 'cantidad'];
    public $timestamps= false;
}
