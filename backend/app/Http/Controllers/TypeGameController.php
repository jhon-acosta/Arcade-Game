<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TypeGame;
use App\Http\Resources\TypeGameResource;

class TypeGameController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $types = TypeGame::paginate(10);
        return TypeGameResource::collection($types);
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
        $type = new TypeGame();
        $type->description = $request->description;

        if($type->save()){
            return new TypeGameResource($type);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TypeGame  $typeGame
     * @return \Illuminate\Http\Response
     */
    public function show(TypeGame $typeGame)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TypeGame  $typeGame
     * @return \Illuminate\Http\Response
     */
    public function edit(TypeGame $typeGame)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TypeGame  $typeGame
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $type = TypeGame::findOrFail($id);
        $type->description = $request->description;

        if($type->save()){
            return new TypeGameResource($type);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TypeGame  $typeGame
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $type = TypeGame::findOrFail($id);

        if($type->delete()){
            return new TypeGameResource($type);
        }
    }
}
