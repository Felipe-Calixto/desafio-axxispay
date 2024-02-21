import { IInfos } from "../routes/anagramas"

interface IAnagramas {
    anagramas: string[]
}

const createAnagramas = async (data: IInfos[]) => {

    let anagramas: IAnagramas[] = []

    data.forEach((word1) => {

        data.forEach((word2) => {
            //Verifica se as 2 palavras possuem a mesma quantidade de letras
            if (word1.str.length !== word2.str.length) {
                return
            }

            //Transforma as palavras em um conjunto de letrar em ordem como "abcde"
            let str1 = word1.str.split('').sort().join()
            let str2 = word2.str.split('').sort().join()

            //Compara o conjunto de letras
            let result = (str1 === str2)

            if (result) {
                if (word1 == word2) {
                    return
                }

                str1 = word1.str
                str2 = word2.str

                let anagrama = { anagramas: [str1, str2] }

                //Verifica se já existe a mesma palavra dentro do array
                if (!anagramas.some(a => a.anagramas.includes(word1.str) && a.anagramas.includes(word2.str))) {
                    anagramas.push(anagrama);
                }
            }
        })
    })

    return {
        json: anagramas
    }

    console.log(anagramas)

}

export default {
    createAnagramas
};