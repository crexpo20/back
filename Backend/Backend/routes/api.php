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