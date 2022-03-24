function calcular(){

    var edad = document.getElementById("edad").value;
    var trabajo = document.getElementById("trabajo").value;
    var sueldo = document.getElementById("sueldo").value;

    if ((edad > 18 && edad <= 60) && (sueldo > 10000 && sueldo < 49999) && trabajo == true){
        swal({
            title: "FELICITACIONES!!",
            text: "Puedes obtener un préstamo de hasta $ 200.000!",
            icon: "success",
            button: "click aqui",
          });
      }
      else if ((edad > 18 && edad <= 60) && sueldo > 50000 && trabajo == true){
        swal({
            title: "FELICITACIONES!!",
            text: "Puedes obtener un préstamo de hasta $ 500.000!",
            icon: "success",
            button: "click aqui",
          });
      }     
        else{
            swal({
                title: "LO LAMENTAMOS!",
                text: "No cumples los requisitos para obtener un préstamo",
                icon: "error",
                button: "click aqui",
              });
      }
    }
    

function limpiar() {
    document.getElementById ("botones").reset();
}

