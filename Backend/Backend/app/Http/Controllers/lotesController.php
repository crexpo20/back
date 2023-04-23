<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\lote;
use Illuminate\Support\Facades\DB;

class lotesController extends Controller
{

    public function index()
    {
    
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $lote = new lote ($request->all());
        $lote->save();
        return $lote;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return lote::find($id);
    }

    
    /**
     * Update 
     */
    public function update(Request $request, string $id)
    {
        $lote = lote::find($id);
        if(!is_null($lote)){
            $lote->update($request->all());
            return $lote;
        }
    }

    /**
     * delete
     */
    public function destroy(string $id)
    {
        $lote = lote::find($id);
        $lote->delete();
    }
}