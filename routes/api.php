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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/user/login', 'Users\AuthController@login');

Route::group(['middleware' => ['apiJwt']], function () {
    Route::post('/user/create', 'Users\UserController@create');
    Route::put('/user/update/{id}', 'Users\UserController@update');
    Route::put('/user/delete/{id}', 'Users\UserController@delete');
});

