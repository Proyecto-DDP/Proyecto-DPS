<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePropietarioMascotaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('propietario_mascota', function (Blueprint $table) {
            $table->index(['codigoUsuario', 'codigoMascota']);
            $table->string('codigoUsuario', '50');
            $table->string('codigoMascota', '10');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('propietario_mascota');
    }
}
