<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class QuestionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'path' => $this->path,
            'slug' => $this->slug,
            'replies' => ReplyResource::collection($this->replies),
            'reply_count' => $this->replies->count(),
            'body' => $this->body,
            'created_at' => $this->created_at->diffForHumans(),
            'user' => $this->user->name,
            'user_id' => $this->user_id,
            'category_id' => $this->category_id,
            'book_id' => $this->book_id,
            'love_count' => $this->love->count(),
            'loved' => !! $this->love->where('user_id', auth()->id())->count(),
        ];
    }
}
