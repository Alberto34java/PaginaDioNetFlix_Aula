function carregarDocumentoEmIngles(){
    document.getElementById("elemento").innerHTML='<object type="type/html" data="page.html" ></object>';
}


function load_home() {
    document.getElementById("elemento").innerHTML='<object type="text/html" data="home.html" ></object>';
}

$(document).ready( function() {
    $("#load_home").on("change", function() {
        $("#elemento").load("page.html");
    });
});