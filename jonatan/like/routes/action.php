<?php

use Illuminate\Support\Facades\Route;
use Jonatan\Like\Http\Controllers\LikeController;

/*
|--------------------------------------------------------------------------
| ACTION Routes
|--------------------------------------------------------------------------
|
| Here is where you can register ACTION routes for your application. These
| routes are loaded by the ServiceProvider.
| Enjoy the Action!
|
*/

Route::name('like.')->group(function() {

    Route::post('/create', [LikeController::class, 'store'])->name('store');

});
