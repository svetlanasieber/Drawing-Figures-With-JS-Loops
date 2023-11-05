function sunglasses(num) {

    console.log("*".repeat(num * 2) + " ".repeat(num) + "*".repeat(num * 2));
    for (let i = 1; i <= num - 2; i++) {
        if (i === Math.ceil((num - 1) / 2 - 1)){
            console.log("*" + "/".repeat(2 * num - 2) + "*" + "|".repeat(num)
                + "*" + "/".repeat(2 * num - 2) + "*");
        }else{
            console.log("*" + "/".repeat(2 * num - 2) + "*" + " ".repeat(num)
                + "*" + "/".repeat(2 * num - 2) + "*");
        }
    }
    console.log("*".repeat(num * 2) + " ".repeat(num) + "*".repeat(num * 2));

}

sunglasses(5)