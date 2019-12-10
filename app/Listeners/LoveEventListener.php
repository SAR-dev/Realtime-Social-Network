<?php

namespace App\Listeners;

use App\Events\LoveEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class LoveEventListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  LoveEvent  $event
     * @return void
     */
    public function handle(LoveEvent $event)
    {
        //
    }
}
