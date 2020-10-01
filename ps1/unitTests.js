const {reverseString} = require('./PS1.P1');
const {evaluate} = require('./PS1.P2');
const {paramFunc} = require('./PS1.P3')
const {describe,it} = require('mocha');
const {expect} = require('chai');

describe("StringTest",() =>
{
    it("should reverse string", () => {
        let newString = reverseString("string");
        expect(newString).equal("gnirts");
        }

    )
})

describe("StringEvalTest", () => {
    it("should evaluate string", () => {
        let operator = evaluate("4+2");
        expect(operator("4+2")).equal(6)
        let operator2 = evaluate("5*7");
        expect(operator2("5*7")).equal(35)
        let operator3 = evaluate("6-1");
        expect(operator3("6-1")).equal(5)
        let operator4 = evaluate("9/2");
        expect(operator4("9/2")).equal(4.5)
        let operator5 = evaluate("2^8");
        expect(operator5("2^8")).equal(256)
    })
})

describe("ExpressionDecorationTest", () => {
    it("should configure string", () =>{
        let lamb1 = fragment => fragment.split(/([&c])/g).join("c").split("cc")
        let lamb2 = word => {
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
        let expression1 = paramFunc("supercalifragilisticexpialidocious", lamb1)
        expect(expression1).to.deep.equal([ 'super', 'califragilisti', 'cexpialido', 'cious' ])
        let expression2 = paramFunc("supercalifragilisticexpialidocious",lamb2)
        expect(expression2).to.deep.equal({
            originalString: 'supercalifragilisticexpialidocious',
            modifiedString: 'supercAlifrAgilisticexpiAlidocious',
            numberReplaced: 3,
            length: 34
        })
    })

})