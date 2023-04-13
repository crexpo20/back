import axios from "axios";
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
if(!imageUploader){
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


