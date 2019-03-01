const randomNumbers = n => {
    let numbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let i = 0;
    while (i < n) {
        let r = Math.floor((Math.random() * 10));
        numbers[r] += 1;
        i += 1
    }
    return numbers
}

const main = () => {
    const startTime = Date.now();
    let r;
    if (process.argv.length == 2) { r = randomNumbers(10) }
    else { r = randomNumbers(process.argv[2]) }
    console.log("0: " + r[0] +
        "\n1: " + r[1] +
        "\n2: " + r[2] +
        "\n3: " + r[3] +
        "\n4: " + r[4] +
        "\n5: " + r[5] +
        "\n6: " + r[6] +
        "\n7: " + r[7] +
        "\n8: " + r[8] +
        "\n9: " + r[9]);
    console.log(`Executed in ${((Date.now() - startTime))} milliseconds.`);
}

main();