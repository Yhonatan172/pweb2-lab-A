

/*function loadDoc(kind, keyword) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
          console.log(this.responseText);
          var data= JSON.parse(this.responseText);
          var txt= render(data, kind, keyword);
          document.getElementById("answer").innerHTML= txt;
    }
  };
  xhttp.open("GET", "cgi-bin/consulta2.py?valor=$(kind)", true);
  xhttp.send();
}

function render(data, kind, keyword){
    for(i in data){
        var dic = data[i];
        if(dic[kind].includes(keyword)){
            return JSON.stringify(dic, undefined, 2);
        }
    }
    return "Vacio";
}
function enviar(kind, keyword){

}*/

function query(kind){
    console.log(kind);
    loadDoc("cgi-bin/consulta2.py", function(xhttp){
      console.log(xhttp.responseText);
      data = JSON.parse(xhttp.responseText);
      
      document.getElementById("answer").innerHTML = salida(data);
    });
  }
  function loadDoc(url, cFunction) {
    var xhttp;
    xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log("OJO:"+this.responseText);
        cFunction(this);
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }
  function salida(data){
    var tablas="<table border='2px'>";  
        for (i in data){ 
        tablas +="<tr><td>"+data[i][0]+"</td>"+
                "<td>"+data[i][1]+"</td>"+"</tr>" ;
      }
      tablas +="</table>";
      return tablas;
  }