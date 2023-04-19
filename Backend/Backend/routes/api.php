<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\categoriaController;
use App\Http\Controllers\productosController;
use App\Http\Controllers\lotesController;
use App\Http\Controllers\tiendasController;
use App\Http\Controllers\inventarioController;
use App\Http\Controllers\ofertaController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/
/*
Route::resource('api_categorias',categoriaController::class);

Route::resource('api_productos',productosController::class);

Route::resource('api_lotes',lotesController::class);

Route::resource('api_tiendas',tiendasController::class);

Route::resource('api_inventarios',inventarioController::class);

//Route::resource('api_oferta',ofertaController::class);
*/



//RUTAS PARA INGRESAR, MODIFICAR, ELIMINAR TIENDA DESDE FORMULARIO
Route::get('/getTienda', [tiendasController::class,'index']);
Route::post('/postTienda', [tiendasController::class,'store']);
Route::delete('/delTienda/{codTienda}', [tiendasController::class,'destroy']);
Route::put('/putTiendas/{codTienda}', [tiendasController::class,'update']);

//RUTAS PARA INGRESAR, MODIFICAR, ELIMINAR PRODUCTOS DESDE FORMULARIO
Route::get('getProductos',[productosController::class,'index']);
Route::post('PostProductos', [productosController::class,'store']);
Route::delete('delProductos/{codprod}', [productosController::class,'destroy']);
Route::put('putProductos/{codprod}', [productosController::class,'update']);

//RUTAS PARA INGRESAR, MODIFICAR, ELIMINAR CATEGORIA DESDE FORMULAR

Route::get('/getCategorias', [categoriaController::class,'index']);
Route::post('/postCategorias',  [categoriaController::class,'create']);
Route::delete('/delCategorias/{id}',  [categoriaController::class,'destroy']);
Route::put('/putCategorias/{id}',  [categoriaController::class,'update']);


//RUTAS PARA INGRESAR, MODIFICAR, ELIMINAR OFERTA DESDE FORMULAR
Route::get('/getOferta',[ofertaController::class,'index']);
Route::post('/postOferta', [ofertaController::class,'store']);
Route::delete('/delOferta/{id}', [ofertaController::class,'destroy']);
Route::put('/putOferta/{id}', [ofertaController::class,'update']);

