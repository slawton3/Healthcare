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

Route::get('/', function () {
    return view('home');
});

Route::get('/home', 'App\Http\Controllers\Controller@index')->name('home');
Route::get('/register', 'App\Http\Controllers\Controller@register')->name('register');
Route::post('/register', 'App\Http\Controllers\PostController@formSubmit');
Route::get('/login', 'App\Http\Controllers\Controller@login')->name('login');
Route::post('/login', 'App\Http\Controllers\PostController@formSubmit');
Route::post('/search', 'App\Http\Controllers\SearchPostController@searchSubmit')->name('search');