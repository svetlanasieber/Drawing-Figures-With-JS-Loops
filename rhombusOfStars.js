function rhombusOfStars(num){

    for(let row = 1; row <= num; row++){
        let char = '*';
        let char2 = ' *';
        let space = ' ';
        console.log(space.repeat(num - row) + char + char2.repeat(row - 1));
    }
    for(let row = num - 1; row >= 1; row--){
        let char = '*';
        let char2 = ' *';
        let space = ' ';
        console.log(space.repeat(num - row) + char + char2.repeat(row - 1));
        
    }

}

rhombusOfStars(4)