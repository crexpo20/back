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

       // Retornar los oferta como respuesta
       return response()->json(['ofeta' => $oferta], 200);
    }

   

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        /*
        $rules = [
            'Producto' => 'required|min:2|max:20',
            'Precio de Venta(bs)' =>'required|numeric|money',
            'Inicio de oferta' => 'required|date',
            'Fin oferta' => 'required|date',
            'Descripción'=>'required|min:10|max:100',
        ];
    
        $validatedData = $request->validate($rules);
    */
        $oferta = new oferta();
        $oferta->descripcion = $request->input('Descripción');
        $oferta->fechaIni = $request->input('Inicio de oferta');
        $oferta->fechaFin = $request->input('Fin oferta');
        $oferta->precioventa = $request->input('Precio de Venta(bs)');
        $oferta->save();
         // Retornar una respuesta de éxito
         return response()->json(['mensaje' => 'oferta creada con éxito'], 201);
    }

    /**
     * Display the specified resource.
     */
    
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $oferta = oferta::find($id);

    if (!is_null($oferta)) {

     

    // Actualizar los datos del oferta con los datos del formulario
    $oferta->codprod = $request->input('codprod');
    $oferta->descripcion = $request->input('descripcion');
    $oferta->fechaentrada = $request->input('fechaentrada');
    $oferta->fechavencimiento = $request->input('fechavencimiento');
    $oferta->precioVenta = $request->input('precioVenta');
   

    // Guardar los cambios en la base de datos
    $oferta->save();

    // Retornar una respuesta de éxito
    return response()->json(['mensaje' => 'oferta actualizado con éxito'], 200);
    }

    else{
        return response()->json(['mensaje' => 'Producto no encontrado'], 404);
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
