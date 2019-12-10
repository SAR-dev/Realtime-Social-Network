<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Love;
use Faker\Generator as Faker;

$factory->define(Love::class, function (Faker $faker) {
    return [
        'user_id' => function(){
            return \App\User::all()->random();
        }
    ];
});
