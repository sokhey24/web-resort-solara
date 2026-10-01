<?php

use App\Http\Controllers\SocialAuthController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return ['laravel' => app()->version()];
});

Route::get('/auth/{provider}', [SocialAuthController::class, 'redirect'])
    ->whereIn('provider', ['google', 'facebook']);
Route::get('/auth/{provider}/callback', [SocialAuthController::class, 'callback'])
    ->whereIn('provider', ['google', 'facebook']);
