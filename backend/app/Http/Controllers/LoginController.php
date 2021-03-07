<?php

namespace App\Http\Controllers;

use App\Http\Resources\LoginResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LoginController extends Controller
{
    public function login(Request $request,$email)
    {
        $user = DB::table('users')->where('email', $email)->first();

       /* return response()->json([
            'email' => $user->email,
            'password' => $user->password
        ]);*/
        //return $user->password;
        return new LoginResource($user);
    }
}