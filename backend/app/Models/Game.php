<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    use HasFactory;

    public function departures(){
        return $this->belongsToMany(Departure::class);
    }
    public function type_game(){
        return $this->belongsToMany(TypeGame::class);
    }
}
