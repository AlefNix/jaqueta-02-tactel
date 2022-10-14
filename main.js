document.getElementById('base').addEventListener('click', function (e) {
  if (window.innerWidth <= 768) {
    document.getElementById("h22").innerHTML = "Cores da Base";
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('acabamentos').style.display = "none";
    document.getElementById('deletebaselabel').style.display = "block";
  }
  else { document.getElementById("h22").innerHTML = "Cores da Base"; }
});
document.getElementById('botoes').addEventListener('click', function (e) {
  if (window.innerWidth <= 768) {
    document.getElementById("h22").innerHTML = "Cores da Manga";
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('acabamentos').style.display = "none";
    document.getElementById('deletebaselabel').style.display = "block";
  }
  else { document.getElementById("h22").innerHTML = "Cores da Manga"; }
});
document.getElementById('gola1').addEventListener('click', function (e) {
  if (window.innerWidth <= 768) {
    document.getElementById("h22").innerHTML = "Cores do Punho";
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('acabamentos').style.display = "none";
    document.getElementById('deletebaselabel').style.display = "block";
  }
  else { document.getElementById("h22").innerHTML = "Cores do Punho"; }
});
document.getElementById('gola2').addEventListener('click', function (e) {
  if (window.innerWidth <= 768) {
    document.getElementById("h22").innerHTML = "Cores da Barra";
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('acabamentos').style.display = "none";
    document.getElementById('deletebaselabel').style.display = "block";
  }
  else { document.getElementById("h22").innerHTML = "Cores da Barra"; }
});
document.getElementById('vista').addEventListener('click', function (e) {
  if (window.innerWidth <= 768) {
    document.getElementById("h22").innerHTML = "Cores dos Botões";
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('acabamentos').style.display = "none";
    document.getElementById('deletebaselabel').style.display = "block";
  }
  else { document.getElementById("h22").innerHTML = "Cores dos Botões"; }
});
document.getElementById('vista1').addEventListener('click', function (e) {
  if (window.innerWidth <= 768) {
    document.getElementById("h22").innerHTML = "Cores da Gola";
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('acabamentos').style.display = "none";
    document.getElementById('deletebaselabel').style.display = "block";
  }
  else { document.getElementById("h22").innerHTML = "Cores da Gola"; }
});

