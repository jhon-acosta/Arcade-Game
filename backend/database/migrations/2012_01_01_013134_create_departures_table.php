<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDeparturesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('departures', function (Blueprint $table) {
            $table->id();
            $table->string('Attempts')->nullable();
            $table->string('level')->nullable();
            $table->string('time')->nullable();

            $table->unsignedBigInteger('game_id');
            $table->foreign('game_id')->references('id')
            ->on('games')
            ->onUpdate('cascade')->onDelete('cascade');

            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')
            ->on('users')
            ->onUpdate('cascade')->onDelete('cascade');


            $table->timestamps();


        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('departures');
    }
}
