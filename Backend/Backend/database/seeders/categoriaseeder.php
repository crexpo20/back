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
           'nombrecat' =>'lacteos',        
        ]);

        DB::table('categoria')->insert([
        
            'nombrecat' =>'bebidas',
       
        ]);

        DB::table('categoria')->insert([
            
            'nombrecat' =>'Bebidas alcoholicas',        
        ]);

        DB::table('categoria')->insert([
            
            'nombrecat' =>'Cuidado personal',     
        ]);    
        
        DB::table('categoria')->insert([
            'nombrecat' =>'Enlatados',        
         ]);

         DB::table('categoria')->insert([
            'nombrecat' =>'Enlatados',        
         ]);

         DB::table('categoria')->insert([
            'nombrecat' =>'Farmacos',        
         ]);

         DB::table('categoria')->insert([
            'nombrecat' =>'Fiambres y embutidos',        
         ]);

         DB::table('categoria')->insert([
            'nombrecat' =>'golosinas',        
         ]);

         DB::table('categoria')->insert([
            'nombrecat' =>'Limpieza del hogar',        
         ]);
    }
}

  