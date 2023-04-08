<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class modeloProductoseeder extends Seeder
{
    /*
     'codprod',
        'codcat',
        'nombrepr',
        'marca',
        'descripcion',
        'precioventa',
        'preciocompra',
        'cantidadtotal',
        'image_path',
     */
    public function run(): void
    {
        $producto = new producto();
        $producto -> codprod = '1';
        $producto -> nombrepr = 'lacteo';
        $producto -> marca = '1';
        $producto -> descripcion = 'lacteo';
        $producto -> precioventa = '1';
        $producto -> cantidadtotal = 'lacteo';
        $producto -> marca = '1';
        $producto -> nombrecadescripcion = 'lacteo';
        $producto -> save();

        $producto1 = new producto();
        $producto1 -> codprod = '1';
        $producto1 -> nombrepr = 'lacteo';
        $producto1 -> marca = '1';
        $producto1 -> descripcion = 'lacteo';
        $producto1 -> precioventa = '1';
        $producto1 -> cantidadtotal = 'lacteo';
        $producto1 -> marca = '1';
        $producto1 -> nombrecadescripcion = 'lacteo';
        $producto1 -> save();

      
    }
}
