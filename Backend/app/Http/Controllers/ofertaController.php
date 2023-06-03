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
       // Obtener todos las ofertas de la base de datos
       $oferta = oferta::all();
	return $oferta;
     }

   

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $oferta = new oferta([
            'codprod' => $request->input('codprod'),
            'desc' => $request->input('desc'),
            'fechaini' => $request->input('fechaini'),
            'fechafin' => $request->input('fechafin'),
            'precioventa' => $request->input('precioventa'),
	    'precioanterior' =>$request->input('precioanterior'),
            'estado'=>$request->input('estado'),
            'nombre'=>$request->input('nombre'),
            'image'=>$request->input('image')
        ]);
        
        $oferta->save();
        return response()->json(['mensaje' => 'Oferta creado con éxito'], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $oferta =  oferta::find($id);
        return $oferta;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $oferta = oferta::find($id);

    if (!is_null($oferta)) {
    // Actualizar los datos del oferta con los datos del formulario
    $oferta->codprod = $request->input('codprod');
    $oferta->desc = $request->input('desc');
    $oferta->fechaini = $request->input('fechaini');
    $oferta->fechafin = $request->input('fechafin');
    $oferta->precioventa = $request->input('precioventa');
    $oferta->precioventa = $request->input('precioanterior');
    $oferta->estado = $request->input('estado');
    $oferta->nombre = $request->input('nombre');
    $oferta->image = $request->input('image');
    // Guardar los cambios en la base de datos
    $oferta->save();
    // Retornar una respuesta de éxito
    return response()->json(['mensaje' => 'oferta actualizado con éxito'], 200);
    }
    else{
        return response()->json(['mensaje' => 'oferta no encontrado'], 404);
    }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
            // Encuentra la categoría por su ID
            $oferta = oferta::find($id);
            // Verifica si la categoría existe
            if (!$oferta) {
               return response()->json(['mensaje' => 'oferta no encontrado'], 404);
           }
           // Realiza la eliminación
           $oferta->delete();
           // Retorna una respuesta
           return response()->json(['mensaje' => 'oferta eliminado'], 200);
    }
}
