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
            $table->string('codigoUsuario')->unique();
            $table->string('nombresUsuario');
            $table->string('apellidosUsuario');
            $table->string('password');
            $table->integer('edad');
            $table->string('dui');
            $table->string('cargo');
            $table->string('telefono');
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
