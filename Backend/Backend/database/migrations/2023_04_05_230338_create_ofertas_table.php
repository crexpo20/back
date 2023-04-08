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
        Schema::create('ofertas', function (Blueprint $table) {
            $table->string('codOferta', 5)->primary();
            $table->string('codprod');
            $table->foreign('codprod')->references('codprod')->on('producto');
            $table->string('descripcion');
            $table->date('fechaentrada');
            $table->date('fechavencimiento');
            $table->unsignedInteger('precioVenta');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ofertas');
    }
};
