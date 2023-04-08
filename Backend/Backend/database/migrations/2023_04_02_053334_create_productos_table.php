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
        Schema::create('producto', function (Blueprint $table) {
            $table->string('codprod', 6)->primary();
            $table->string('codcat');
            $table->foreign('codcat')->references('codcat')->on('categoria');
            //$table->string('codinventario');
            //$table->foreign('codinventario')->references('codinventario')->on('inventario');
            $table->string('nombrepr');
            $table->string('marca');
            $table->string('descripcion');
            $table->decimal('precioventa', 10, 2);
            //$table->decimal('preciocompra', 10, 2);
            $table->unsignedInteger('cantidadtotal');
            $table->string('image_path')->nullable();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('producto');
    }
};
