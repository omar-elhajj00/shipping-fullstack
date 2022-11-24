<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ShipmentController;
use App\Models\Shipment;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//users
Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);
//create shipments 
Route::post('createShipment', [ShipmentController::class, 'create']);
//delete shipment
Route::delete('deleteShipment/{id}', [ShipmentController::class, 'deleteShipment']);
//update shipment
Route::put('updateShipment', [ShipmentController::class, 'update']);


//show all shipments
Route::get('showShipments', [ShipmentController::class, 'show']);







// Route::get('getShipmentId/{id}', [ShipmentController::class, 'get_shipment_id']);