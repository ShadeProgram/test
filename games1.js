const quizData = [
    {
        question: "Bully terjadi di sekolah saja",
        a: "Mitos",
        b: "Fakta",
        correct: "a",
    },
    {
        question: "Menjadi korban bullying dapat menyebabkan masalah kesehatan mental pada korban.",
        a: "Mitos",
        b: "Fakta",
        correct: "b",
    },
    {
        question: "Pelaku bullying biasanya memiliki tingkat kepercayaan diri yang tinggi.",
        a: "Mitos",
        b: "Fakta",
        correct: "a",
    },
    {
        question: "Mengabaikan atau menghindari masalah bullying akan membuatnya berhenti dengan sendirinya.",
        a: "Mitos",
        b: "Fakta",
        correct: "a",
    },
    {
        question: "Korban bullying biasanya tidak melaporkan tindakan tersebut kepada orang dewasa atau otoritas.",
        a: "Mitos",
        b: "Fakta",
        correct: "b",
    },
    {
        question: "Anak-anak yang menjadi korban bullying cenderung tidak memiliki teman.",
        a: "Mitos",
        b: "Fakta",
        correct: "a",
    },
    {
        question: "Menjadi saksi bullying dan tidak melakukan apa pun sama buruknya dengan menjadi pelaku.",
        a: "Mitos",
        b: "Fakta",
        correct: "b",
    },
    {
        question: "Kasus bullying sering menjadi perhatian khusus bagi banyak negara",
        a: "Mitos",
        b: "Fakta",
        correct: "b",
    },
    {
        question: "Bullying hanya terjadi pada anak-anak dan remaja.",
        a: "Mitos",
        b: "Fakta",
        correct: "a",
    },
    {
        question: "Menurut unicef, remaja usia 14-24 dilaporkan pernah melakukan cyberbullying",
        a: "Mitos",
        b: "Fakta",
        correct: "b",
    },
    
    
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.jawaban')
const quizEl= document.getElementById('pertanyaan')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const submitBtn = document.getElementById('Selesai')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    quizEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer = null
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>Slovka berterima kasih karena anda telah membantunya, Bu Remora pun datang dan memberikan nilai ${score}/${quizData.length} beserta penjelasanya.</h2>
            <button onclick="window.open('penjelasan1.html', '_blank')">Penjelasan</button>            `
        }
    }
})
