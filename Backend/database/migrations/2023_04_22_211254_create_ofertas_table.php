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
            $table->id('codoferta');
            $table->integer('codprod');
            $table->foreign('codprod')->references('codprod')->on('producto');
            $table->string('desc');
            $table->date('fechaini');
            $table->date('fechafin');
            $table->decimal('precioventa', 10, 2);
	    $table->decimal('precioanterior',10,2);
	    $table->integer('estado');
            $table->string('nombre');
            $table->string('image');
		
		$table->timestamps();
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
