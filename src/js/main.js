//6.1 & 6.2
var button = document.getElementsByClassName("change-block__elem")[0];
    
button.onclick = function push () {
    if (document.getElementsByClassName("change-block__elem")[0]) {
      document.getElementsByClassName("change-block__elem")[0].style.backgroundColor = "blue";
      document.getElementsByClassName("change-block__elem")[0].style.width = "300px";
      document.getElementsByClassName("change-block__elem")[0].style.color = "white";
      document.getElementsByClassName("change-block__elem")[0].value = ":)";
      var div = document.createElement("div");
          div.className = "new";
          document.body.append(div);
      document.getElementsByClassName("new")[0].style.width = "150px";
      document.getElementsByClassName("new")[0].style.height = "150px";
      document.getElementsByClassName("new")[0].style.background = "url(https://cs4.pikabu.ru/images/big_size_comm/2015-01_3/14211988902791.jpg)";
      document.getElementsByClassName("new")[0].style.backgroundSize = "contain";
      document.getElementsByClassName("new")[0].style.backgroundRepeat = "no-repeat";
      document.getElementsByClassName("new")[0].style.transform = "translate(340%, -130%)";
      document.getElementsByClassName("new")[0].style.borderRadius = "70px";
    } else {
      alert("Error!"); 
    }
  }

function change () {
  if (document.getElementsByClassName("change-block")[0]) {
    document.getElementsByClassName("change-block")[0].style.width = "1180px";
    document.getElementsByClassName("change-block")[0].style.backgroundColor = "green";
  } else {
    alert("Error!"); 
  }
}

document.getElementsByClassName("change-block")[0].addEventListener("click", change);



