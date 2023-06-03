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
        Schema::create('venta', function (Blueprint $table) {
            $table->id('codventa');
            $table->integer('codetalle');
            $table->foreign('codetalle')->references('codetalle')->on('detalle_venta');
            $table->decimal('costototal', 10, 2);
            $table->integer('codcliente');
            $table->foreign('codcliente')->references('codcliente')->on('cliente'); 
            $table->String('estadocompra');
            //$table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
   public function down(): void
    {
        Schema::dropIfExists('venta');
    }
};
