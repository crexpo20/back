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
            $table->charset = 'utf8mb4';
            $table->id('codprod');
            $table->string('producto')-> unique();
            $table->string('marca');
            $table->string('descripcion');
            $table->string('precio');
            $table->string('image');
            $table->integer('codcat');
            $table->foreign('codcat')->references('codcat')->on('categoria');


        });
    }

    public function down()
    {
        Schema::dropIfExists('producto');
    }
};
