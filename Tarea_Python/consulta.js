
function loadDoc(kind, keyword) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
          var data= JSON.parse(this.responseText);
          var txt= render(data, kind, keyword);
          document.getElementById("answer").innerHTML= txt;
    }
  };
  xhttp.open("GET", "cgi-bin/consulta.py", true);
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