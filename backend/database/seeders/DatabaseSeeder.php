<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\TypeGame;
use App\Models\Game;
use App\Models\Departure;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
      User::factory(5)->create();
      TypeGame::factory(2)->create();
      Game::factory(2)->create();
      Departure::factory(2)->create();
    }
}
