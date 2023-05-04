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
        Schema::create('tienda', function (Blueprint $table) {
            $table->id('codtienda');
            $table->string('nombre');
            $table->string('direccion');
            $table->string('Numero');
            $table->string('propietario');
            $table->string('Descripcion');
            $table->string('correo');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tienda');
    }
};
