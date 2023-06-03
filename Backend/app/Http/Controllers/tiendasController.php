<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\;
use Illuminate\Support\Facades\DB;
class tiendasController extends Controller
{
    
    public function index()
    {
      // Obtener todos los producto de la base de datos
      $tienda=tienda::all();
      return response()->json(['tienda' => $tienda], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $tienda = new tienda([
            'nombre' => $request->input('nombre'),
            'dir' => $request->input('dir'),
            'numero' => $request->input('numero'),
            'propietario' => $request->input('propietario'),
            'descripcion' => $request->input('descripcion'),
            'correo' => $request->input('correo'),
            'image' => $request->input('image')
        ]);
    
        // Guardar el nuevo producto en la base de datos
        $tienda->save();
    
        // Retornar una respuesta de éxito
        return response()->json(['mensaje' => 'tienda guardada con exito'], 201);
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