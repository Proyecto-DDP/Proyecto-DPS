<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Cita;

class CitasController extends Controller
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
        Cita::insert([
            'idCita' => $request->input('idCita'),
            'codigoUsuario' => $request->input('codigoUsuario'),
            'fecha' => $request->input('fecha'),
            'idRecibo' => $request->input('idRecibo'),
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
        Cita::where('idCita', $request->input('idCita'))->
        update([
        'codigoUsuario' => $request->input('codigoUsuario'),
        'fecha' => $request->input('fecha'),
        'idRecibo' => $request->input('idRecibo')
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
      Cita::where('idCita',$request->input('idCita'))->delete();
      // respesta de JSON
      $response['message'] = "Elimino exitosamente";
      $response['success'] = true;

      return $response;
    }
    /**
     * Displays all records for Cita
     * @return \Illuminate\Http\Response
     */
    public function get_all(){
        return Cita::all();
    }
}
