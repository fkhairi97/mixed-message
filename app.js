const word = [
    ['Hello', 'Yow', 'Wazzup'],
    ['Good Morning', 'Good Evening', 'Good Night'],
    ['Sir', 'My man', 'Doug']
];

const createMessage = () => {
    let message = [];
    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < word[i].length; j++) {
            let ranNum = Math.floor(Math.random() * word[i].length);
            message.push(word[i][ranNum]);
        }
    }
    message = message.join(' ');
    return message;
}

console.log(createMessage);