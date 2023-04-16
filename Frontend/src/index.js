import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from "axios";
import {AiFillFileAdd} from "react-icons/ai"
import {BiHomeHeart} from "react-icons/bi"
import {VscNotebook} from "react-icons/vsc"
import {BsFillTrash3Fill} from "react-icons/bs"
import {BsShop} from "react-icons/bs"
import {HiClipboardDocumentList} from "react-icons/hi2"
import {MdSell} from "react-icons/md"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/* ------------ barra js-------------*/

const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn?.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});
/*----------------barra js-------------*/
/*-----------------recibir imagenes-----------*/

console.log("cuarta linea");
const imagePreview = document.getElementById('img-preview');
console.log("cuarta linea");
const imageUploader = document.querySelector('#img-uploader');
console.log("cuarta linea");
const imageUploadbar = document.getElementById('img-upload-bar');
console.log("cuarta linea");
//const e = e.change();

const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/dymazwyut/image/upload`;
const CLOUDINARY_UPLOAD_PRESET = `xsutmw9e`;
console.log("cuarta linea");
if(imageUploader){
    console.log("adiosssss");
imageUploader?.addEventListener('change', async (e) => {
    console.log("adiosssss");
    console.log(e);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    // Send to cloudianry
    const res = await axios.post(
        CLOUDINARY_URL,
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress (e) {
                let progress = Math.round((e.loaded * 100.0) / e.total);
                console.log(progress);
                imageUploadbar.setAttribute('value', progress);
            }
        }
    );
    console.log(res);
    imagePreview.src = res.data.secure_url;
});
}else{
    
const imageUploader = document.getElementById('img-uploader');
    console.log("asdfgfhdgfh,");
imageUploader?.addEventListener('change', async (e) => {
    console.log("cusbai");
    console.log(e);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    // Send to cloudianry
    const res = await axios.post(
        CLOUDINARY_URL,
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress (e) {
                let progress = Math.round((e.loaded * 100.0) / e.total);
                console.log(progress);
                imageUploadbar.setAttribute('value', progress);
            }
        }
    );
    console.log(res);
    imagePreview.src = res.data.secure_url;
});
}
/*async function change(e) {
    console.log("hola");
    const file = e.target.files[0];
    console.log("segunda linea");
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    console.log("tercera linea");
    // Send to cloudianry
    const res = await axios.post(
        CLOUDINARY_URL,
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress (e) {
                let progress = Math.round((e.loaded * 100.0) / e.total);
                console.log("cuarta linea");
                console.log(progress);
                console.log("quinta linea");
                imageUploadbar.setAttribute('value', progress);
                console.log("sexta linea");
            }
        }
    );
    console.log(res);
    imagePreview.src = res.data.secure_url;
    console.log("finall");
}*/



/*

if(imageUploader){
    console.log("ADIOS");
    imageUploader.addEventListener('change',  );
    
}*/




/*--------------------------------------------- */

