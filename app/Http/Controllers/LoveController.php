<?php

namespace App\Http\Controllers;

use App\Model\Love;
use Illuminate\Http\Request;
use App\Model\Question;
use App\Events\LoveEvent;

class LoveController extends Controller
{
     /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('JWT');
    }


    public function LoveIt(Question $question)
    {
        $question->love()->create([
            'user_id' => auth()->id()
            ]);
            broadcast(new LoveEvent($question->id, 1))->toOthers();
    }

    public function unLoveIt(Question $question)
    {
        $question->love()->where('user_id', auth()->id())->first()->delete();
        broadcast(new LoveEvent($question->id, 0))->toOthers();
    }
}
