<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mascota extends Model
{
    protected $table = "mascotas";
    public $incrementing = false;
    protected $primaryKey = "codigoMascota";
    protected $fillable=['codigoMascota','idRaza', 'nombreMascota', 'birthYear', 'notas'];
    public $timestamps= false;
}
