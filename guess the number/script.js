const randomNum = Math.floor(Math.random() * 100);


const startGame = () => {
    const userNumber = +document.querySelector('#user_input').value;
    const result = document.querySelector('#result');


    if (randomNum === userNumber) {
        result.innerHTML = 'Congratulation> you win!';
        result.style.backroundColor = 'green';

    }else if (randomNum < userNumber) {
        result.innerHTML = `Number is less than  ${userNumber}`;
        result.style.backroundColor = 'red';

    } else if (randomNum > userNumber) {
        result.innerHTML = `Number is greter than  ${userNumber}`;
        result.style.backroundColor = 'red';
    }
};