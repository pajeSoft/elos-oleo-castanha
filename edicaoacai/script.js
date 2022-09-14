function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    if (display == "none")
      document.getElementById(el).style.display = 'block';
    else
      document.getElementById(el).style.display = 'none';
  }


  function Mudarestado1(el) {
    var display = document.getElementById(el).style.display;
    if (display == "none")
      document.getElementById(el).style.display = 'block';
    else
      document.getElementById(el).style.display = 'none';
  }

  function Mudarestado2(el) {
    var display = document.getElementById(el).style.display;
    if (display == "none")
      document.getElementById(el).style.display = 'block';
    else
      document.getElementById(el).style.display = 'none';
  }

  $("#imagem").bind('mouseover', function () {

    $(this).animate({ height: "800px", width: "8000px" });

});
$("#imagem").bind('mouseout', function () {

    $(this).animate({ height: "76px", width: "75px" });

});