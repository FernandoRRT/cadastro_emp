<?php

namespace App\Http\Controllers\Core;

use App\Http\Controllers\Controller;
use App\Models\Core\Company;
use Illuminate\Http\Request;
use Illuminate\Validation\Validator;

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

        return response()->json(['data' => $data]);
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
        // $validation = \Validator::make($request->all(), [
        //     'cnpj' => 'min:9|unique:company'
        // ]);

        // if($validation->fails())
        // {
        //     return response()->json([$validation->error(), 422]);
        // }
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





<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\ValidationException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (ThrowAble $e){});
    }

    public function render($request, Throwable $exception)
    {
        if($request->is('api/*')){
            if($exception instanceof ValidationException)
            {
                return response()->json($exception->errors(), $exception->status);
            }
        }
    }
}