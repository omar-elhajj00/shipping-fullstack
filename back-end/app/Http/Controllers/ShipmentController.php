<?php

namespace App\Http\Controllers;

use App\Models\Shipment;
use Error;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ShipmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function store()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //get the data from axios

        $paybill = $request->input('paybill');
        $customerName = $request->input('customerName');
        $customerAddress = $request->input('customerAddress');
        $customerPhone = $request->input('customerPhone');

        //implement the data int database

        if (DB::table('shipments')->insert([
            'paybill' => $paybill,
            'customer_name' => $customerName,
            'customer_address' => $customerAddress,
            'customer_phone' => $customerPhone

        ])){
            return response()->json(['message' =>'submission complete']);
        }
        


    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Shipment  $shipment
     * @return \Illuminate\Http\Response
     */
    
    public function show(){
        return Shipment::all();
    }  
    /**
     
     *
     * @param  \App\Models\Shipment  $shipment
     * @return \Illuminate\Http\Response
     */
    public function edit(Shipment $shipment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Shipment  $shipment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Shipment $shipment)
    {
        $id= $request->input('shipmentId');
        $paybill = $request->input('paybill');
        $customerName = $request->input('customerName');
        $customerAddress = $request->input('customerAddress');
        $customerPhone = $request->input('customerPhone');

        //update the data int database
        $result = Shipment::where('id', $id);
        if ($result->update([
            'paybill' => $paybill,
            'customer_name' => $customerName,
            'customer_address' => $customerAddress,
            'customer_phone' => $customerPhone

        ])){
            return response()->json(['message' =>'update complete']);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Shipment  $shipment
     * @return \Illuminate\Http\Response
     */
    public function deleteShipment($paybill)
    {
        $result= Shipment::where('paybill', $paybill)->delete();
        if($result){
            return response()->json(['message'=>'deleted successfuly']);
        }
        else{
            return response()->json(["message"=> "Something wrong! kindly check if you entered the correct paybill or the item already deleted "]);
        }
    }

    public function get_shipment_id($id){
        return Shipment::find($id);
    }
}
