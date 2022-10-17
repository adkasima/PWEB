while(true){
    jogador2 = "";
    jogador1 = prompt("Jogador 1: Digite pedra, papel ou tesoura").toLocaleLowerCase();
    numero = Math.floor(Math.random() * 3);

    if(numero == 0){
        jogador2 = "pedra"
    } 
    else if(numero == 1){
        jogador2 = "papel"
    } 
    else {
        jogador2 = "tesoura"
    }

    
    if(jogador1 == "pedra" || jogador1 == "papel" || jogador1 == "tesoura"){
        if (jogador1 == "pedra") {
            alert("O jogador 2 colocou " + jogador2 );
            if (jogador2 == "tesoura") {
                alert ("Pedra quebra tesoura");
            } else if (jogador2 == "papel"){
                alert ("Papel cobre a Pedra");
            } else if (jogador2 == "pedra") {
                alert ("Empate");
            }
            
            
        }
        else if (jogador1 == "tesoura") {
            alert("O jogador 2 colocou " + jogador2 );
            if (jogador2 == "pedra") {
                alert ("Pedra quebra tesoura");
            } else if (jogador2 == "papel"){
                alert ("tesoura corta papel");
            } else if (jogador2 == "tesoura") {
                alert ("Empate");
            }
        }
        
        
        else  if (jogador1 == "papel"){
            alert("O jogador 2 colocou " + jogador2 );
            if (jogador2 == "pedra") {
                alert ("Papel cobre a pedra");
            }else if (jogador2 == "tesoura") {
                alert ("Tesoura corta papel");
            }else if (jogador2 == "papel")  {
                alert ("Empate");
            }
            
        }
    }
    else {
        alert("Digite uma opção válida!");
    }
    }
    