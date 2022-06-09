function CalculadoraIMC() {
        let peso = parseFloat(document.getElementById("peso").value.trim());
        let altura = parseFloat(document.getElementById("altura").value.trim());
        let imc = 0;
        let resultado = "";
     
        imc = peso / (altura * altura); 
     
        if (imc <18.5){
            resultado = "abaixo do peso."
        }
        else if (imc <=25){
            resultado = "peso normal."
        }
        else if (imc <=30){
            resultado = "sobrepeso"
        }
        else if (imc <=35){
            resultado = "obesidade"
        }
        else if (imc >=35 && imc <40){
            resultado ="obesidade 2"
        }
        else if (imc >=40){
            resultado ="obesidade 3"
        }
        console.log(resultado)
        console.log(imc)
     
        alert(" O imc é " + imc + ", você está com o " + resultado);
    }
    
    $(document).ready(function(){
      $('.date').mask('00/00/0000');
      $('.time').mask('00:00:00');
      $('.date_time').mask('00/00/0000 00:00:00');
      $('.cep').mask('00000-000');
      $('.phone').mask('0000-0000');
      $('.phone_with_ddd').mask('(00) 0000-0000');
      $('.phone_us').mask('(000) 000-0000');
      $('.mixed').mask('AAA 000-S0S');
      $('.cpf').mask('000.000.000-00', {reverse: true});
      $('.cnpj').mask('00.000.000/0000-00', {reverse: true});
      $('.money').mask('000.000.000.000.000,00', {reverse: true});
      $('.money2').mask("#.##0,00", {reverse: true});
      $('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
        translation: {
          'Z': {
            pattern: /[0-9]/, optional: true
          }
        }
      });
      $('.ip_address').mask('099.099.099.099');
      $('.percent').mask('##0,00%', {reverse: true});
      $('.clear-if-not-match').mask("00/00/0000", {clearIfNotMatch: true});
      $('.placeholder').mask("00/00/0000", {placeholder: "__/__/____"});
      $('.fallback').mask("00r00r0000", {
          translation: {
            'r': {
              pattern: /[\/]/,
              fallback: '/'
            },
            placeholder: "__/__/____"
          }
        });
      $('.selectonfocus').mask("00/00/0000", {selectOnFocus: true});
    });   


