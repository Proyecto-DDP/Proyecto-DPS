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

Route::view('/','welcome');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/mascota', function(){
    return view("pages.mascota");
});

Route::get('/recibos', function(){
    return view("pages.recibo");
});

Route::get('/detalles', function(){
    return view("pages.detalle");
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

<<<<<<< HEAD
=======
//Ver /servicios
Route::get('/servicios', function(){
    return view("pages.servicios");
});

//Ver /razas
Route::get('/razas', function(){
    return view("pages.razas");
});
>>>>>>> c1cfc1ceb03fbbeaa88f6794b6f6a5fef9e00d2d
