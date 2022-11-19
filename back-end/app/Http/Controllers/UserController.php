<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    //
    function register(Request $req){
        $user = new User;
        $user-> name= $req->input('name');
        $user-> email= $req->input('email');
        $user-> password= Hash::make($req->input('password'));
        $user->save();
        return $user;

    }

    function login(){
        return 'login';
    }
}
