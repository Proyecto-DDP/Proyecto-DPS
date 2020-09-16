<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Mascota;

class MascotasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        Mascota::insert([
            'codigoMascota' => $request->input('codigoMascota'),
            'idRaza' => "1",
            'nombreMascota' => $request->input('nombreMascota'),
            'birthYear' => "1998",
            'notas' => $request->input('notas'),
          ]);
    
          $response['message'] = "Guardo exitosamente";
          $response['success'] = true;
    
          return $response;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        // inserta los datos
        Mascota::where('codigoMascota', $request->input('codigoMascota'))->
        update([
        'idRaza' => $request->input('razaMascota'),
        'nombreMascota' => $request->input('nombreMascota'),
        'birthYear' => $request->input('birthYear'),
        'notas' => $request->input('notas')
        ]);

        // respesta de JSON
        $response['message'] = "Actualizo exitosamente";
        $response['success'] = true;

        return $response;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        // Eliminar
      Mascota::where('codigoMascota',$request->input('codigoMascota'))->delete();
      // respesta de JSON
      $response['message'] = "Elimino exitosamente";
      $response['success'] = true;

      return $response;
    }
    /**
     * Displays all records for Mascotas
     * @return \Illuminate\Http\Response
     */
    public function get_all(){
        return Mascota::all();
    }
}
