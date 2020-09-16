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

Route::get('mascota/list', 'API\MascotasController@get_all');

Route::post('mascota/nuevo','API\MascotasController@create');

Route::post('mascota/eliminar','API\MascotasController@destroy');

Route::post('mascota/editar','API\MascotasController@update');