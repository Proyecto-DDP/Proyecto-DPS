<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Usuario;

class UsuariosController extends Controller
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
        Usuario::insert([
            'codigoUsuario' => $request->input('codigoUsuario'),
            'nombresUsuario' => $request->input('nombresUsuario'),
            'apellidosUsuario' => $request->input('apellidosUsuario'),
            'password' => $request->input('password'),
            'edad' => $request->input('edad'),
            'dui' => $request->input('dui'),
            'cargo' => $request->input('cargo'),
            'telefono' => $request->input('telefono')
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
        Usuario::where('codigoUsuario', $request->input('codigoUsuario'))->
        update([
        'nombresUsuario' => $request->input('nombresUsuario'),
        'apellidosUsuario' => $request->input('apellidosUsuario'),
        'password' => $request->input('password'),
        'edad' => $request->input('edad'),
        'dui' => $request->input('dui'),
        'cargo' => $request->input('cargo'),
        'telefono' => $request->input('telefono')
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
        Usuario::where('codigoUsuario',$request->input('codigoUsuario'))->delete();
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
        return Usuario::all();
    }
}
