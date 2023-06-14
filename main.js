
const questions = [
    {
        question: "Javascript is an _______ language",
        optionA: "Object-Oriented",
        optionB: "Procedural",
        optionC: "Object-Based",
        optionD: "None of these",
        correctOption: "optionA"
    },
    {
        question:"Which of the following keywords is used to define a variable in Javascript?",
        optionA: "var",
        optionB: "let",
        optionC: "Both A and B",
        optionD: "None of these",
        correctOption: "optionC"
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        optionA: "getElementbyID()",
        optionB: "getElementbyClassName()",
        optionC: "Both A and B",
        optionD: "None of these",
        correctOption: "optionC"
    },
    {
        question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
        optionA: "Throw an Error",
        optionB: "Ignores the Statement",
        optionC: "Give Warning",
        optionD: "None of these",
        correctOption: "optionB"
    },
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        optionA: "document.write()",
        optionB: "console.log()",
        optionC: "window.alert()",
        optionD: "All of these",
        correctOption: "optionD"
    },
    {
        question: "How can a datatype be declared to be a constant type?",
        optionA: "const",
        optionB: "var",
        optionC: "let",
        optionD: "constant",
        correctOption: "optionA"
    },
    {
        question: "What keyword is used to check whether a given property is valid or not?",
        optionA: "in",
        optionB: "is in",
        optionC: "exists",
        optionD: "lies",
        correctOption: "optionA"
    },
    {
        question: "What is the use of the <noscript> tag in Javascript?",
        optionA: "Clears all the cookies and cache",
        optionB: "The contents are displayed by non JS-based browser",
        optionC: "Both A and B",
        optionD: "None of these",
        correctOption: "optionB"
    },
    {
        question: "When an operator's value is NULL, the typeof returned by the unary operator is:",
        optionA: "Boolean",
        optionB: "Undefined",
        optionC: "Object",
        optionD: "Integer",
        correctOption: "optionC"
    },
    {
        question: "Which function is used to serialize an object into a JSON string in Javascript?",
        optionA: "stringy()",
        optionB: "parse()",
        optionC: "convert()",
        optionD: "None of these",
        correctOption: "optionA"
    },
    {
        question: " Which one of the following also known as Conditional Expression:",
        optionA: "Alternative to if-else",
        optionB: "Switch statement",
        optionC: "if-then-else statement",
        optionD: "immediate if",
        correctOption: "optionD"
    },
    {
        question: "The 'function' and  'var' are known as:",
        optionA: "Keywords",
        optionB: "Data types",
        optionC: "Declaration statements",
        optionD: "Prototypes",
        correctOption: "optionC"
    },
    {
        question: "Which of the following option is used as hexadecimal literal beginning?",
        optionA: "00",
        optionB: "0x",
        optionC: "0X",
        optionD: "Both B and C",
        correctOption: "optionD"
    },
    {
        question: "Which of the following type of a variable is volatile?",
        optionA: "Mutable variable",
        optionB: "Dynamic variable",
        optionC: "Volatile variable",
        optionD: "Immutable variable",
        correctOption: "optionA"
    },
    {
        question: "In the JavaScript, which one of the following is not considered as an error:",
        optionA: "Syntax error",
        optionB: "Missing of semicolons",
        optionC: "Division by zero",
        optionD: "Missing of Bracket",
        correctOption: "optionC"
    },
    {
        question: "Which of the following number object function returns the value of the number?",
        optionA: "toString()",
        optionB: "valueOf()",
        optionC: "toLocaleString()",
        optionD: "toPrecision()",
        correctOption: "optionB"
    },
    {
        question: "In JavaScript, what will be used for calling the function definition expression:",
        optionA: "Function prototype",
        optionB: "Function literal",
        optionC: "Function calling",
        optionD: "Function declaration",
        correctOption: "optionB"
    },
    {
        question: " Which one of the following is an ternary operator:",
        optionA: "?",
        optionB: ":",
        optionC: "-",
        optionD: "%",
        correctOption: "optionA"
    }
    
]

let shuffledQuestions = []
function handleQuestions() { 


    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0 



function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber]  
    const currentQuestionAnswer = currentQuestion.correctOption 
   const options = document.getElementsByName("option");
      let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            
            correctOption = option.labels[0].id
        }
    })

    
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ 
            indexNumber++ 

            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ 
            indexNumber++
            
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}




function handleNextQuestion() {
    checkForAnswer() 
    unCheckRadioButtons()
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            document.getElementById("player-score").innerHTML = playerScore;
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}


function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}


function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}


function handleEndGame() {
    let remark = null
    let remarkColor = null

    
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}


function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}


function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}