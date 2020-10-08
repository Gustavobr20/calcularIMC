function calcular(){

    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);

    var resultado = peso / (altura * altura).toFixed(2);

    if(resultado < 18.5){
        document.getElementById('result').innerHTML = "O resultado do seu IMC é: " + resultado + "<br>Isso significa que você está abaixo do peso!";
    }else if(resultado > 18.5 || resultado < 24.9){
        document.getElementById('result').innerHTML = "O resultado do seu IMC é: " + resultado + "<br>Isso significa que você está no seu peso ideal!";
    }else if(resultado > 25 || resultado < 29.9){
        document.getElementById('result').innerHTML = "O resultado do seu IMC é: " + resultado + "<br>Isso significa que você está acima do peso!";
    }else if(resultado > 30 || resultado < 34.9){
        document.getElementById('result').innerHTML = "O resultado do seu IMC é: " + resultado + "<br>Isso significa que você está no grau I de obesidade!";
    }else if(resultado > 35 || resultado < 39.9){
        document.getElementById('result').innerHTML = "O resultado do seu IMC é: " + resultado + "<br>Isso significa que você está no grau II de obesidade!";
    }else if(resultado > 40){
        document.getElementById('result').innerHTML = "O resultado do seu IMC é: " + resultado + "<br>Isso significa que você está no grau III de obesidade!";
    }else{
        document.getElementById('result').innerHTML = "O seu resultado não possui categoria definida na tabela do IMC";
    }
    
}

