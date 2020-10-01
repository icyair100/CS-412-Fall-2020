
const getLeft = left => {
    return Number(left.charAt(0));
}
const getRight = right => {
    return Number(right.charAt(2));
}

const evaluate = str => {
    let sym = str.charAt(1);
    switch (sym) {
        case '+':
            return (exp) => {
                return getLeft(exp) + getRight(exp);
            }
        case '-':
            return (exp) => {
                return getLeft(exp) - getRight(exp);
            }
        case '*':
            return (exp) => {
                return getLeft(exp) * getRight(exp);
            }
        case '/':
            return (exp) => {
                return getLeft(exp) / getRight(exp);
            }
        case '%':
            return (exp) => {
                return getLeft(exp) % getRight(exp);
            }
        case '^':
            return (exp) => {
                return getLeft(exp) ** getRight(exp);
            }
    }
}


module.exports = {evaluate}