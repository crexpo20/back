<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\tienda;
use Illuminate\Support\Facades\DB;
class tiendasController extends Controller
{
    
    public function index()
    {
     
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $tienda = new tienda();
        $tienda-> codcat = "td001";
        $tienda-> nombre->input('Nombre');
        $tienda-> direccion->input('Dirección');
        $tienda-> Numero->input('Numero');
        $tienda-> propietario->input('Nombre del propietario');
        $tienda-> Descripcion->input('Descripción');
        $tienda-> correo->input('Correo electrónico');
        // Guarda el usuario en la base de datos
        $tienda->save();
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $tienda = new tienda ($request->all());
        $tienda->save();
        return $tienda;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return tienda::find($id);
    }

    
    /**
     * Update 
     */
    public function update(Request $request, string $id)
    {
        $tienda = tienda::find($id);
        if(!is_null($tienda)){
            $tienda->update($request->all());
            return $tienda;
        }
    }

    /**
     * delete
     */
    public function destroy(string $id)
    {
        $tienda = tienda::find($id);
        $tienda->delete();
    }
}