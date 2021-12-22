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
	
	
$(function($){
			
			$("form").submit(function(event){
				
				event.preventDefault();
				
				$.ajax({
				url: "https://formspree.io/f/mgeradoy",
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



