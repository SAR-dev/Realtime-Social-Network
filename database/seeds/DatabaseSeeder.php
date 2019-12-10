<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Model\Category;
use App\Model\Book;
use App\Model\Question;
use App\Model\Reply;
use App\Model\Like;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        factory(User::class, 10)->create();
        factory(Category::class, 5)->create();
        factory(Book::class, 5)->create();
        factory(Question::class, 10)->create()->each(function ($question) {
            return $question->love()->save(factory(Love::class)->make());
        });;
        factory(Reply::class, 50)->create()->each(function ($reply) {
            return $reply->like()->save(factory(Like::class)->make());
        });
    }
}