document.getElementById('cor1').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#fff");
    document.getElementById('CB').style.backgroundColor = "#fff";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#fff");
    document.getElementById('BT').style.backgroundColor = "#fff";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#fff");
    document.getElementById('ge').style.backgroundColor = "#fff";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#fff");
    document.getElementById('gi').style.backgroundColor = "#fff";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#fff");
    document.getElementById('VE').style.backgroundColor = "#fff";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#fff");
    document.getElementById('VD').style.backgroundColor = "#fff";
  }
});
document.getElementById('cor2').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#e49d0d");
    document.getElementById('CB').style.backgroundColor = "#e49d0d";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#e49d0d");
    document.getElementById('BT').style.backgroundColor = "#e49d0d";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#e49d0d");
    document.getElementById('ge').style.backgroundColor = "#e49d0d";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#e49d0d");
    document.getElementById('gi').style.backgroundColor = "#e49d0d";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#e49d0d");
    document.getElementById('VE').style.backgroundColor = "#e49d0d";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#e49d0d");
    document.getElementById('VD').style.backgroundColor = "#e49d0d";
  }
});
document.getElementById('cor3').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#8a99a3");
    document.getElementById('CB').style.backgroundColor = "#8a99a3";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#8a99a3");
    document.getElementById('BT').style.backgroundColor = "#8a99a3";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#8a99a3");
    document.getElementById('ge').style.backgroundColor = "#8a99a3";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#8a99a3");
    document.getElementById('gi').style.backgroundColor = "#8a99a3";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#8a99a3");
    document.getElementById('VE').style.backgroundColor = "#8a99a3";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#8a99a3");
    document.getElementById('VD').style.backgroundColor = "#8a99a3";
  }
});
document.getElementById('cor4').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#1d3573");
    document.getElementById('CB').style.backgroundColor = "#1d3573";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#1d3573");
    document.getElementById('BT').style.backgroundColor = "#1d3573";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#1d3573");
    document.getElementById('ge').style.backgroundColor = "#1d3573";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#1d3573");
    document.getElementById('gi').style.backgroundColor = "#1d3573";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#1d3573");
    document.getElementById('VE').style.backgroundColor = "#1d3573";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#1d3573");
    document.getElementById('VD').style.backgroundColor = "#1d3573";
  }
});
document.getElementById('cor5').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#578f9a");
    document.getElementById('CB').style.backgroundColor = "#578f9a";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#578f9a");
    document.getElementById('BT').style.backgroundColor = "#578f9a";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#578f9a");
    document.getElementById('ge').style.backgroundColor = "#578f9a";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#578f9a");
    document.getElementById('gi').style.backgroundColor = "#578f9a";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#578f9a");
    document.getElementById('VE').style.backgroundColor = "#578f9a";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#578f9a");
    document.getElementById('VD').style.backgroundColor = "#578f9a";
  }
});
document.getElementById('cor6').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#6cb1a6");
    document.getElementById('CB').style.backgroundColor = "#6cb1a6";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#6cb1a6");
    document.getElementById('BT').style.backgroundColor = "#6cb1a6";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#6cb1a6");
    document.getElementById('ge').style.backgroundColor = "#6cb1a6";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#6cb1a6");
    document.getElementById('gi').style.backgroundColor = "#6cb1a6";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#6cb1a6");
    document.getElementById('VE').style.backgroundColor = "#6cb1a6";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#6cb1a6");
    document.getElementById('VD').style.backgroundColor = "#6cb1a6";
  }
});
document.getElementById('cor7').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#e4dc8d");
    document.getElementById('CB').style.backgroundColor = "#e4dc8d";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#e4dc8d");
    document.getElementById('BT').style.backgroundColor = "#e4dc8d";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#e4dc8d");
    document.getElementById('ge').style.backgroundColor = "#e4dc8d";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#e4dc8d");
    document.getElementById('gi').style.backgroundColor = "#e4dc8d";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#e4dc8d");
    document.getElementById('VE').style.backgroundColor = "#e4dc8d";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#e4dc8d");
    document.getElementById('VD').style.backgroundColor = "#e4dc8d";
  }
});
document.getElementById('cor8').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#1a2761");
    document.getElementById('CB').style.backgroundColor = "#1a2761";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#1a2761");
    document.getElementById('BT').style.backgroundColor = "#1a2761";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#1a2761");
    document.getElementById('ge').style.backgroundColor = "#1a2761";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#1a2761");
    document.getElementById('gi').style.backgroundColor = "#1a2761";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#1a2761");
    document.getElementById('VE').style.backgroundColor = "#1a2761";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#1a2761");
    document.getElementById('VD').style.backgroundColor = "#1a2761";
  }
});
document.getElementById('cor9').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#29313a");
    document.getElementById('CB').style.backgroundColor = "#29313a";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#29313a");
    document.getElementById('BT').style.backgroundColor = "#29313a";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#29313a");
    document.getElementById('ge').style.backgroundColor = "#29313a";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#29313a");
    document.getElementById('gi').style.backgroundColor = "#29313a";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#29313a");
    document.getElementById('VE').style.backgroundColor = "#29313a";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#29313a");
    document.getElementById('VD').style.backgroundColor = "#29313a";
  }
});
document.getElementById('cor10').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#ba1228");
    document.getElementById('CB').style.backgroundColor = "#ba1228";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#ba1228");
    document.getElementById('BT').style.backgroundColor = "#ba1228";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#ba1228");
    document.getElementById('ge').style.backgroundColor = "#ba1228";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#ba1228");
    document.getElementById('gi').style.backgroundColor = "#ba1228";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#ba1228");
    document.getElementById('VE').style.backgroundColor = "#ba1228";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#ba1228");
    document.getElementById('VD').style.backgroundColor = "#ba1228";
  }
});
document.getElementById('cor11').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#8e1124");
    document.getElementById('CB').style.backgroundColor = "#8e1124";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#8e1124");
    document.getElementById('BT').style.backgroundColor = "#8e1124";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#8e1124");
    document.getElementById('ge').style.backgroundColor = "#8e1124";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#8e1124");
    document.getElementById('gi').style.backgroundColor = "#8e1124";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#8e1124");
    document.getElementById('VE').style.backgroundColor = "#8e1124";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#8e1124");
    document.getElementById('VD').style.backgroundColor = "#8e1124";
  }
});
document.getElementById('cor12').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#6f1a27");
    document.getElementById('CB').style.backgroundColor = "#6f1a27";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#6f1a27");
    document.getElementById('BT').style.backgroundColor = "#6f1a27";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#6f1a27");
    document.getElementById('ge').style.backgroundColor = "#6f1a27";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#6f1a27");
    document.getElementById('gi').style.backgroundColor = "#6f1a27";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#6f1a27");
    document.getElementById('VE').style.backgroundColor = "#6f1a27";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#6f1a27");
    document.getElementById('VD').style.backgroundColor = "#6f1a27";
  }
});
document.getElementById('cor13').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#ad325a");
    document.getElementById('CB').style.backgroundColor = "#ad325a";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#ad325a");
    document.getElementById('BT').style.backgroundColor = "#ad325a";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#ad325a");
    document.getElementById('ge').style.backgroundColor = "#ad325a";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#ad325a");
    document.getElementById('gi').style.backgroundColor = "#ad325a";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#ad325a");
    document.getElementById('VE').style.backgroundColor = "#ad325a";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#ad325a");
    document.getElementById('VD').style.backgroundColor = "#ad325a";
  }
});
document.getElementById('cor14').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#90cd36");
    document.getElementById('CB').style.backgroundColor = "#90cd36";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#90cd36");
    document.getElementById('BT').style.backgroundColor = "#90cd36";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#90cd36");
    document.getElementById('ge').style.backgroundColor = "#90cd36";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#90cd36");
    document.getElementById('gi').style.backgroundColor = "#90cd36";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#90cd36");
    document.getElementById('VE').style.backgroundColor = "#90cd36";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#90cd36");
    document.getElementById('VD').style.backgroundColor = "#90cd36";
  }
});
document.getElementById('cor15').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#5c8134");
    document.getElementById('CB').style.backgroundColor = "#5c8134";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#5c8134");
    document.getElementById('BT').style.backgroundColor = "#5c8134";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#5c8134");
    document.getElementById('ge').style.backgroundColor = "#5c8134";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#5c8134");
    document.getElementById('gi').style.backgroundColor = "#5c8134";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#5c8134");
    document.getElementById('VE').style.backgroundColor = "#5c8134";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#5c8134");
    document.getElementById('VD').style.backgroundColor = "#5c8134";
  }
});
document.getElementById('cor16').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#7bab33");
    document.getElementById('CB').style.backgroundColor = "#7bab33";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#7bab33");
    document.getElementById('BT').style.backgroundColor = "#7bab33";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#7bab33");
    document.getElementById('ge').style.backgroundColor = "#7bab33";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#7bab33");
    document.getElementById('gi').style.backgroundColor = "#7bab33";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#7bab33");
    document.getElementById('VE').style.backgroundColor = "#7bab33";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#7bab33");
    document.getElementById('VD').style.backgroundColor = "#7bab33";
  }
});
document.getElementById('cor17').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#136d53");
    document.getElementById('CB').style.backgroundColor = "#136d53";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#136d53");
    document.getElementById('BT').style.backgroundColor = "#136d53";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#136d53");
    document.getElementById('ge').style.backgroundColor = "#136d53";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#136d53");
    document.getElementById('gi').style.backgroundColor = "#136d53";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#136d53");
    document.getElementById('VE').style.backgroundColor = "#136d53";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#136d53");
    document.getElementById('VD').style.backgroundColor = "#136d53";
  }
});
document.getElementById('cor18').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#175a44");
    document.getElementById('CB').style.backgroundColor = "#175a44";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#175a44");
    document.getElementById('BT').style.backgroundColor = "#175a44";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#175a44");
    document.getElementById('ge').style.backgroundColor = "#175a44";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#175a44");
    document.getElementById('gi').style.backgroundColor = "#175a44";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#175a44");
    document.getElementById('VE').style.backgroundColor = "#175a44";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#175a44");
    document.getElementById('VD').style.backgroundColor = "#175a44";
  }
});
document.getElementById('cor19').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#247a4f");
    document.getElementById('CB').style.backgroundColor = "#247a4f";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#247a4f");
    document.getElementById('BT').style.backgroundColor = "#247a4f";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#247a4f");
    document.getElementById('ge').style.backgroundColor = "#247a4f";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#247a4f");
    document.getElementById('gi').style.backgroundColor = "#247a4f";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#247a4f");
    document.getElementById('VE').style.backgroundColor = "#247a4f";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#247a4f");
    document.getElementById('VD').style.backgroundColor = "#247a4f";
  }
});
document.getElementById('cor20').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#254536");
    document.getElementById('CB').style.backgroundColor = "#254536";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#254536");
    document.getElementById('BT').style.backgroundColor = "#254536";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#254536");
    document.getElementById('ge').style.backgroundColor = "#254536";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#254536");
    document.getElementById('gi').style.backgroundColor = "#254536";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#254536");
    document.getElementById('VE').style.backgroundColor = "#254536";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#254536");
    document.getElementById('VD').style.backgroundColor = "#254536";
  }
});
document.getElementById('cor21').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#49582b");
    document.getElementById('CB').style.backgroundColor = "#49582b";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#49582b");
    document.getElementById('BT').style.backgroundColor = "#49582b";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#49582b");
    document.getElementById('ge').style.backgroundColor = "#49582b";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#49582b");
    document.getElementById('gi').style.backgroundColor = "#49582b";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#49582b");
    document.getElementById('VE').style.backgroundColor = "#49582b";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#49582b");
    document.getElementById('VD').style.backgroundColor = "#49582b";
  }
});
document.getElementById('cor22').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#496264");
    document.getElementById('CB').style.backgroundColor = "#496264";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#496264");
    document.getElementById('BT').style.backgroundColor = "#496264";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#496264");
    document.getElementById('ge').style.backgroundColor = "#496264";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#496264");
    document.getElementById('gi').style.backgroundColor = "#496264";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#496264");
    document.getElementById('VE').style.backgroundColor = "#496264";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#496264");
    document.getElementById('VD').style.backgroundColor = "#496264";
  }
});
document.getElementById('cor23').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#75837b");
    document.getElementById('CB').style.backgroundColor = "#75837b";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#75837b");
    document.getElementById('BT').style.backgroundColor = "#75837b";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#75837b");
    document.getElementById('ge').style.backgroundColor = "#75837b";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#75837b");
    document.getElementById('gi').style.backgroundColor = "#75837b";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#75837b");
    document.getElementById('VE').style.backgroundColor = "#75837b";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#75837b");
    document.getElementById('VD').style.backgroundColor = "#75837b";
  }
});
document.getElementById('cor24').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#80d352");
    document.getElementById('CB').style.backgroundColor = "#80d352";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#80d352");
    document.getElementById('BT').style.backgroundColor = "#80d352";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#80d352");
    document.getElementById('ge').style.backgroundColor = "#80d352";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#80d352");
    document.getElementById('gi').style.backgroundColor = "#80d352";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#80d352");
    document.getElementById('VE').style.backgroundColor = "#80d352";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#80d352");
    document.getElementById('VD').style.backgroundColor = "#80d352";
  }
});
document.getElementById('cor25').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#cac1a5");
    document.getElementById('CB').style.backgroundColor = "#cac1a5";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#cac1a5");
    document.getElementById('BT').style.backgroundColor = "#cac1a5";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#cac1a5");
    document.getElementById('ge').style.backgroundColor = "#cac1a5";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#cac1a5");
    document.getElementById('gi').style.backgroundColor = "#cac1a5";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#cac1a5");
    document.getElementById('VE').style.backgroundColor = "#cac1a5";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#cac1a5");
    document.getElementById('VD').style.backgroundColor = "#cac1a5";
  }
});
document.getElementById('cor26').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#2d4639");
    document.getElementById('CB').style.backgroundColor = "#2d4639";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#2d4639");
    document.getElementById('BT').style.backgroundColor = "#2d4639";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#2d4639");
    document.getElementById('ge').style.backgroundColor = "#2d4639";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#2d4639");
    document.getElementById('gi').style.backgroundColor = "#2d4639";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#2d4639");
    document.getElementById('VE').style.backgroundColor = "#2d4639";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#2d4639");
    document.getElementById('VD').style.backgroundColor = "#2d4639";
  }
});
document.getElementById('cor27').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#595d42");
    document.getElementById('CB').style.backgroundColor = "#595d42";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#595d42");
    document.getElementById('BT').style.backgroundColor = "#595d42";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#595d42");
    document.getElementById('ge').style.backgroundColor = "#595d42";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#595d42");
    document.getElementById('gi').style.backgroundColor = "#595d42";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#595d42");
    document.getElementById('VE').style.backgroundColor = "#595d42";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#595d42");
    document.getElementById('VD').style.backgroundColor = "#595d42";
  }
});
document.getElementById('cor28').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#224056");
    document.getElementById('CB').style.backgroundColor = "#224056";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#224056");
    document.getElementById('BT').style.backgroundColor = "#224056";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#224056");
    document.getElementById('ge').style.backgroundColor = "#224056";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#224056");
    document.getElementById('gi').style.backgroundColor = "#224056";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#224056");
    document.getElementById('VE').style.backgroundColor = "#224056";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#224056");
    document.getElementById('VD').style.backgroundColor = "#224056";
  }
});
document.getElementById('cor29').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#cfb510");
    document.getElementById('CB').style.backgroundColor = "#cfb510";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#cfb510");
    document.getElementById('BT').style.backgroundColor = "#cfb510";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#cfb510");
    document.getElementById('ge').style.backgroundColor = "#cfb510";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#cfb510");
    document.getElementById('gi').style.backgroundColor = "#cfb510";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#cfb510");
    document.getElementById('VE').style.backgroundColor = "#cfb510";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#cfb510");
    document.getElementById('VD').style.backgroundColor = "#cfb510";
  }
});
document.getElementById('cor30').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#df201e");
    document.getElementById('CB').style.backgroundColor = "#df201e";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#df201e");
    document.getElementById('BT').style.backgroundColor = "#df201e";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#df201e");
    document.getElementById('ge').style.backgroundColor = "#df201e";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#df201e");
    document.getElementById('gi').style.backgroundColor = "#df201e";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#df201e");
    document.getElementById('VE').style.backgroundColor = "#df201e";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#df201e");
    document.getElementById('VD').style.backgroundColor = "#df201e";
  }
});
document.getElementById('cor31').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#fa5e1f");
    document.getElementById('CB').style.backgroundColor = "#fa5e1f";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#fa5e1f");
    document.getElementById('BT').style.backgroundColor = "#fa5e1f";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#fa5e1f");
    document.getElementById('ge').style.backgroundColor = "#fa5e1f";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#fa5e1f");
    document.getElementById('gi').style.backgroundColor = "#fa5e1f";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#fa5e1f");
    document.getElementById('VE').style.backgroundColor = "#fa5e1f";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#fa5e1f");
    document.getElementById('VD').style.backgroundColor = "#fa5e1f";
  }
});
document.getElementById('cor32').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#a29f97");
    document.getElementById('CB').style.backgroundColor = "#a29f97";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#a29f97");
    document.getElementById('BT').style.backgroundColor = "#a29f97";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#a29f97");
    document.getElementById('ge').style.backgroundColor = "#a29f97";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#a29f97");
    document.getElementById('gi').style.backgroundColor = "#a29f97";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#a29f97");
    document.getElementById('VE').style.backgroundColor = "#a29f97";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#a29f97");
    document.getElementById('VD').style.backgroundColor = "#a29f97";
  }
});
document.getElementById('cor33').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#4d4f4b");
    document.getElementById('CB').style.backgroundColor = "#4d4f4b";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#4d4f4b");
    document.getElementById('BT').style.backgroundColor = "#4d4f4b";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#4d4f4b");
    document.getElementById('ge').style.backgroundColor = "#4d4f4b";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#4d4f4b");
    document.getElementById('gi').style.backgroundColor = "#4d4f4b";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#4d4f4b");
    document.getElementById('VE').style.backgroundColor = "#4d4f4b";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#4d4f4b");
    document.getElementById('VD').style.backgroundColor = "#4d4f4b";
  }
});
document.getElementById('cor34').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#3d4143");
    document.getElementById('CB').style.backgroundColor = "#3d4143";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#3d4143");
    document.getElementById('BT').style.backgroundColor = "#3d4143";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#3d4143");
    document.getElementById('ge').style.backgroundColor = "#3d4143";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#3d4143");
    document.getElementById('gi').style.backgroundColor = "#3d4143";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#3d4143");
    document.getElementById('VE').style.backgroundColor = "#3d4143";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#3d4143");
    document.getElementById('VD').style.backgroundColor = "#3d4143";
  }
});
document.getElementById('cor35').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#9a8566");
    document.getElementById('CB').style.backgroundColor = "#9a8566";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#9a8566");
    document.getElementById('BT').style.backgroundColor = "#9a8566";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#9a8566");
    document.getElementById('ge').style.backgroundColor = "#9a8566";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#9a8566");
    document.getElementById('gi').style.backgroundColor = "#9a8566";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#9a8566");
    document.getElementById('VE').style.backgroundColor = "#9a8566";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#9a8566");
    document.getElementById('VD').style.backgroundColor = "#9a8566";
  }
});
document.getElementById('cor36').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#8e634c");
    document.getElementById('CB').style.backgroundColor = "#8e634c";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#8e634c");
    document.getElementById('BT').style.backgroundColor = "#8e634c";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#8e634c");
    document.getElementById('ge').style.backgroundColor = "#8e634c";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#8e634c");
    document.getElementById('gi').style.backgroundColor = "#8e634c";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#8e634c");
    document.getElementById('VE').style.backgroundColor = "#8e634c";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#8e634c");
    document.getElementById('VD').style.backgroundColor = "#8e634c";
  }
});
document.getElementById('cor37').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#80715d");
    document.getElementById('CB').style.backgroundColor = "#80715d";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#80715d");
    document.getElementById('BT').style.backgroundColor = "#80715d";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#80715d");
    document.getElementById('ge').style.backgroundColor = "#80715d";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#80715d");
    document.getElementById('gi').style.backgroundColor = "#80715d";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#80715d");
    document.getElementById('VE').style.backgroundColor = "#80715d";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#80715d");
    document.getElementById('VD').style.backgroundColor = "#80715d";
  }
});
document.getElementById('cor38').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#553030");
    document.getElementById('CB').style.backgroundColor = "#553030";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#553030");
    document.getElementById('BT').style.backgroundColor = "#553030";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#553030");
    document.getElementById('ge').style.backgroundColor = "#553030";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#553030");
    document.getElementById('gi').style.backgroundColor = "#553030";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#553030");
    document.getElementById('VE').style.backgroundColor = "#553030";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#553030");
    document.getElementById('VD').style.backgroundColor = "#553030";
  }
});
document.getElementById('cor39').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#39322d");
    document.getElementById('CB').style.backgroundColor = "#39322d";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#39322d");
    document.getElementById('BT').style.backgroundColor = "#39322d";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#39322d");
    document.getElementById('ge').style.backgroundColor = "#39322d";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#39322d");
    document.getElementById('gi').style.backgroundColor = "#39322d";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#39322d");
    document.getElementById('VE').style.backgroundColor = "#39322d";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#39322d");
    document.getElementById('VD').style.backgroundColor = "#39322d";
  }
});
document.getElementById('cor40').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#332e2c");
    document.getElementById('CB').style.backgroundColor = "#332e2c";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#332e2c");
    document.getElementById('BT').style.backgroundColor = "#332e2c";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#332e2c");
    document.getElementById('ge').style.backgroundColor = "#332e2c";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#332e2c");
    document.getElementById('gi').style.backgroundColor = "#332e2c";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#332e2c");
    document.getElementById('VE').style.backgroundColor = "#332e2c";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#332e2c");
    document.getElementById('VD').style.backgroundColor = "#332e2c";
  }
});
document.getElementById('cor41').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#191a1c");
    document.getElementById('CB').style.backgroundColor = "#191a1c";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#191a1c");
    document.getElementById('BT').style.backgroundColor = "#191a1c";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#191a1c");
    document.getElementById('ge').style.backgroundColor = "#191a1c";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#191a1c");
    document.getElementById('gi').style.backgroundColor = "#191a1c";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#191a1c");
    document.getElementById('VE').style.backgroundColor = "#191a1c";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#191a1c");
    document.getElementById('VD').style.backgroundColor = "#191a1c";
  }
});
document.getElementById('cor42').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#b3a390");
    document.getElementById('CB').style.backgroundColor = "#b3a390";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#b3a390");
    document.getElementById('BT').style.backgroundColor = "#b3a390";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#b3a390");
    document.getElementById('ge').style.backgroundColor = "#b3a390";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#b3a390");
    document.getElementById('gi').style.backgroundColor = "#b3a390";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#b3a390");
    document.getElementById('VE').style.backgroundColor = "#b3a390";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#b3a390");
    document.getElementById('VD').style.backgroundColor = "#b3a390";
  }
});
document.getElementById('cor43').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#81807e");
    document.getElementById('CB').style.backgroundColor = "#81807e";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#81807e");
    document.getElementById('BT').style.backgroundColor = "#81807e";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#81807e");
    document.getElementById('ge').style.backgroundColor = "#81807e";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#81807e");
    document.getElementById('gi').style.backgroundColor = "#81807e";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#81807e");
    document.getElementById('VE').style.backgroundColor = "#81807e";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#81807e");
    document.getElementById('VD').style.backgroundColor = "#81807e";
  }
});
document.getElementById('cor44').addEventListener('click', function (e) {
  if (document.getElementById('base').checked) {
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#856d4a");
    document.getElementById('CB').style.backgroundColor = "#856d4a";
  } if (document.getElementById('botoes').checked) {
    document.querySelectorAll(".manga").forEach(v => v.style.fill = "#856d4a");
    document.getElementById('BT').style.backgroundColor = "#856d4a";
  }if(document.getElementById('gola1').checked){
    document.querySelectorAll(".punho").forEach(v => v.style.fill = "#856d4a");
    document.getElementById('ge').style.backgroundColor = "#856d4a";
  }if(document.getElementById('gola2').checked){
    document.querySelectorAll(".barra").forEach(v => v.style.fill = "#856d4a");
    document.getElementById('gi').style.backgroundColor = "#856d4a";
  }if(document.getElementById('vista').checked){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#856d4a");
    document.getElementById('VE').style.backgroundColor = "#856d4a";
  }if(document.getElementById('vista1').checked){
    document.querySelectorAll(".gola").forEach(v => v.style.fill = "#856d4a");
    document.getElementById('VD').style.backgroundColor = "#856d4a";
  }
});
  //bolso on/off
  const bolsoligadesliga = document.getElementById('switch-shadow');
  bolsoligadesliga.addEventListener('click', function(e){
    if(document.getElementById('switch-shadow').checked){
      document.getElementById('frente3').style.visibility = "hidden";
      document.getElementById('frente4').style.visibility = "visible";
      document.querySelectorAll(".botao").forEach(v => v.style.visibility = "hidden");
    }else {
      document.getElementById('frente3').style.visibility = "visible";
      document.getElementById('frente4').style.visibility = "hidden";
      document.querySelectorAll(".botao").forEach(v => v.style.visibility = "visible");
    }
  });


  // download
