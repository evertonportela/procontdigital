
/*Formulario */
$(function($){
			
			$("form").submit(function(event){
				
				event.preventDefault();
				
				$.ajax({
				url: "https://formspree.io/f/xqkjzlvz",
				method: "POST",
				data: {
					nome: $("#nome").val(),
					email: $("#email").val(),
					telefone: $("#telefone").val(),
				},
				dataType: "json"
				}).done(function(){
					$("#nome").val("");
					$("#email").val("");
					$("#telefone").val("");
					window.location.href = "baixar.html";
				}).fail(function(){
					alert("Erro!");
					});
				});
			});
      