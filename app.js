const quiz = [
    {
        question:'1.ミッフィーの誕生はいつ？',
        answers:['あ','い','う','え'],
        correct:'あ'
    },{
        question:'2.いつ？',
        answers:['あ','い','う','え'],
        correct:'あ'
    },{
        question:'3.いつだ？',
        answers:['あ','い','う','え'],
        correct:'い'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

//回答 $はHTMLのオブジェクト
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//質問
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
     $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
     buttonIndex++;
    }
}
setupQuiz();


//正解か不正解かを出す e.targetはどこをクリックされたかの呼び出し
const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解');
        score++;
    } else {
        window.alert('不正解');
    }
    //次の問題へ進む
    quizIndex++;

    if(quizIndex < quizLength){
        setupQuiz();
    } else {
        window.alert('終了！あなたの生回数は' + score + '/' + quizLength + 'です');
    }
};

//
let handlerIndex = 0;
while(handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click',(e) => {
        clickHandler(e);
    });
    handlerIndex++;
}
