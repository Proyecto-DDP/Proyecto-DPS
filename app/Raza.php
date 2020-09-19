<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Raza extends Model
{
    protected $table = "razas";
    public $incrementing = false;
    protected $primaryKey = "idRaza";
    protected $fillable=['idRaza','nombreRaza','especie'];
    public $timestamps= false;
}
