<?php

namespace App\Http\Controllers;
use App\Models\venta;
use App\Models\detalle_venta;
use App\Models\cliente;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ventaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $ventaTable = venta::all();
        //$categoria = categoria::all();

         // Retornar los productos como respuesta
         return $ventaTable;
    }

    /**
     * Show the form for creating a new resource.
     */
    /**
     * Store a newly created resource in storage.
     */
    
    /* public function store(Request $request)
     {
         $venta = new venta([
             'codetalle' => $request->input('codetalle'),
             'costototal' => $request->input('costototal'),
             'codcliente' => $request->input('codcliente'),
             'estadocompra' => $request->input('estadocompra')
         ]);
     
         $venta->save();
     
         return response()->json(['mensaje' => 'venta creada correctamente']);
     }*/
    
    public function store(Request $request)
    {
        
        $codetalle = $request->input('codetalle');
        $costototal = $request->input('costototal');
        $codcliente = $request->input('codcliente');
        $estadocompra = $request->input('estadocompra');

        // Crear una nueva venta
        $venta = new venta();
        $venta->codetalle = $codetalle;
        $venta->costototal = $costototal;
        $venta->codcliente = $codcliente;
        $venta->estadocompra = $estadocompra;
        $venta->save();

        // Devolver una respuesta de éxito
        return response()->json(['message' => 'Venta creada correctamente']);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        // Obtener la venta para editar según su ID
        $venta = venta::find($id);

        if ($venta) {
            // Mostrar el formulario de edición de venta con la venta encontrada
            return view('editVenta', compact('venta'));
        } else {
            // Manejar la situación en la que no se encuentra la venta con el ID proporcionado
            return response()->json(['error' => 'Venta no encontrada'], 404);
        }
    }
    /*public function crearVenta($clienteId, $detalleVentaId)
    {
        // Obtener el cliente por su ID
        $cliente = cliente::find($clienteId);
        if (!$cliente) {
            return response()->json(['message' => 'Cliente no encontrado'], 404);
        }

        // Código para crear la venta
        $venta = venta::create([
            'codcliente' => $cliente->id,
            'total' => 0, // Se establecerá correctamente más adelante
        ]);
        // Obtener los detalles de venta por sus IDs
        $detallesVenta = detalle_venta::whereIn('id', $detalleVentaId)->get();
        // Añadir los detalles de venta a la venta creada
        foreach ($detallesVenta as $detalle) {
            $detalle->codventa = $venta->id;
            $detalle->save();
        }

        // Calcular el total de la venta sumando los precios de los detalles de venta
        $total = detalle_venta::where('codventa', $venta->id)->sum('costodetalle');
        $venta->costototal = $total;
        $venta->save();

        // Resto de la lógica...

        return response()->json(['message' => 'Venta creada con éxito']);
    }*/

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // Obtener la venta para editar según su ID
        $venta = venta::find($id);

        if ($venta) {
            // Mostrar el formulario de edición de venta con la venta encontrada
            return view('editVenta', compact('venta'));
        } else {
            // Manejar la situación en la que no se encuentra la venta con el ID proporcionado
            return response()->json(['error' => 'Venta no encontrada'], 404);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
         // Obtener la venta para editar según su ID
         $venta = venta::find($id);

         if ($venta) {
             // Mostrar el formulario de edición de venta con la venta encontrada
             return view('editVenta', compact('venta'));
         } else {
             // Manejar la situación en la que no se encuentra la venta con el ID proporcionado
             return response()->json(['error' => 'Venta no encontrada'], 404);
         }
    }
    /**
     * Update the specified resource in storage.
     */
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $venta = venta::find($id);

        if ($venta) {
            $venta->delete();
            // Devolver una respuesta de éxito
            return response()->json(['message' => 'Venta eliminada correctamente']);
        } else {
            // Manejar la situación en la que no se encuentra la venta con el ID proporcionado
            return response()->json(['error' => 'Venta no encontrada'], 404);
        }
    }
}
