<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\categoria;
use Illuminate\Support\Facades\DB;

class categoriaController extends Controller
{
   
    public function index()
    {
        $sql = 'SELECT * FROM categoria';
        $categoria = DB::select($sql);
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
        $categoria = categoria::find($id);
        $categoria->delete();
    }
}
