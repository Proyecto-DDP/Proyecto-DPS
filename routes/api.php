<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
//al ir a la ruta mascota/list, llama la función get_all/create/destroy/update de MascotasController dentro de app>http>controllers>api
Route::get('mascota/list', 'API\MascotasController@get_all');

Route::post('mascota/nuevo','API\MascotasController@create');

Route::post('mascota/eliminar','API\MascotasController@destroy');

Route::post('mascota/editar','API\MascotasController@update');

//Servicios

Route::get('servicio/list', 'API\ServiciosController@get_all');

Route::post('servicio/nuevo','API\ServiciosController@create');

Route::post('servicio/eliminar','API\ServiciosController@destroy');

Route::post('servicio/editar','API\ServiciosController@update');


//Razas

Route::get('raza/list', 'API\RazasController@get_all');

Route::post('raza/nuevo','API\RazasController@create');

Route::post('raza/eliminar','API\RazasController@destroy');

Route::post('raza/editar','API\RazasController@update');