<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\producto;
use Illuminate\Support\Facades\DB;

class productosController extends Controller
{

    public function index()
    {
        // Obtener todos los producto de la base de datos
        $producto = producto::all();

        // Retornar los producto como respuesta
        return response()->json(['producto' => $producto], 200);
    }

    public function create(Request $request)
    {
        /*
        // Validar los datos del formulario de creación
        $rules=[
            'producto' => 'unique:producto',
        ];
        $request->validate($rules);
        */
        // Crear una nueva instancia del modelo producto con los datos del formulario
        $producto = new producto([
            'producto' => $request->input('producto'),
            'marca' => $request->input('marca'),
            'descripcion' => $request->input('descripcion'),
            'precio' => $request->input('precio'),
            'image' => $request->input('image'),
            'codcat' => $request->input('codcat')
        ]);

        // Guardar el nuevo producto en la base de datos
        $producto->save();

        // Retornar una respuesta de éxito
        return response()->json(['mensaje' => 'Producto creado con éxito'], 201);
    }


    public function store(Request $request)
{
    // el problema esta en tus reglas, solo controlas con las reglas, 
    //no le mandas ni una respuesta y por eso hay un error 500, tinene que mandar algo si o si
    //utiliza return response
    // Validar los datos del formulario de creación
    /*$rules=[
        'producto' => 'required|min:2|max:30',
        'marca'=>'required|min:2|max:15',
        'descripcion'=>'required|min:25|max:100',
        'precio'=>'required|max:7',
        'image'=>'required|max:255',
        'codcat'=>'required | exists:categorias,codcat'
    ];
    $request->validate($rules);
    */
    //
    // Crear una nueva instancia del modelo producto con los datos del formulario
    //sin las reglas se pudo hacer el insert de datos
    $producto = new producto([
        'producto' => $request->input('producto'),
        'marca' => $request->input('marca'),
        'descripcion' => $request->input('descripcion'),
        'precio' => $request->input('precio'),
        'image' => $request->input('image'),
        'codcat' => $request->input('codcat')
    ]);

    // Guardar el nuevo producto en la base de datos
    $producto->save();

    // Retornar una respuesta de éxito
    return response()->json(['mensaje' => 'Producto creado con éxito'], 201);
}

public function update(Request $request, $id)
{
    
    // Buscar el producto existente en la base de datos por su ID
    $producto = producto::find($id);

    if (!is_null($producto)) {

     //$producto->update($request->all());

    // Actualizar los datos del producto con los datos del formulario
    $producto->producto = $request->input('producto');
    $producto->marca = $request->input('marca');
    $producto->descripcion = $request->input('descripcion');
    $producto->precio = $request->input('precio');
    $producto->image = $request->input('image');
    $producto->codcat = $request->input('codcat');

    // Guardar los cambios en la base de datos
    $producto->save();

    // Retornar una respuesta de éxito
    return response()->json(['mensaje' => 'Producto actualizado con éxito'], 200);
       
    }
    else{
        return response()->json(['mensaje' => 'Producto no encontrado'], 404);
    }
  }

    
        public function destroy(string $id)
    {
          // Encuentra la categoría por su ID
        $producto = producto::find($id);
         // Verifica si la categoría existe
         if (!$producto) {
            return response()->json(['mensaje' => 'Producto no encontrado'], 404);
        }

        // Realiza la eliminación
        $producto->delete();

        // Retorna una respuesta
        return response()->json(['mensaje' => 'producto eliminado'], 200);
    }


}