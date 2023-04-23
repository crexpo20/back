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
        Schema::create('oferta', function (Blueprint $table) {
            $table->id();
            $table->string('producto');
            $table->unsignedBigInteger('codprod');
            $table->foreign('codprod')->references('codprod')->on('producto');
            $table->string('precioferta');
            $table->string('descripción');
            $table->date('fechainicio');
            $table->date('fechafin');



        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('oferta');
    }
};
