<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('negocio', function (Blueprint $table) {
            $table->id('codnegocio');
            $table->string('nombrenegocio');
            $table->string('direccion');
            $table->string('nombrepropietario');
            $table->string('correo');
            $table->string('descripcion');
            $table->string('telefono');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('negocio');
    }
};
