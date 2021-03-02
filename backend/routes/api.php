<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\TypeGameController;
use App\Http\Controllers\GameController;
use App\Http\Controllers\DepartureController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//USERS
Route::get("/users",[UserController::class , 'index']);
Route::post("/user",[UserController::class,'store']);
Route::put("/user/{id}",[UserController::class ,'update']);
Route::delete("/user/{id}",[UserController::class ,'destroy']);

//TYPES
Route::get("/types-games",[TypeGameController::class , 'index']);
Route::post("/type-game",[TypeGameController::class,'store']);
Route::put("/type-game/{id}",[TypeGameController::class ,'update']);
Route::delete("/type-game/{id}",[TypeGameController::class ,'destroy']);

//GAMES
Route::get("/games",[GameController::class , 'index']);
Route::post("/game",[GameController::class,'store']);
Route::put("/game/{id}",[GameController::class ,'update']);
Route::delete("/game/{id}",[GameController::class ,'destroy']);

//DEPARTURES
Route::get("/departures",[DepartureController::class , 'index']);
Route::post("/departure",[DepartureController::class,'store']);
Route::put("/departure/{id}",[DepartureController::class ,'update']);
Route::delete("/departure/{id}",[DepartureController::class ,'destroy']);

