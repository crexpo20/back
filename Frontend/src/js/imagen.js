const dropArea = document.querySelector(".drop-area");
const dragText = document.querySelector("h4");
const button = dropArea?.querySelector("button");
const input = dropArea?.querySelector("#input-file");
let files;
button?.addEventListener("click", (e) => {
    input.click();
});

input?.addEventListener("change",(e) =>{
    dropArea?.classList.add("active");
    processFile(files);
    dropArea.classList.remove("active");
});

dropArea?.addEventListener("dragover",(e)=>{
    e.preventDefault();
    dropArea?.classList.add("active");
    dragText.textContent = "Suelta para subir tu imagen";
});
dropArea?.addEventListener("dragleave",(e)=>{
    e.preventDefault();
    dropArea?.classList.remove("active");
    dragText.textContent = "arrastra y suelta tu imagen";
});
dropArea?.addEventListener("drop",(e)=>{

    e.preventDefault();
    processFile(files);
    dropArea?.classList.remove("active");
    dragText.textContent = "arrastra y suelta tu imagen";

    
});


function processFile(files){
    const docType = files?.type;
    const validExtensions = ['image/jpg','image/jpng'];
    if(validExtensions?.includes(docType)){
        alert("no es un archivo valido");
    }else{

    }
}