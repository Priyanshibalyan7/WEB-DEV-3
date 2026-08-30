let allargs = process.argv;
let opreation = allargs[2]
let num1 = Number(allargs[3])
let num2 = Number(allargs[4])

if (!opreation || isNaN(num1) || isNaN(num2)) {
    console.log("please enter a valid value");

} else {
    let result;
    if (opreation === "add") {
        result = num1 + num2
    } else if (opreation === "sub") {
        result = num1 - num2
    } else if (opreation === "mul") {
        result = num1 * num2
    } else if (opreation === "div") {
        if (num2 == 0) {
            console.log("<---------Can't be divided by zero--------->");
            result = undefined
        } else {
            result = num1 / num2
        }
    } else {
        console.log("<--------Invalid operation------->");
        result = undefined

    }

    if (result !== undefined) {
        console.log("Result:", result);

    }
}