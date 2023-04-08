<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\producto;
use Illuminate\Support\Facades\DB;

class productosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $sql = 'SELECT * FROM producto';
        $producto = DB::select($sql);
        return $producto;
    }

   

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $rules = [
            'Nombre de producto' => 'required|min:6|max:20',
            'Código de producto' => 'required|min:1|max:6',
            'Categoria' => 'required|min:1|max:6',
            'Descripción' => 'required|min:25|max:100',
            'Precio de Venta(bs)'=>'required|numeric|money',
          //  'Precio de Compra(bs)'=>'required|numeric|money',
            'Marca' => 'required|min:3|max:20',
            'Imagen' => 'required|max:25',
            //'Cantidad Total'=>'required|numeric',
        ];
    
        $validatedData = $request->validate($rules);
    
        $producto = new producto;
        
        $producto->nombre = $request->input( 'Nombre de producto');
        $producto->codprod = $request->input('Código de producto');
        $producto->categoria = $request->input('Categoria');
        $producto->descripcion = $request->input('Descripción');
        $producto->precioventa = $request->input('Precio de Venta(bs)');
        //$producto->perciocompra= $request->input('Precio de Compra(bs)');
        $producto->marca = $request->input('Marca');
        // $producto->catidadtotal = $request->input('cantidad');
        $producto->save();
    
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $sql = 'SELECT * FROM producto WHERE codprod = $id';
        $producto = DB::select($sql);
        return $producto;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $nombrepr)
    {
        $prod = producto::findOrFail($nombrepr); // encontrar el usuario por el ID

        $prod->nombre = $request->input( 'Nombre de producto');
        $prod->codprod = $request->input('Código de producto');
        $prod->categoria = $request->input('Categoria');
        $prod->descripcion = $request->input('Descripción');
        $prod->precioventa = $request->input('Precio de Venta(bs)');
        $prod->perciocompra= $request->input('Precio de Compra(bs)');
        $prod->marca = $request->input('Marca');
    
        $prod->save(); // guardar los cambios en la base de datos
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $prod = producto::find($id);
        $prod->delete();
    }
}