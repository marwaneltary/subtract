function subtract(){
       var m = document.getElementById("m").value;
       var u = document.getElementById("u").value;

       if(m == "" || u == ""){
              document.getElementById("k").innerHTML = "PLEASE ENTER NUMBERS";
       }

       else if(m != "" && u !=""){
             document.getElementById("k").innerHTML = Number(m) - Number(u);
       }


}