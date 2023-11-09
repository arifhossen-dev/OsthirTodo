<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Todo>
 */
class TodoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $status = ['Done', 'Pending', 'Inprogress', 'Canceled'];
        return [
            "user_id" => 1,
            "title" => $this->faker->sentence(3),
            "note"=> $this->faker->sentence(200),
            "status"=> $this->faker->randomElement($status),
            "updated_at"=> now(),
            "created_at"=> now(),

        ];
}
}
