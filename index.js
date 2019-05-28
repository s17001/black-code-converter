(stdin => {
    const blackConstructor =`__=-~-~[-~[]];_=[...{}+[]][__+__- -~[]]+[...{}+[]][-~[]]+([][""]+[])[-~[]]+(([]==[])+[])[__]+(-~[]/[]+[])[__+__]+(!![]+[])[-~[]]+([][""]+[])[+[]]+[...{}+[]][__+__- -~[]]+(!![]+[])[+[]]+[...{}+[]][-~[]]+(!![]+[])[-~[]];`
    const range = (len, start) => Array.from(Array(len), (v, i) => i + start)
    const uniq = array => [...new Set(array)] // in array // out array

    const replaceBlackCode = (string) => { // in 1 range string // out some range string 
        const rebuild = string
        .replace(' ',"' '")
        .replace("t","(!![]+[])[-[]]")
        .replace("r","(!![]+[])[-~[]]")
        .replace("u","([]['']+[])[-[]]")
        .replace("e","(!![]+[])[-~-~[-~[]]]")
        .replace("f","(![]+[])[-[]]")
        .replace("a","(![]+[])[-~[]]")
        .replace("l","(![]+[])[-~[-~[]]]")
        .replace("s","(![]+[])[-~[-~[-~[]]]]")
        .replace("n","([]['']+[])[-~[]]")
        .replace("d","([]['']+[])[-~[-~[]]]")
        .replace("i","([]['']+[])[(-~[]<<-~[-~[]])+-~[]]")
        .replace("I","(~[]/-[]+[])[-[]]")
        .replace("y","(- -~[]/-[]+[])[(-~[]+[]+-~[]>>-~[])+(-~[]<<-~[])]")
        .replace("o","([...{}+{}])[-~[]]")
        .replace("b","([...{}+{}])[-~[]<<-~[]]")
        .replace("j","([...{}+{}])[-~-~[-~[]]]")
        .replace("c","([...{}+{}])[(-~[]+[]+-~[]>>-~[])]")
        .replace("0","([]-[]+[])")
        .replace("1","(-~[])")
        .replace("2","(-~[-~[]])")
        .replace("3","(__)")
        .replace("4","(-~[__])")
        .replace("5","(-~[]+[]+-~[]>>-~[])")
        .replace("6","(__+__)")
        .replace("7","((-~[]+[]+-~[]>>-~[])+(-~[]<<-~[]))")
        .replace("8","(-~[__]*-~-~[])")
        .replace("9","(__*__)")
        .replace("N","(''/''+[])[-[]-[]]")

        return rebuild
    }

    const createReturnUTF = (string) => {
    
        ___="(!![]+[])[-~[]]+(!![]+[])[__]+(!![]+[])[+[]]+(!![]+[])[-~[-~[]]]+(!![]+[])[-~[]]+([]['']+[])[-~[]]+' \"'+'\\\\' +([]['']+[])[[]-[]] +'{' +"+string+"+ '}'+'\"'"
        return ___
    }

    const wrapper = (string) => {
        ___="[][_][_]("+string+")()"
        return ___
    } 

    const canUseString = ["t", "r", "u", "e", "f", "a", "l", "s", "n", "d", "i", "I", "y", "o", "b", "j", "c", "N","0","1","2","3","4","5","6","7","8","9","_end_"]

    // Declare Variable
    const inputs  = [...stdin+[]]
    // Main Procedure

    const output = [];

    for (let input of inputs) {

        for (let myString of canUseString) {
            
            if (input == myString) {
                //使える文字なら => 置き換える
                output.push(replaceBlackCode(input))
                break;

            } else if('_end_' == myString) {
                //使えない文字なら => utf8に変換して、数字を記号化する必要がある
                const pursedArr = [...input.charCodeAt().toString(16)+[]]  

                if (pursedArr.length < 4) {
                    const returnArr = [...Array(4).fill(0)]
                    returnArr[2] = pursedArr[0]
                    returnArr[3] = pursedArr[1]

                    //ここで形成した配列をさらにreplaceBlackCodeしてまとめる
                    const flamedArr = []
                    
                    for (let arrElem of returnArr) {
                        flamedArr.push(replaceBlackCode(arrElem+[]))
                    }

                    const utf8code = wrapper(createReturnUTF(flamedArr.join('+')))
                    output.push(utf8code)
                } else {
                    const flamedArr = []
                    
                    for (let arrElem of pursedArr) {
                        flamedArr.push(replaceBlackCode(arrElem+[]))
                    }

                    hogehoge = wrapper(createReturnUTF(flamedArr.join('+')))
                    output.push(hogehoge)

                }

            }

        }
    }

    console.log(blackConstructor,output.join("+"))

  })(require('fs').readFileSync('/dev/stdin', 'utf8'));