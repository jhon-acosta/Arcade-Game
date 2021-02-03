<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    use HasFactory;

    public function departure(){
        return $this->belongsTo(Departure::class);
    }
    public function type_game(){
        return $this->belongsTo(TypeGame::class);
    }
}
