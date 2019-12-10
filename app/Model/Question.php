<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Question extends Model
{
    protected static function boot()
    {
        parent::boot();

        static::creating(function($question){
            $question->slug = str_slug($question->title); 
        });
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }
    
    protected $fillable = ['title', 'slug', 'body', 'user_id', 'category_id', 'book_id'];

    protected $with = ['replies'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function replies()
    {
        return $this->hasMany(Reply::class)->latest();
    }
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    public function book()
    {
        return $this->belongsTo(Book::class);
    }
    public function love()
    {
        return $this->hasMany(Love::class);
    }
    public function getPathAttribute()
    {
        return ("posts/$this->slug");
    }
}
