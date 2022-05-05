<?php

namespace App\Http\Middleware;

use Closure;
use JWTAuth;
use Exception;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;

class JwtMiddleware
{
    /**
     * Handle an incomming request
     * 
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
    */
    public function handle($request, Closure $next)
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();
        } catch (Exception $e) {
            if ($e instanceof \Tymon\JWTAuth\Exception\TokenInvalidException){
                return response()->json(['message' => 'Token Inválido']);
            } else if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException){
                return response()->json(['message' => 'Token Expirado']);
            }else {
                return response()->json(['message' => 'Token de autorização não encontrado']);
            } 
        }
        return $next($request);
    }
}