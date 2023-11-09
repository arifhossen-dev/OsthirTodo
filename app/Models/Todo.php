<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Prompts\Note;

class Todo extends Model
{
    use HasFactory;

    protected $fillable = [
        'note', 
        'title', 
        'status', 
        'end_at', 
        'start_at', 
        'created_at', 
        'updated_at'
    ];
    
}
