module.exports = function reverse (n) {
    let string = Math.abs(n) + "";
    return string.split("").reverse().join("");
}
