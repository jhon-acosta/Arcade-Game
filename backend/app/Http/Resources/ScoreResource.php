<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ScoreResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return[
            'id' => $this->id,
            'level' => $this->level,
            'time' => $this->time,
            'points' => $this->points,
            'attempts' => $this->attempts,
            'game_id' => $this->game_id,
            'user_id' => $this->user_id,
        ];
        // return parent::toArray($request);
    }
}
