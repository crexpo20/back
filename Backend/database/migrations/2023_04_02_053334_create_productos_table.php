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
            
            $table->id('codprod');
            $table->string('producto')-> unique();
            $table->string('marca');
            $table->string('desc');
            $table->decimal('precio', 10, 2);
            $table->string('image');
            $table->integer('stock');
            $table->integer('codcat');
            $table->foreign('codcat')->references('codcat')->on('categoria');
	    $table->integer('estado');


        });
    }

    public function down()
    {
        Schema::dropIfExists('producto');
    }
};
