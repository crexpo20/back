<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\detalle_venta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class detalle_ventaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $detalle = detalle_venta::all();
        
         return $detalle;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
{
    // Obtener todos los productos para mostrar en el formulario de creación
    $productos = DB::table('producto')->get();

    // Convertir los productos a formato JSON
    $productosJson = json_encode($productos);

    // Devolver una respuesta JSON con los productos
    return response()->json($productosJson);
}

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    $detalleVenta = new detalle_venta([
        'codprod' => $request->input('codprod'),
        'cantidadprod' => $request->input('cantidadprod'),
        'costodetalle' => $request->input('costodetalle'),
        'nombre' => $request->input('nombre'),
        'imagen' => $request->input('imagen'),
        'stockdisp' => $request->input('stockdisp')
    ]);

    $detalleVenta->save();

    return response()->json(['mensaje' => 'Detalle de venta creado correctamente']);
}


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $detalleVenta = DB::table('detalle_venta')
            ->join('producto', 'detalle_venta.codprod', '=', 'producto.codprod')
            ->select('detalle_venta.*', 'producto.nombre as nombre_producto')
            ->where('detalle_venta.codetalle', $id)
            ->first();
    
        if ($detalleVenta) {
            // Aquí puedes realizar las acciones que deseas con los datos obtenidos
            // Puedes acceder a los campos de la tabla usando la notación $detalleVenta->campo
    
            // Crear un array con los datos del detalle de venta
            $data = [
                'codetalle' => $detalleVenta->codetalle,
                'codprod' => $detalleVenta->codprod,
                'nombre_producto' => $detalleVenta->nombre_producto,
                'cantidadprod' => $detalleVenta->cantidadprod,
                'costodetalle' => $detalleVenta->costodetalle,
                'nombre' => $detalleVenta->nombre,
                'imagen' => $detalleVenta->imagen,
                'stockdisp'=>$detalleVenta->stockdisp
            ];
    
            // Convertir el array a formato JSON
            $json = json_encode($data);
    
            // Devolver la respuesta JSON
            return response()->json($json);
        } else {
            // Manejar la situación en la que no se encuentra el detalle de venta con el ID proporcionado
            return response()->json(['error' => 'Detalle de venta no encontrado'], 404);
        }
    }
    
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
{
    /*$detalleVenta = DB::table('detalle_venta')
        ->join('producto', 'detalle_venta.codprod', '=', 'producto.codprod')
        ->select('detalle_venta.*', 'producto.nombre as nombre_producto')
        ->where('detalle_venta.codetalle', $id)
        ->first();

    if ($detalleVenta) {
        // Aquí puedes realizar las acciones que deseas con los datos obtenidos
        // Puedes acceder a los campos de la tabla usando la notación $detalleVenta->campo

        // Ejemplo de uso:
        $codetalle = $detalleVenta->codetalle;
        $codprod = $detalleVenta->codprod;
        $nombreProducto = $detalleVenta->nombre_producto;
        $cantidadprod = $detalleVenta->cantidadprod;
        $costodetalle = $detalleVenta->costodetalle;

        // Crear un array con los datos del detalle de venta
        $data = [
            'codetalle' => $codetalle,
            'codprod' => $codprod,
            'nombreProducto' => $nombreProducto,
            'cantidadprod' => $cantidadprod,
            'costodetalle' => $costodetalle
        ];

        // Convertir el array a formato JSON
        $json = json_encode($data);

        // Devolver la respuesta JSON
        return response()->json($json);
    } else {
        // Manejar la situación en la que no se encuentra el detalle de venta con el ID proporcionado
        return response()->json(['error' => 'Detalle de venta no encontrado'], 404);
    }
    */

}


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
{
    $detalleVenta = DB::table('detalle_venta')->where('codetalle', $id)->first();

    if ($detalleVenta) {
        // Validar y procesar los datos recibidos en la solicitud
        $request->validate([
            'codprod' => 'required|integer',
            'cantidadprod' => 'required|integer',
            'costodetalle' => 'required|numeric',
            'nombre' => 'required|string',
            'imagen' => 'required|string',
            'stockdisp' => 'required|integer',
        ]);

        $codprod = $request->input('codprod');
        $cantidadprod = $request->input('cantidadprod');
        $costodetalle = $request->input('costodetalle');
        $nombre = $request->input('nombre');
        $imagen = $request->input('imagen');
        $stockdisp = $request ->input('stockdisp');

        // Actualizar los campos del detalle de venta
        DB::table('detalle_venta')->where('codetalle', $id)->update([
            'codprod' => $codprod,
            'cantidadprod' => $cantidadprod,
            'costodetalle' => $costodetalle,
            'nombre' => $nombre,
            'imagen' => $imagen,
            'stockdisp' =>$stockdisp,
        ]);

        // Devolver una respuesta de éxito
        return response()->json(['message' => 'Detalle de venta actualizado correctamente']);
    } else {
        // Manejar la situación en la que no se encuentra el detalle de venta con el ID proporcionado
        return response()->json(['error' => 'Detalle de venta no encontrado'], 404);
    }
}


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
{
    $detalleVenta = DB::table('detalle_venta')->where('codetalle', $id)->delete();

    if ($detalleVenta) {
        // La eliminación se realizó correctamente
        return response()->json(['message' => 'Detalle de venta eliminado correctamente']);
    } else {
        // Manejar la situación en la que no se encuentra el detalle de venta con el ID proporcionado
        return response()->json(['error' => 'Detalle de venta no encontrado'], 404);
    }
}

}