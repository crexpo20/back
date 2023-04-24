<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\categoria;
use Illuminate\Support\Facades\DB;

class categoriaseeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('categoria')->insert([
            'nombrecat' =>'abarrotes',        
         ]);
 
         DB::table('categoria')->insert([
         
             'nombrecat' =>'bebidas',
        
         ]);
 
         DB::table('categoria')->insert([
             
             'nombrecat' =>'bebidas alcoholicas',        
         ]);
 
         DB::table('categoria')->insert([
             
             'nombrecat' =>'cuidado personal',     
         ]);    
         
         DB::table('categoria')->insert([
             'nombrecat' =>'enlatados',        
          ]);
 
          DB::table('categoria')->insert([
             'nombrecat' =>'farmacos',        
          ]);
 
          DB::table('categoria')->insert([
             'nombrecat' =>'fiambres y embutidos',        
          ]);
 
          DB::table('categoria')->insert([
             'nombrecat' =>'golosinas',        
          ]);
 
          DB::table('categoria')->insert([
             'nombrecat' =>'limpieza del hogar',        
          ]);
 
          DB::table('categoria')->insert([
             'nombrecat' =>'lacteos',        
          ]);
 
          DB::table('categoria')->insert([
             'nombrecat' =>'panaderia',        
          ]);
 
          DB::table('categoria')->insert([
             'nombrecat' =>'snaks',        
          ]);
 
          DB::table('categoria')->insert([
             'nombrecat' =>'varios',        
          ]);
    }
}
/*
  $categoria1 = new categoria();
            $categoria1 -> codcat = '2';
            $categoria1 -> nombrecat = 'bebida';
            $categoria1 -> save();
    
            $categoria2 = new categoria();
            $categoria2 -> codcat = '3';
            $categoria2 -> nombrecat = 'snack';
            $categoria2 -> save();
    
            $categoria3 = new categoria();
            $categoria3 -> codcat = '4';
            $categoria3 -> nombrecat = 'embutido';
            $categoria3 -> save();
            */