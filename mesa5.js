function polegadaecentimetro(polegada){
    return polegada * 2,80;
}

console.log(polegadaecentimetro(10));

function url(link){
    return "https://www."+link+".com.br";
}

console.log( url("google") );

function exclamacao(frase){
    return frase + "!";
}

console.log( exclamacao("Óla mundo"));

function idade(a){
    return a * 7;
}

console.log(idade(5));

function horadetrabalho(salario){
    return salario / 160;
}

console.log(horadetrabalho(1902));

function alturaePeso(altura, Peso){
    return altura / Peso;
}

console.log(alturaePeso(1.72, 60))

function paraMaiuscula(texto) {
    return texto.toUpperCase();
}

console.log(paraMaiuscula('Teste'))

function tipoString(parametro) {
    console.log(typeof parametro);
}

tipoString(2)


function retornarCircunferencia(raio) {
    return 2 * Math.PI * raio;
}

console.log(retornarCircunferencia(76));