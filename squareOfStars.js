function squareOfStars(num){

    for(let i = 1; i <= num; i++){
        let char = '* '
        console.log(char.repeat(num));
    }

}

squareOfStars(2)