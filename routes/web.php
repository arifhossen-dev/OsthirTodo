<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TodoController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {

    Route::get('/todos', [TodoController::class, 'index'])->name('todo.index');
    Route::get('/todos/create', [TodoController::class, 'create'])->name('todo.create');
    Route::post('/todos', [TodoController::class, 'store'])->name('todo.store');
    Route::get('/todos/{todo}', [TodoController::class, 'show'])->name('todo.show');
    Route::get('/todos/{todo}/edit', [TodoController::class, 'edit'])->name('todo.edit');
    Route::patch('/todos/{todo}', [TodoController::class, 'update'])->name('todo.update');
    Route::delete('/todos/{todo}', [TodoController::class, 'destroy'])->name('todo.destroy');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
