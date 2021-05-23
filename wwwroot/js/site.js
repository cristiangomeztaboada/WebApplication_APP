// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $("#ColorCodigo").focusout(function () {
        let value = $("#ColorCodigo")[0].value;
        
        if (value) {
            window.location.href = '/Colors/EditByCodigo/' + value;
        }        
    });
});

function BuscadorColorOnClick(e) {
    $.ajax({
        type: "GET",
        url: "/Colors/IndexBuscador",
        data: null,
        contentType: 'application/json',
        dataType: 'json',
        processData: false,
        async: true,
        cache: false,
        hideLoading: false,
        success: function (data) {
            $('#DivModalGenerico').empty();
            $('#DivModalGenerico').append(data);
            $('#ModalGenerico').modal('show');
        },
        error: function (e) {
            //DevExpress.ui.notify("Error al ejecutar proceso", "error", 2000);
            $('#DivModalGenerico').empty();
            $('#DivModalGenerico').append(e.responseText);
            $('#ModalGenerico').modal('show');
        }
    });
}

function GridColorOnRowClick(e) {
    console.log(e);
    console.log($("#ColorCodigo"));
    $("#ColorCodigo")[0].value = e.data.codigo;
    $("#ColorCodigo").trigger("focusout");
    CerrarModalGenerico();
}

function CerrarModalGenerico() {
    $('#ModalGenerico').modal('hide');
    $('#DivModalGenerico').empty();
}