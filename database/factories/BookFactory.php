<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Book;
use Faker\Generator as Faker;

$factory->define(Book::class, function (Faker $faker) {
    $word = $faker->word;
    return [
        'name' => $word,
        'slug' => str_slug($word)
    ];
});
