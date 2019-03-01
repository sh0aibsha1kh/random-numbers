const randomNumbers = function random_numbers(n) {
    let zero = 0
    let one = 0
    let two = 0
    let three = 0
    let four = 0
    let five = 0
    let six = 0
    let seven = 0
    let eight = 0
    let nine = 0
    let i = 0
    while (i < n) {
        let r = Math.floor((Math.random() * 10));
        if (r == 0) { zero += 1 }
        else if (r == 1) { one += 1 }
        else if (r == 2) { two += 1 }
        else if (r == 3) { three += 1 }
        else if (r == 4) { four += 1 }
        else if (r == 5) { five += 1 }
        else if (r == 6) { six += 1 }
        else if (r == 7) { seven += 1 }
        else if (r == 8) { eight += 1 }
        else if (r == 9) { nine += 1 }
        i += 1
    }
    return [zero, one, two, three, four, five, six, seven, eight, nine]
}

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
    "\n9: " + r[9])
