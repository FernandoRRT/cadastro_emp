<?php

namespace App\Http\Controllers\Core;

use \Illuminate\Validation\Validator;
use App\Http\Controllers\Controller;
use App\Models\Core\Company;
use Illuminate\Http\Request;



class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    
    // retorna todos os dados da aplicação. Lista completa.
    public function index()
    {
        $data = Company::all();

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
            'trading_name' => 'min:5'
        ]); 

        if($validation->fails())
        {
            return response()->json([$validation->errors()], 422);
        }

        $data = $request->all();
        Company::create($data);
        return response()->json(['data' => $data]);
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
        $dataRequest = $request->all();
        $data = Company::findOrFail($id);
        $data->update($dataRequest);
        return response()->json(['msg' => 'Dados atualizados com sucesso!', 'data' => $data]);
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
        $data = Company::find($id);
        $data->delete();
        
        return response()->json(['msg' => 'Registro excluído com sucesso!', 'data' => $data]);        
    }
}
