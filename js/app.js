$(function() {

  horno = $('.horno'); // Variable global para llamar div.horno
  crear_horno = $('#crear_horno'); // Variable global para llamar div#crear_horno
  cocinar = $('#cocinar');
  // tipo = $("input[name=tipo]").val();
  // tiempo = $("input[name=tiempo]").val();
  hideHorno();
  showHorno();
  showValues();
  // var Start = function(button){
  // var $AA = $("azul");
  // console.log($AA);
  // }
  });


  function hideHorno(){
    $(horno).hide();
  }

  function showHorno(){
    $(crear_horno).click(function(event){
      $(horno).show();
      $(crear_horno).hide();
    });
  }

  function showValues(){
    tipo = $("input[name=tipo]").val();
    tiempo = $("input[name=tiempo]").val();

    $(cocinar).submit(function(event){

      // console.log("si entra en cocinar")
      event.preventDefault();
      // console.log("si entra en cocinar despues de preventDefault")

    });
  }








//   $(crear).click(function(){
//   console.log('sublime text'); 
//   }); 
//   };

// });




// var Horno = {
//   init: function(){
//     if (self.clockCount === 0) {
//       $(crear).hide();
//       $('#clock').text("START");
//       self.start = new Date();
//       self.gameLoop();
//     } else {
//       $('#clock').text(self.clockCount);
//       setTimeout(self.countDown, 1000);
//     }
//     self.clockCount--;
//   },

//   timer: function(){

//   },

//   showStatus: function(){

//   },








