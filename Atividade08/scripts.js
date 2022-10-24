let sum = 0, biggest = 0, smallest = 200, totalAge = 0, count = 45, worst = 0, acceptedOpinion = 0, manTotal = 0, womanTotal = 0, average, porcent = 0

 for(let x = 0; x < count; x++){
    

    let age = parseInt(prompt(`Pessoa: ${x+1} Digite a idade: `))
    let sex = prompt(`Pessoa: ${x+1} Qual seu sexo (F ou M): `).toLocaleUpperCase()
    let opinion = parseInt(prompt(`Pessoa: ${x+1} Sua nota (1 a 4): `))

    totalAge += age
    console.log(totalAge)


//Função pra pegar a menor idade
function getSmallestAge(age){
    if(age < smallest){
        smallest = age
    }else{
        smallest = smallest
    }
}

//Função pra pegar a maior idade
function getBiggestAge(age){
    if(age > biggest){
        biggest = age
    }else{
        biggest = biggest
    }
}

//Função pra pegar a média de idades
function getAverage(totalAge){
    average =  parseInt(totalAge / count)
}

//Função pra pegar o total de opiniões péssimas
function worstOpinionCount(opinion){
    if(opinion == 1){
        worst += 1
    }else {
        worst = worst
    }

    return worst
}

//Função pra pegar a porcentagem de opções boas ou ótimas
function acceptedOpinionPercent(opinion){
    if(opinion == 4 || opinion == 3){
        acceptedOpinion += 1
    }else {
        acceptedOpinion = acceptedOpinion
    }

    porcent = ((acceptedOpinion * 100) / count)

}

//Função pra pegar o total de respostas
function getTotalAnswers(sex){
    if(sex == "F"){
        womanTotal += 1
    }else {
        manTotal += 1
    }

    return womanTotal, manTotal
}

//Função para executar todas as outras funções
function showResponse(){
    getAverage(totalAge)
    getBiggestAge(age)
    getSmallestAge(age)
    worstOpinionCount(opinion)
    acceptedOpinionPercent(opinion)
    getTotalAnswers(sex)

}

showResponse()
}


//Mostrando os resultados da pesquisa
alert(
`
    Media de idade das pessoas: ${average}
    Idade da pessoa mais velha: ${biggest}
    Idade da pessoa mais nova: ${smallest}
    Quantidadede pessoas que responderam péssimo: ${worst}
    Porcent. de pessoas que responderam ótimo e bom: ${porcent}%
    Número de mulheres que responderam: ${womanTotal}
    Número de homens que responderam: ${manTotal}
    Total de pessoas que responderam: ${womanTotal + manTotal}
 `
 )






