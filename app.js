const word = [
    ['Hello', 'Yow', 'Wazzup'],
    ['Good Morning', 'Good Evening', 'Good Night'],
    ['Sir', 'My man', 'Doug']
];

const createMessage = () => {
    let message = [];
    for (let i = 0; i < word.length; i++) {
        const ranNum = Math.floor(Math.random() * word[i].length);
        const ranWord = word[i][ranNum];
        message.push(ranWord);
    }
    message = message.join(' ');
    return message;
}

console.log(createMessage());