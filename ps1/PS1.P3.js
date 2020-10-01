const paramFunc = (pStr, lamb) => lamb(pStr);

const expr1 = paramFunc(pStr = "supercalifragilisticexpialidocious",
    fragment => fragment.split(/([&c])/g).join("c").split("cc"))


const expr2 = paramFunc(pStr ="supercalifragilisticexpialidocious",
    word => {
        let modWord = word.replace(/a/gi, "A");
        let count = modWord.split(/A/gi).length-1;
        let wordLength = modWord.length;
        return  {
            originalString: pStr,
            modifiedString: modWord,
            numberReplaced: count,
            length: wordLength
        };
    }
)
console.log(expr1);
console.log(expr2);
module.exports = {paramFunc}