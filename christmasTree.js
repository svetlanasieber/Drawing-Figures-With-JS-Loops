function christmasTree(num) {

    for (let i = 0; i <= num; i++) {
        if (i === 0) {
            console.log(" ".repeat(num - i) + " | ")
        } else {
            console.log(" ".repeat(num - i) + "*".repeat(i) + " | " + "*".repeat(i));
        }
    }

}

christmasTree(3)