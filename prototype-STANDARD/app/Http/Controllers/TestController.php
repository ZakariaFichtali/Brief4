<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\test1;

class TestController extends Controller
{
    public function store(Request $request){
        $brief = new test1;

        $brief->firstname = $request->firstname;
        $brief->lastname = $request->lastname;

    }
}
