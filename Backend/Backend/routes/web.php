<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    return view('vistaTienda',['Nombre'=>'Tita']);
});
Route::get('/tienda', 'tiendasController@index');
Route::get('/producto', 'productoController@index');
Route::get('/categoria', 'categoriaController@index');
Route::get('/oferta','ofertaController@index');
Route::get('/lote', 'lotesController@index');
Route::get('/inventario', 'inventarioController@index');
