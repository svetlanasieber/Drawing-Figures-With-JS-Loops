function triangleOfDollars(num){

    for(let row = 1; row <= num; row++){
        for(let col = 1; col <= row; col++){
            let char = '$ '
            console.log(char.repeat(row));
            break;
        }
    }

}

triangleOfDollars(5)