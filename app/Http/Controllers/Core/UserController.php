<?php

namespace App\Http\Controllers\Core;

use \Illuminate\Validation\Validator;
use App\Http\Controllers\Controller;
use App\Models\Access\User;
use App\Models\Access\Blacklist;
use Illuminate\Http\Request;
use Mockery\Generator\StringManipulation\Pass\Pass;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

     public function index()
    {
        $data = User::all();
        return response()->json($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    // serve para gravar todos os dados da lista. Persistir no banco. 
    public function store(Request $request)
    {
        $validation = \Validator::make($request->all(), [
            'password' => 'required|min:7|alpha_num',
            'name' => 'required',
            'email' =>  'required|email:rfc,dns|unique:users|string'
        ]); 
        if($validation->fails())
        {
            return response()->json([$validation->errors()], 422);
        }
        $emailvalidation = \Validator::make($request->only('email'), [
            'email' => 'unique:blacklist',
        ]);
        if($emailvalidation->fails())
        {
            return response()->json(['error' => 'Email não autorizado.'], 401);
        }

        $data = $request->all();
        $data["password"] = bcrypt($data["password"]);
        User::create($data);
        return response()->json(['msg' => 'Cadastrado com sucesso.']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    // Buscar registro específico
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    // atualizar. No caso os dados + id
    public function update(Request $request, $id)
    {
        $validation = \Validator::make($request->all(), [
            'password' => 'required|min:7|alpha_num',
            'name' => 'required',
            'email' =>  'required|email:rfc,dns|unique:users|string'
        ]); 
        if($validation->fails())
        {
            return response()->json([$validation->errors()], 422);
        }
        $emailvalidation = \Validator::make($request->only('email'), [
            'email' => 'unique:blacklist',
        ]);
        if($emailvalidation->fails())
        {
            return response()->json(['error' => 'Email não autorizado.'], 401);
        }

        $dataRequest = $request->all();
        $dataRequest["password"] = bcrypt($dataRequest["password"]);
        $data = User::findOrFail($id);
        $data->update($dataRequest);
        return response()->json(['msg' => 'Dados atualizados com sucesso!']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    // deletar os dados.
    public function destroy($id)
    {
        //$dataRequest = $request->all();
        $data = User::find($id);
        $data->delete();
        
        return response()->json(['msg' => 'Registro excluído com sucesso!']);        
    }
}