$(document).ready(function(){
  $("#download").click(function(){
    domtoimage.toBlob(document.getElementById('social_masculino')).then(function(blob){
      window.saveAs(blob, "jaqueta.png");
      
    })
  })
 });

 //upload
 var deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";

var imga = document.createElement('img');
imga.src = deleteIcon;

  var canvas = new fabric.Canvas('list');
  let uploader = document.getElementById("uploader");
  uploader.addEventListener('change',function(e){
var reader = new FileReader();
reader.onload = function(e) {
  var image = new Image();
  image.src = e.target.result;
  image.onload = function() {
    var img = new fabric.Image(image);
    img.set({
      left: 100,
      top: 60
    });
    img.scaleToWidth(200);
    canvas.add(img).setActiveObject(img).renderAll();
    }
}
reader.readAsDataURL(e.target.files[0]);
setTimeout(() => {
  document.getElementById("uploader").value = "";
}, 1)
});
fabric.Object.prototype.controls.deleteControl = new fabric.Control({
  x: 0.5,
  y: -0.5,
  offsetY: 16,
  cursorStyle: 'pointer',
  mouseUpHandler: deleteObject,
  render: renderIcon,
  cornerSize: 24
});


function deleteObject(eventData, transform) {
      var target = transform.target;
      var canvas = target.canvas;
          canvas.remove(target);
      canvas.requestRenderAll();
  };

