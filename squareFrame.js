function squareFrame(num){

    for(let i = 1; i <= num; i++){
        let char = '- ';
        console.log(`+ ${char.repeat(num - 2)}+`);
        for(let j = 1; j <= num - 2; j++){
            console.log(`| ${char.repeat(num - 2)}|`);
        }
        console.log(`+ ${char.repeat(num - 2)}+`);
        break;
    }

}

squareFrame(5)