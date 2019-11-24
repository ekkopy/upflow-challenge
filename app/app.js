// Declaração de variaveis
var div = $(".resultados");
var btn_gerar_campos = $("#gerar_campos");
var btn_somatorio = $("#btn-somar");
var numeros = [];
let contador = 1;
let resultado_somatario = 0;

// Captura evento de criar os campos
$(btn_gerar_campos).click(function(x){
   x.preventDefault();
   var qtd_campos = $("#qtd_campos").val();
   var template_do_campo = '<input class="form-control" type="number" id="novo_valor" placeholder="Informe o valor para o campo: " required><br/>';
   while(contador <= qtd_campos){
      $(div).append(template_do_campo);
      contador++;
   }
});

//Captura valores dos numeros e soma
$(btn_somatorio).click(function(x){
   $("#resultados :input").each(function(z){
     numeros.push(parseInt($(this).val()));
   });
   for (let index = 0; index < numeros.length; index++) {
      resultado_somatario += numeros[index];
   }
   $(".resultado_div").append(resultado_somatario);
});
