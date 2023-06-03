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
        Schema::create('detalle_venta', function (Blueprint $table) {
            $table->id('codetalle');
            $table->integer('codprod');
            $table->foreign('codprod')->references('codprod')->on('producto');
            $table->integer('cantidadprod');
            $table->decimal('costodetalle', 10, 2);
            $table->string('nombre');
            $table->string('imagen');
            $table->integer('stockdisp');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('detalle_venta');
    }
};