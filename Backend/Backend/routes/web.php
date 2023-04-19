<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\categoriaController;
use App\Http\Controllers\productosController;
use App\Http\Controllers\lotesController;
use App\Http\Controllers\tiendasController;
use App\Http\Controllers\inventarioController;
use App\Http\Controllers\ofertaController;

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


/*Route::get('/', function () {
    return view('vistaTienda',['Nombre'=>'Tita']);
});
*/

//RUTAS PARA INGRESAR, MODIFICAR, ELIMINAR TIENDA DESDE FORMULARIO
//Route::get('tienda', 'tiendasController@index');
//Route::post('tienda', 'tiendasController@store');
//Route::delete('tiendas/{codTienda}', 'tiendasController@destroy');
//Route::put('tiendas/{codTienda}', 'tiendasController@update');
/*
//RUTAS PARA INGRESAR, MODIFICAR, ELIMINAR PRODUCTOS DESDE FORMULARIO
Route::get('producto', 'productoController@index');
Route::post('producto', 'productoController@store');
Route::delete('producto/{codprod}', 'UserController@destroy');
Route::put('producto/{codprod}', 'UserController@update');

//RUTAS PARA INGRESAR, MODIFICAR, ELIMINAR CATEGORIA DESDE FORMULAR
Route::get('categoria', 'categoriaController@index');
Route::post('categoria', 'categoriaController@store');
Route::delete('categoria/{id}', 'categoriaController@destroy');
Route::put('categoria/{id}', 'categoriaController@update');
/*
//RUTAS PARA INGRESAR, MODIFICAR, ELIMINAR OFERTA DESDE FORMULAR
Route::get('oferta','ofertaController@index');
Route::post('oferta', 'ofertaController@store');
Route::delete('oferta/{id}', 'ofertaController@destroy');
Route::put('oferta/{id}', 'ofertaController@update');

Route::get('lote', 'lotesController@index');
Route::get('inventario', 'inventarioController@index');


//rutas nuevas 16/04/2023 - despues de reorganizar todo 
Route::get('/productos/crear', 'ProductosController@create')->name('productos.create');

// Ruta para procesar el formulario de creación
Route::post('/productos', 'ProductosController@store')->name('productos.store');

// Ruta para mostrar el formulario de edición
Route::get('/productos/{id}/editar', 'ProductosController@edit')->name('productos.edit');

// Ruta para procesar el formulario de edición
Route::put('/productos/{id}', 'ProductosController@update')->name('productos.update');

// Ruta para eliminar un producto
Route::delete('/productos/{id}', 'ProductosController@destroy')->name('productos.destroy');
*/