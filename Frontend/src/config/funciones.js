document.getElementById("btn_open").addEventListener("click", open_close_menu);

function open_close_menu(){
    body.classList.toggle("body_move");
    ul.classList.toggle("menu__side_move");
}