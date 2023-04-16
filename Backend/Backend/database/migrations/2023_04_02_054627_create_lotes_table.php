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
        Schema::create('lote', function (Blueprint $table) {
            $table->string('codlote', 5)->primary();
            $table->integer('codprod');
            $table->foreign('codprod')->references('codprod')->on('producto');
            $table->date('fechaentrada');
            $table->date('fechavencimiento');
            $table->unsignedInteger('cantidad');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lote');
    }
};
