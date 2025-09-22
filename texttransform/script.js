$(document).ready(function(){
    $(document).on("click","#btnAction",function(){
        var input = $("#textInput").val();

        var output ="";
        //TRANSFORMACION
        var action = $("#selectAction").val();
        
        if(input ==""){
            alert("Debe introducir texto")
        }else if(action == ""){
            alert("Acción no válida")
        } else if(action=="upper"){
            output = toUpperCase(input);
        }else if(action=="lower"){
            output = toLowerCase(input);
        }

        //SALIDA
        $("#textOutput").val(output);
    })

    function toUpperCase(str){
        return str.toUpperCase();
    }

     function toLowerCase(str){
        return str.toLowerCase();
    }
})