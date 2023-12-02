function snow(input) {
    let sum=0;
    let arr = input.split('\n');

    const wordToNumber = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
      };

    function convertWordToNumber(word) {
        return wordToNumber[word] || NaN; // Return NaN for unrecognized words
      }

const wordsToCheck = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    for (let index=0;index<arr.length;index++){
        let wholeNumber='';
        let firstNumber;
        let lastNumber;
        const line = arr[index].split('');
        const reversedLine=line.toReversed();
        //console.log(line,reversedLine);
        for (let i=0;i<line.length;i++){
            if (!isNaN(line[i])){
                firstNumber=line[i];
                break;
            } else {
                
            }
        } 

        for (let i=0;i<reversedLine.length;i++){
            if (!isNaN(reversedLine[i])){
                lastNumber=reversedLine[i];
                break;
            }
        }
        wholeNumber=firstNumber+lastNumber;
        sum+=Number(wholeNumber);
    }
    console.log(sum);

}



snow(`two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`)