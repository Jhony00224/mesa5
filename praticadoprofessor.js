function mensagem(texto){
    console.log("Bom dia"+texto)
}

mensagem("bom dia", 25);

//teste//

function mensagem(texto){
    return"ola eu sou o "+nome+" e tenho "+idade+" anos de idade";
    console.log("aqui")

    console.log(mensagem("minha idade"));
    let msg = mensagem("minha idade");
    console.log(msg);
    msg = mensagem("Ciclano");

    console.log(msg+" teste");

    //teste//

    function soma(v1,v2){
        let result = v1 + v2;
        return result;
    }

    console.log( soma(5, 2) );

    //teste//

    function url(link){
        return "https://www."+link+".com.br";
    }

    console.log( url("google") );

    //teste//

    function idadeCachorro(idade){
        return idadehumano * 7; 
    }
    let idade = idadeCachorro(5);
    console.log("Seu cachorro tem a idade total de" +idade );

    //teste//

    let idade = "Seu cachorro tem a idade total de"+idadeCachorro(5);
    let dog = cachorro; 
    console.log( idade.toUppecase() );
    console.log( typeof idade );
    console.log( typeof Dog );