<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SearchPostController extends Controller
{
    public function searchSubmit(Request $request)
    {
    	$response = response()->json([$request->all()]);
        return view('search');
    }
}
