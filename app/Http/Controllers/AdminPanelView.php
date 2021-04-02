<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
use App\Http\Requests;

class AdminPanelView extends Controller
{
    public function getHospitals(){
        $hospitals = DB::select('select id, hospital_name from wa_hospital_hdr');

        return view('adminpanel',['hospitals'=>$hospitals]);
    }
}
