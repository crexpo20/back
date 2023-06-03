<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\cliente;
use Illuminate\Support\Facades\DB;

class clienteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('cliente')->insert([
            'nombre' =>'Administrador',
            'apellido' =>'Admin',
            'correo' =>'admin1@gmail.com',
            'password' =>'admin123',        
         ]);
 
         DB::table('cliente')->insert([
            'nombre' =>'cliente1',
            'apellido' =>'Cli',
            'correo' =>'cliente1@gmail.com',
            'password' =>'pordefecto',        
         ]);
 
    }
}
