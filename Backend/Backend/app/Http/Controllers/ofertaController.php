<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\oferta;
use Illuminate\Support\Facades\DB;

class ofertaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $sql = 'SELECT * FROM oferta';
        $oferta = DB::select($sql);
        return $oferta;
    }

   

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $rules = [
            'Producto' => 'required|min:2|max:20',
            'Precio de Venta(bs)' =>'required|numeric|money',
            'Inicio de oferta' => 'required|date',
            'Fin oferta' => 'required|date',
            'Descripción'=>'required|min:10|max:100',
        ];
    
        $validatedData = $request->validate($rules);
    
        $oferta = new oferta();
        $oferta->descripcion = $request->input('Descripción');
        $oferta->fechaIni = $request->input('Inicio de oferta');
        $oferta->fechaFin = $request->input('Fin oferta');
        $oferta->precioventa = $request->input('Precio de Venta(bs)');
        $oferta->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return oferta::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        return oferta::find($id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $oferta = oferta::find($id);
        $oferta->delete();
    }
}
