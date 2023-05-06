import MUIDataTable from "mui-datatables"; 
import axios from "axios";
import React ,{ useState, useEffect } from "react";
import { ContenedorBotonCentrado } from "../elementos/Formularios";
import {Component } from 'react';

export const EliminarP = () => {
    const [productos, cambiarProductos] = useState([]);

    const endpoint = 'http://127.0.0.1:8000/api/getProductos';


    /*const getProducto = async() => {
        await axios.get('http://191.101.18.162:8000/api/getProductos')
        .then(res => {
          this?.setState([res.data]);
          const data = res.data
          console.log(res.data);
          setProducts(data)
        }).catch((error) => {
          console.log(error);    
        });
    };*/

    /*const getProducto = async () => {
        await axios.get(endpoint).then((response) =>{
            const data = response.data;
            console.log(data);
            //setProducts[data]
            setProducts(response.data);
        })
    };*/

    /*const getProducto = async () => {
        await axios.get(endpoint)
            .then(response => {
                console.log("Productos: " + response.data);
               // setProducts(response.data);
            }).catch(error => {
                console.log(error);
            })
    }*/

    const obtenerProducto = async () => {
        const resultado = await axios.get(endpoint);
        cambiarProductos([...resultado.data]);
        console.log(...resultado.data);
    };

    useEffect( ()=>{
        obtenerProducto();
    }, []);

    const columns = [
        {
            name:"codprod",
            label:"ID"
        },
        {
            name:"producto",
            label: "Producto"
        },
    
    ];
    
    return (
        <ContenedorBotonCentrado>
        <div class="home">
        <MUIDataTable
        
            title={"Eliminar producto"}
            data={productos}
            columns={columns}
        />
        </div>
        </ContenedorBotonCentrado>
    );
};