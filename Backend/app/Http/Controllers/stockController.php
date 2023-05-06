<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\stock;
//use Illuminate\Support\Facades\DB;

class stockController extends Controller
{

    public function index()
    {
        $stock = stock::all();
        return response()->json($stock);
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //$lote = new lote ($request->all());
        //$lote->save();
        //return $lote;
        $stock = new stock([
            'codprod' => $request->input('codprod'),
            'preciocompra' => $request->input('preciocompra'),
            'cantidad' => $request->input('cantidad')
        ]);
        
        $stock->save();


    }
    //public function getstocks(){
    //$stocks = stock::all();
    //return response()->json($stocks);
//}
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return stock::find($id);
    }

    
    /**
     * Update 
     */
    public function update(Request $request, string $id)
    {
        $stock = stock::find($id);

        if (!is_null($stock)) {
    
         $stock->update($request->all());
    
        // Actualizar los datos del stock con los datos del formulario
        //$stock->preciocompra = $request->input('preciocompra');
        //$stock->cantidad = $request->input('cantidad');
        // Guardar los cambios en la base de datos
        $stock->save();

        return response()->json(['mensaje' => 'stock actualizado con éxito'], 200);
        }
        else{

            return response()->json(['mensaje' => 'Error'], 404);
        }
    }

    /**
     * delete
     */
    public function destroy(string $id)
    {
        $stock = stock::find($id);
        $stock->delete();
    }
}