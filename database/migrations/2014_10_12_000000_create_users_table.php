<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Usuarios', function (Blueprint $table) {
            $table->string('codigoUsuario', '50')->unique();
            $table->string('nombresUsuario', '50');
            $table->string('apellidosUsuario', '50');
            $table->string('password');
            $table->integer('edad');
            $table->string('dui', '9');
            $table->string('cargo','25');
            $table->string('telefono','9');
            $table->rememberToken();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
