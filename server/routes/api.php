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


Route::group(['middleware' => ['apiJwt']], function () {
    Route::group(['prefix' => 'user'], function () {
        Route::post('/login', 'Users\AuthController@login');
        Route::post('/create', 'Users\UserController@create');
        Route::put('/update/{id}', 'Users\UserController@update');
        Route::put('/delete/{id}', 'Users\UserController@delete');
        Route::get('/', 'Users\UserController@list');
        Route::get('/{id}', 'Users\UserController@getUser');
    });
    Route::group(['prefix' => 'category'], function () {
        
    });
});
