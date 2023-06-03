<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\producto;
use Illuminate\Support\Facades\DB;

class productoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
    DB::table('producto')->insert([
            'codcat' =>'10',
            'producto'=>'leche entera',
            'marca'=>'pil',
            'descripcion'=>'leche entera',
            'precio'=>'6.00',
            'image'=>'https://res.cloudinary.com/dymazwyut/image/upload/v1683245687/IS/uuqw5ffymrdo2cbewgsx.jpg',        
        ]);

        DB::table('producto')->insert([

            'codcat' =>'10',
            'producto'=>'biogurt',
            'marca'=>'pil',
            'descripcion'=>'yogur elaborado de leche pasteurisa,saborizada',
            'precio'=>'9',
            'image'=>'https://res.cloudinary.com/dymazwyut/image/upload/v1683167886/IS/cn4biysyhpajovhejmyb.jpg',      
        ]);

        DB::table('producto')->insert([

            'codcat' =>'2',
            'producto'=>'coca cola 3l',
            'marca'=>'the cocacola company',
            'descripcion'=>'refresco gaseoso a base de cola',
            'precio'=>'13',
            'image'=>'https://res.cloudinary.com/dymazwyut/image/upload/v1683305578/IS/s8z3shyrofnjarr3ipdu.jpg',        
        ]);

       
            }
}
