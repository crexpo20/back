<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\categoria;
use Illuminate\Support\Facades\DB;

class categoriaController extends Controller
{
   
    public function index()
    {
        //$sql = 'SELECT * FROM categoria';
       // $categoria = DB::select($sql);
        //return $categoria;
         // Obtener todos los productos de la base de datos
         $categoria = categoria::all();

         // Retornar los productos como respuesta
         return $categoria;
    }
    /**
     * Store  
     */
    public function store(Request $request)
    {
        $categoria = new categoria ($request->all());
        $categoria->save();
        return $categoria;
    }

    public function create(Request $request)
    {
        
        // Crear una nueva instancia del modelo producto con los datos del formulario
        $categoria = new categoria([
            'nombrecat' => $request->input('nombrecat'),
            
        ]);

        // Guardar el nuevo producto en la base de datos
        $categoria->save();
        return $categoria; 
    }
    /**
     * Display 
     */
    public function show(string $id)
    {
        $sql = 'SELECT * FROM categoria WHERE codcat = $id';
        $categoria = DB::select($sql);
        return $categoria;
    }

    

    /**
     * Update 
     */
    public function update(Request $request, string $id)
    {
    
    }

    /**
     * delete
     */
    public function destroy(string $id)
    {
        // Encuentra la categoría por su ID
        $categoria = categoria::find($id);
         // Verifica si la categoría existe
         if (!$categoria) {
            return response()->json(['mensaje' => 'Categoría no encontrada'], 404);
        }

        // Realiza la eliminación
        $categoria->delete();

        // Retorna una respuesta
        return response()->json(['mensaje' => 'Categoría eliminada'], 200);
        $categoria->delete();

    }
}
