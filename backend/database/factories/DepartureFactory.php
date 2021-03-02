<?php

namespace Database\Factories;

use App\Models\Departure;
use Illuminate\Database\Eloquent\Factories\Factory;

class DepartureFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Departure::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'score' => $this->faker->randomElement([1,2,3,4,5]),
            'level' => $this->faker->randomElement(['1','2','3']),
            'time' => $this->faker->randomElement(['00:10','00:20','00:30','00:40','00:50']),
            'game_id' => $this->faker->randomElement([1,2]),
            'user_id' => $this->faker->unique()->numberBetween(1, 5)
        ];
    }
}
