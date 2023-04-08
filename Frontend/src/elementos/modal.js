const verImagen = document.getElementById("verImagen");
const modal_container = document.getElementById("modal_container");



verImagen?.addEventListener("click", () =>{

        console.log("Se ha registrado un click");
       modal_container.innerHTML= `
       <div class="modal">
		<div class="modal-content">
			modal
			<button class="modal-btn-closed" id="modal_btn_closed">x</button>

		</div>
	</div>

       `
       });
     



