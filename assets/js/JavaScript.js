/*Cookies e permissoes */
(function () {
    "use strict";

    var cookieAlert = document.querySelector(".cookiealert");
    var acceptCookies = document.querySelector(".acceptcookies");

    if (!cookieAlert) {
       return;
    }

    // Mostrar o alerta se não conseguirmos encontrar o cookie "acceptCookies"
    if (!getCookie("acceptCookies")) {
        cookieAlert.classList.add("show");
    }

	// Ao clicar no botão concordar, crie um 1 ano
    // cookie para lembrar a escolha do usuário e fechar o banner
    acceptCookies.addEventListener("click", function () {
        setCookie("acceptCookies", true, 365);
        cookieAlert.classList.remove("show");


	// despacha o evento de aceitação
        window.dispatchEvent(new Event("cookieAlertAccept"))
    });

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
})();

/*Efeito Digitando Introdução */

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["prática", "segura", "econômica", "online"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

/*Efeito Digitando serviços */

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desenvolvedores')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Advogados')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Fotógrafos')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Engenheiros')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Designer Gráfico')
    .pauseFor(2500)
    .deleteAll()
    .typeString('produtores de conteúdos')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Designer de Moda')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Arquitetos')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Médicos')
    .pauseFor(2500)
    .start();





/*Botao de seleçao serviços */

 function toggleDiv1() {
    if (document.getElementById('serviço1').style.display == 'none') {
       document.getElementById('serviço1').style.display = 'block';
       document.getElementById('imagemservico1').style.display = 'block';
       document.getElementById('serviço2').style.display = 'none';
       document.getElementById('serviço3').style.display = 'none';
       document.getElementById('serviço4').style.display = 'none';
       document.getElementById('serviço5').style.display = 'none';
       document.getElementById('imagemservico2').style.display = 'none';
       document.getElementById('imagemservico3').style.display = 'none';
       document.getElementById('imagemservico4').style.display = 'none';
       document.getElementById('imagemservico5').style.display = 'none';
    } else {
    }
 }
 function toggleDiv2() {
    if (document.getElementById('serviço2').style.display == 'none') {
       document.getElementById('serviço2').style.display = 'block';
       document.getElementById('imagemservico2').style.display = 'block';
       document.getElementById('serviço1').style.display = 'none';
       document.getElementById('serviço3').style.display = 'none';
       document.getElementById('serviço4').style.display = 'none';
       document.getElementById('serviço5').style.display = 'none';
       document.getElementById('imagemservico1').style.display = 'none';
       document.getElementById('imagemservico3').style.display = 'none';
       document.getElementById('imagemservico4').style.display = 'none';
       document.getElementById('imagemservico5').style.display = 'none'; 
    } else {
    }
 }
 function toggleDiv3() {
    if (document.getElementById('serviço3').style.display == 'none') {
       document.getElementById('serviço3').style.display = 'block';
       document.getElementById('imagemservico3').style.display = 'block';
       document.getElementById('serviço1').style.display = 'none';
       document.getElementById('serviço2').style.display = 'none';
       document.getElementById('serviço4').style.display = 'none';
       document.getElementById('serviço5').style.display = 'none';
       document.getElementById('imagemservico1').style.display = 'none';
       document.getElementById('imagemservico2').style.display = 'none';
       document.getElementById('imagemservico4').style.display = 'none';
       document.getElementById('imagemservico5').style.display = 'none';
    } else {
    }
 }
 function toggleDiv4() {
    if (document.getElementById('serviço4').style.display == 'none') {
       document.getElementById('serviço4').style.display = 'block';
       document.getElementById('imagemservico4').style.display = 'block';
       document.getElementById('serviço1').style.display = 'none';
       document.getElementById('serviço2').style.display = 'none';
       document.getElementById('serviço3').style.display = 'none';
       document.getElementById('serviço5').style.display = 'none';
       document.getElementById('imagemservico1').style.display = 'none';
       document.getElementById('imagemservico2').style.display = 'none';
       document.getElementById('imagemservico3').style.display = 'none';
       document.getElementById('imagemservico5').style.display = 'none';
    } else {
    }
 }
 function toggleDiv5() {
    if (document.getElementById('serviço5').style.display == 'none') {
       document.getElementById('serviço5').style.display = 'block';
       document.getElementById('imagemservico5').style.display = 'block';
       document.getElementById('serviço1').style.display = 'none';
       document.getElementById('serviço2').style.display = 'none';
       document.getElementById('serviço3').style.display = 'none';
       document.getElementById('serviço4').style.display = 'none';
       document.getElementById('imagemservico1').style.display = 'none';
       document.getElementById('imagemservico2').style.display = 'none';
       document.getElementById('imagemservico3').style.display = 'none';
       document.getElementById('imagemservico4').style.display = 'none';
    } else {
    }
 }





	
/*Formulario */
$(function($){
			
			$("form").submit(function(event){
				
				event.preventDefault();
				
				$.ajax({
				url: "https://submit-form.com/Ug2XHzCb",
				method: "POST",
				data: {
					nome: $("#nome").val(),
					serviço: $("#serviço").val(),
					email: $("#email").val(),
					estado: $("#estado").val(),
					cidade: $("#cidade").val(),
					telefone: $("#telefone").val(),
				},
				dataType: "json"
				}).done(function(){
					$("#nome").val("");
					$("#serviço").val("");
					$("#email").val("");
					$("#estado").val("");
					$("#cidade").val("");
					$("#telefone").val("");
					window.location.href = "index.html";
				}).fail(function(){
					alert("Erro!");
					});
				});
			});
      

    /*Fac */

      var acc = document.getElementsByClassName("accordion");
      var i;
      
      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
          /* Toggle between adding and removing the "active" class,
          to highlight the button that controls the panel */
          this.classList.toggle("active");
      
          /* Toggle between hiding and showing the active panel */
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        });
      }