<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\categoriaController;
use App\Http\Controllers\productosController;
use App\Http\Controllers\lotesController;
use App\Http\Controllers\tiendasController;
use App\Http\Controllers\inventarioController;
use APP\Http\Controllers\ofertaController;

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
Route::resource('api_categorias',categoriaController::class);

Route::resource('api_productos',productosController::class);

Route::resource('api_lotes',lotesController::class);

Route::resource('api_tiendas',tiendasController::class);

Route::resource('api_inventarios',inventarioController::class);

Route::resource('api_oferta',ofertaController::class);

//RUTAS PARA INGRESAR, MODIFICAR, ELIMINAR TIENDA DESDE FORMULARIO
Route::get('/tienda', 'tiendasController@index');
Route::post('/tienda', 'tiendasController@store');
Route::delete('/tiendas/{codTienda}', 'tiendasController@destroy');
Route::put('/tiendas/{codTienda}', 'tiendasController@update');
//RUTAS PARA INGRESAR, MODIFICAR, ELIMINAR PRODUCTOS DESDE FORMULARIO
Route::get('/productos', 'productosController@index');
Route::post('/guardar-productos', 'productosController@store');
Route::delete('/productos/{codprod}', 'productosController@destroy');
Route::put('/productos/{codprod}', 'productosController@update');

//RUTAS PARA INGRESAR, MODIFICAR, ELIMINAR CATEGORIA DESDE FORMULAR
Route::get('/categorias', 'categoriasController@index');
Route::post('/categorias', 'categoriasController@store');
Route::delete('/categorias/{id}', 'categoriasController@destroy');
Route::put('/categorias/{id}', 'categoriasController@update');

//RUTAS PARA INGRESAR, MODIFICAR, ELIMINAR OFERTA DESDE FORMULAR
Route::get('/oferta','ofertaController@index');
Route::post('/oferta', 'ofertaController@store');
Route::delete('/oferta/{id}', 'ofertaontroller@destroy');
Route::put('/oferta/{id}', 'ofertaController@update');

/*Route::get('/lote', 'lotesController@index');
Route::get('/inventario', 'inventarioController@index');*/