<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServiciosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('servicios', function (Blueprint $table) {
            $table->id('idServicio')->unique()->index();
<<<<<<< HEAD
            $table->string('nombreServicio','50');
=======
            $table->string('nombreServicio', '50');
>>>>>>> 14beaddb28312b232ddab58496c183b73817c9f7
            $table->float('tiempoEstimado', 8, 1);
            $table->string('formatoTiempo','50');
            $table->float('precio', 8, 2);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('servicios');
    }
}
