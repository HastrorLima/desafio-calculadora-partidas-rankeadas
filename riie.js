function calculateRanked(wins, loses){
    let balance = []
    for (let i = 0; i < wins.length; i++){
        balance.push(wins[i] - loses[i])
    }
    return balance
}

let wins = [190, 125, 102]
let loses = [90, 20, 50]

let results = calculateRanked(wins, loses)

for(let i = 0; i < results.length; i++){
    let result = results[i] 
    let level

    if (result <= 10){
        level = "Ferro"
    }
    else if(result >= 11 && result <= 20){
        level = "Bronze"
    }
    else if(result >= 21 && result <= 50){
        level = "Prata"
    }
    else if(result >= 51 && result <= 80){
        level = "Ouro"
    }
    else if(result >= 81 && result <= 90){
        level = "Diamante"
    }
    else if(result >= 91 && result <= 100){
        level = "Lendário"
    }
    else if(result >= 101){
        level = "Imortal"
    }
    console.log("O herói " + (i + 1) + " tem de saldo " + result + " e está no nivel " + level) 
}

