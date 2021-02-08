<?php

namespace App\Http\Controllers;

use App\Models\Departure;
use Illuminate\Http\Request;
use App\Http\Resources\DepartureResource;

class DepartureController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $departures = Departure::paginate(10);
        return DepartureResource::collection($departures);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $departure = new Departure();
        $departure->attempts = $request->attempts;
        $departure->level = $request->level;
        $departure->time = $request->time;
        $departure->game_id = $request->game_id;
        $departure->user_id = $request->user_id;

        if($departure->save()){
            return new DepartureResource($departure);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Departure  $departure
     * @return \Illuminate\Http\Response
     */
    public function show(Departure $departure)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Departure  $departure
     * @return \Illuminate\Http\Response
     */
    public function edit(Departure $departure)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Departure  $departure
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id )
    {
        $departure = Departure::findOrFail($id);
        $departure->attempts = $request->attempts;
        $departure->level = $request->level;
        $departure->time = $request->time;
        $departure->game_id = $request->game_id;
        $departure->user_id = $request->user_id;
        
        if($departure->save()){
            return new DepartureResource($departure);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Departure  $departure
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id )
    {
        $departure = Departure::findOrFail($id);

        if($departure->delete()){
            return new DepartureResource($departure);
        }
    }
}
