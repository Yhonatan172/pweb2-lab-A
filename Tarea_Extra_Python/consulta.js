function consult(category) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     var data = JSON.parse(this.responseText);
     document.getElementById("answer").innerHTML=render(data);
    }
  };
  xhttp.open("GET", "cgi-bin/consulta.py?valor= " "+category", true);
  xhttp.send();
}
function render(data){
	
}