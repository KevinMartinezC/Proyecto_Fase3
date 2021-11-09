var departaments={
  "dptos":[
    {
      "nombre":"Ahuachapan",
      "extension":"Extension territoial:244,8 km²",
      "fiestas":"5 al 14 de febrero",
      "habitantes":"116,948 hab."
    },
    {
      "nombre":"Cabañas",
      "extension":"Extension territoial:1,103.51 km²",
      "fiestas":"24 de noviembre al 5 de diciembre en honor a Santa Barbara y de 15 de agosto Fiestas de Virgen del transito",
      "habitantes":"215,400 hab."
    },
    {
      "nombre":"Chalatenango",
      "extension":":2,016.58 km²",
      "fiestas":"15 a 24 de Junio",
      "habitantes":"267,201 hab."
    },
    {
      "nombre":"Cuscatlán",
      "extension":"756.19 km²",
      "fiestas":"15 al 29 de enero",
      "habitantes":"232,238 hab."
    },
    {
      "nombre":"La Libertad",
      "extension":"1,653 km²",
      "fiestas":"Mes de Diciembre en honor al niño Jesus",
      "habitantes":"660,653 hab."
    },
    {
      "nombre":"Morazán",
      "extension":"1,447 km²",
      "fiestas":"1 al 15 de Octubre",
      "habitantes":"251,447 hab."
    },
    {
      "nombre":"La Paz",
      "extension":"1,223.61 km²",
      "fiestas":"15 al 18 de Agosto",
      "habitantes":"320,379 hab."
    },
    {
      "nombre":"Santa Ana",
      "extension":"408 km²",
      "fiestas":"17 al 26 de julio",
      "habitantes":"272,554 hab."
    },
    {
      "nombre":"San Miguel",
      "extension":"549 km²",
      "fiestas":"14 al 30 de Noviembre",
      "habitantes":"265,921 hab."
    },
    {
      "nombre":"Sonsonate",
      "extension":"232 km²",
      "fiestas":"25 de enero al 2 de febrero",
      "habitantes":"72,951 hab."
    },
    {
      "nombre":"San Salvador",
      "extension":"72 km²",
      "fiestas":"1 agosto al 6 de agosto",
      "habitantes":"238,244 hab."
    },
    {
      "nombre":"San Vicente",
      "extension":"262 km²",
      "fiestas":"Se celebran en el mes de Diciembre",
      "habitantes":"53,203 hab."
    },
    {
      "nombre":"La Unión",
      "extension":"244 km²",
      "fiestas":"primera quincena del mes de Octubre",
      "habitantes":"34,045 hab."
    },
    {
      "nombre":"Usulután",
      "extension":"2,130 km²",
      "fiestas":"19 al 25 de Noviembre en honor a Santa Catarina de Alejandria",
      "habitantes":"317,079 hab."
    }
]
};
$( () => {
  $( document ).on( 'click', '.depart', function() {
    if($(this).data('seq')===15){
      var body   = "";
      var title  = departaments.dptos[0].nombre;
          body  += "<b>Extensión: </b>" + departaments.dptos[0].extension+ "<br> <br>"
          body  += "<b>Fecha fiestas patronales: </b>" +departaments.dptos[0].fiestas + "<br> <br>"
          body  += "<b>Habitantes: </b>" + departaments.dptos[0].habitantes + "<br>"
          $("#MyPopup .modal-title").html(title);
          $("#MyPopup .modal-body").html(body);
          $("#MyPopup").modal("show");

  }else if($(this).data('seq')===16){
    var body   = "";
    var title  = departaments.dptos[1].nombre;
        body  += "<b>Extensión: </b>" + departaments.dptos[1].extension+ "<br> <br>"
        body  += "<b>Fecha fiestas patronales: </b>" +departaments.dptos[1].fiestas + "<br> <br>"
        body  += "<b>Habitantes: </b>" + departaments.dptos[1].habitantes + "<br>"
        $("#MyPopup .modal-title").html(title);
        $("#MyPopup .modal-body").html(body);
        $("#MyPopup").modal("show");
  }else if($(this).data('seq')===17){
    var body   = "";
    var title  = departaments.dptos[2].nombre;
        body  += "<b>Extensión: </b>" + departaments.dptos[2].extension+ "<br> <br>"
        body  += "<b>Fecha fiestas patronales: </b>" +departaments.dptos[2].fiestas + "<br> <br>"
        body  += "<b>Habitantes: </b>" + departaments.dptos[2].habitantes + "<br>"
        $("#MyPopup .modal-title").html(title);
        $("#MyPopup .modal-body").html(body);
        $("#MyPopup").modal("show");
  }else if($(this).data('seq')===18){
    var body   = "";
    var title  = departaments.dptos[3].nombre;
        body  += "<b>Extensión: </b>" + departaments.dptos[3].extension+ "<br> <br>"
        body  += "<b>Fecha fiestas patronales: </b>" +departaments.dptos[3].fiestas + "<br> <br>"
        body  += "<b>Habitantes: </b>" + departaments.dptos[3].habitantes + "<br>"
        $("#MyPopup .modal-title").html(title);
        $("#MyPopup .modal-body").html(body);
        $("#MyPopup").modal("show");
  }else if($(this).data('seq')===19){
    var body   = "";
    var title  = departaments.dptos[4].nombre;
        body  += "<b>Extensión: </b>" + departaments.dptos[4].extension+ "<br> <br>"
        body  += "<b>Fecha fiestas patronales: </b>" +departaments.dptos[4].fiestas + "<br> <br>"
        body  += "<b>Habitantes: </b>" + departaments.dptos[4].habitantes + "<br>"
        $("#MyPopup .modal-title").html(title);
        $("#MyPopup .modal-body").html(body);
        $("#MyPopup").modal("show");
  }else if($(this).data('seq')===20){
    var body   = "";
    var title  = departaments.dptos[5].nombre;
        body  += "<b>Extensión: </b>" + departaments.dptos[5].extension+ "<br> <br>"
        body  += "<b>Fecha fiestas patronales: </b>" +departaments.dptos[5].fiestas + "<br> <br>"
        body  += "<b>Habitantes: </b>" + departaments.dptos[5].habitantes + "<br>"
        $("#MyPopup .modal-title").html(title);
        $("#MyPopup .modal-body").html(body);
        $("#MyPopup").modal("show");
  }else if($(this).data('seq')===21){
    var body   = "";
    var title  = departaments.dptos[6].nombre;
        body  += "<b>Extensión: </b>" + departaments.dptos[6].extension+ "<br> <br>"
        body  += "<b>Fecha fiestas patronales: </b>" +departaments.dptos[6].fiestas + "<br> <br>"
        body  += "<b>Habitantes: </b>" + departaments.dptos[6].habitantes + "<br>"
        $("#MyPopup .modal-title").html(title);
        $("#MyPopup .modal-body").html(body);
        $("#MyPopup").modal("show");
  }else if($(this).data('seq')===22){
    var body   = "";
    var title  = departaments.dptos[7].nombre;
        body  += "<b>Extensión: </b>" + departaments.dptos[7].extension+ "<br> <br>"
        body  += "<b>Fecha fiestas patronales: </b>" +departaments.dptos[7].fiestas + "<br> <br>"
        body  += "<b>Habitantes: </b>" + departaments.dptos[7].habitantes + "<br>"
        $("#MyPopup .modal-title").html(title);
        $("#MyPopup .modal-body").html(body);
        $("#MyPopup").modal("show");
  }else if($(this).data('seq')===23){
    var body   = "";
    var title  = departaments.dptos[8].nombre;
        body  += "<b>Extensión: </b>" + departaments.dptos[8].extension+ "<br> <br>"
        body  += "<b>Fecha fiestas patronales: </b>" +departaments.dptos[8].fiestas + "<br> <br>"
        body  += "<b>Habitantes: </b>" + departaments.dptos[8].habitantes + "<br>"
        $("#MyPopup .modal-title").html(title);
        $("#MyPopup .modal-body").html(body);
        $("#MyPopup").modal("show");
  }else if($(this).data('seq')===24){
    var body   = "";
    var title  = departaments.dptos[9].nombre;
        body  += "<b>Extensión: </b>" + departaments.dptos[9].extension+ "<br> <br>"
        body  += "<b>Fecha fiestas patronales: </b>" +departaments.dptos[9].fiestas + "<br> <br>"
        body  += "<b>Habitantes: </b>" + departaments.dptos[9].habitantes + "<br>"
        $("#MyPopup .modal-title").html(title);
        $("#MyPopup .modal-body").html(body);
        $("#MyPopup").modal("show");
  }else if($(this).data('seq')===25){
    var body   = "";
    var title  = departaments.dptos[10].nombre;
        body  += "<b>Extensión: </b>" + departaments.dptos[10].extension+ "<br> <br>"
        body  += "<b>Fecha fiestas patronales: </b>" +departaments.dptos[10].fiestas + "<br> <br>"
        body  += "<b>Habitantes: </b>" + departaments.dptos[10].habitantes + "<br>"
        $("#MyPopup .modal-title").html(title);
        $("#MyPopup .modal-body").html(body);
        $("#MyPopup").modal("show");
  }else if($(this).data('seq')===26){
    var body   = "";
    var title  = departaments.dptos[11].nombre;
        body  += "<b>Extensión: </b>" + departaments.dptos[11].extension+ "<br> <br>"
        body  += "<b>Fecha fiestas patronales: </b>" +departaments.dptos[11].fiestas + "<br> <br>"
        body  += "<b>Habitantes: </b>" + departaments.dptos[11].habitantes + "<br>"
        $("#MyPopup .modal-title").html(title);
        $("#MyPopup .modal-body").html(body);
        $("#MyPopup").modal("show");
  }else if($(this).data('seq')===27){
    var body   = "";
    var title  = departaments.dptos[12].nombre;
        body  += "<b>Extensión: </b>" + departaments.dptos[12].extension+ "<br> <br>"
        body  += "<b>Fecha fiestas patronales: </b>" +departaments.dptos[12].fiestas + "<br> <br>"
        body  += "<b>Habitantes: </b>" + departaments.dptos[12].habitantes + "<br>"
        $("#MyPopup .modal-title").html(title);
        $("#MyPopup .modal-body").html(body);
        $("#MyPopup").modal("show");
  }else if($(this).data('seq')===28){
    var body   = "";
    var title  = departaments.dptos[13].nombre;
        body  += "<b>Extensión: </b>" + departaments.dptos[13].extension+ "<br> <br>"
        body  += "<b>Fecha fiestas patronales: </b>" +departaments.dptos[13].fiestas + "<br> <br>"
        body  += "<b>Habitantes: </b>" + departaments.dptos[13].habitantes + "<br>"
        $("#MyPopup .modal-title").html(title);
        $("#MyPopup .modal-body").html(body);
        $("#MyPopup").modal("show");
  }else if($(this).data('seq')===29){
    var body   = "";
    var title  = departaments.dptos[14].nombre;
        body  += "<b>Extensión: </b>" + departaments.dptos[14].extension+ "<br> <br>"
        body  += "<b>Fecha fiestas patronales: </b>" +departaments.dptos[14].fiestas + "<br> <br>"
        body  += "<b>Habitantes: </b>" + departaments.dptos[14].habitantes + "<br>"
        $("#MyPopup .modal-title").html(title);
        $("#MyPopup .modal-body").html(body);
        $("#MyPopup").modal("show");
  }
  });
});
