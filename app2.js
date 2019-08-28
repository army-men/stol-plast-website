let table = ['a', 'b', 'c', 'd', 'e', 'y'];
let total = 0;
let ttl = 0;
let rtl = 0;
// console.log(table)

const alphabeticString = (text) =>{
    words = text;
    let letter = words.toString().split('');
    console.log(letter)
    
    letter.forEach(letter =>{

        for (let i = 0; i < table.length; i++){
            if (letter === table[i]){
                total +=1;
            } 
        }

        if (letter !== ',') {ttl += 1}
        
    });
    rtl = ttl - total;
    console.log(total + '\n' + ttl + '\n' + rtl)
}
alphabeticString('slowka', 'gazety')