function renderIcon(ctx, left, top, styleOverride, fabricObject) {
  var size = this.cornerSize;
  ctx.save();
  ctx.translate(left, top);
  ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
  ctx.drawImage(imga, -size/2, -size/2, size, size);
  ctx.restore();
};


///////////Responsivo
///////Celular
const lado = document.getElementById('switch-shadow2');
  lado.addEventListener('click', function(e){
    if(document.getElementById('switch-shadow2').checked){
      document.getElementById('frente').style.display = "none";
      document.getElementById('costas').style.display = "block";
    }else {
      document.getElementById('frente').style.display = "block";
      document.getElementById('costas').style.display = "none" ;
    }
  });


function sizeOfThings() {
    if (window.innerWidth > 768){
        document.getElementById('costas').style.visibility = "visible";
        document.getElementById('frente').style.visibility = "visible";
        document.getElementById('acabamentos').style.display = "block";
        document.getElementById('cores').style.visibility = "visible";
    }else{
        document.getElementById('costas').style.visibility = "hidden";
        document.getElementById('acabamentos').style.display = "none";
        document.getElementById('cores').style.visibility = "hidden";
    }
 };
window.addEventListener('resize', function(){
	sizeOfThings();
});
 

document.getElementById('botaocor').addEventListener('click', function(e){
  console.log('teste')
});

document.getElementById('btnacabalabel').addEventListener('click', function(e){
  document.getElementById('acabamentos').style.display = "block";
  document.getElementById('deletelabel').style.display = "block";
  document.getElementById('cores').style.visibility = "hidden";
})

document.getElementById('deleteb').addEventListener('click', function(e){
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('deletebase').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocor').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "visible";
  document.getElementById('deletebaselabel').style.display = "block";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorbotoes').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorgola').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorvista').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorcarcela').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});
document.getElementById('botaocorpunho').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorpeitilho1').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});
document.getElementById('botaocorpeitilho2').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});
document.getElementById('botaocorfriso').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

