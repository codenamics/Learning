// let Car = function(model, horsepower, color){
//     this.model = model;
//     this.horsepower = horsepower;
//     this.color = color;
// }

// Car.prototype.amg = function(amg){
//     if(amg === true){
//         console.log('AMG')
//     }else{
//         console.log('No AMG')
//     }
    
    
// }

// let c200 = new Car('c200', 184, 'black')
// let c43 = new Car('c43', 390, 'black')
// console.log(c200)
// console.log(c43)
// c200.amg(false)
// c43.amg(true)


// let a = 23;
// let b = a;
// a = 46;

// console.log(a)
// console.log(b)

// let years = [1990,1980,1970,1960, 2010]

// function arrayCalc(arr, calc){
//     let arrRes = []
//     arr.forEach(year => {
//         arrRes.push(calc(year))
//     });

//     return arrRes
// }

// function isFullAge(el){
//         return el>=18;
// }

// function maxHeart(el){
//     if(el >= 18 && el <= 81){
//         return Math.round(206.9 - (0.67 * el)) 
//     }else{
//         return -1
//     }   
// }

// function calculateAge(el){
//     return 2016 - el
// }

// let result = arrayCalc(years, calculateAge)
// let fullAge = arrayCalc(result, isFullAge);
// let heart = arrayCalc(result, maxHeart)

// console.log(heart)

// function interviewQuestion(job){
//     return function(name){
//         if (job === 'developer') {
//             console.log(name + ' what is closures?')
//         }else if(job === 'designer'){
//             console.log(name + ' what is UX?')
//         }
//     }

// }

// let teacherQuestion = interviewQuestion('developer')
// teacherQuestion('John')
// let ux = interviewQuestion('designer')
// ux('Annie')

// function retirement(retirementAge){
//     let a = ' years left to retirement'
//     return function(yearofbirth){
//         let age = 2018 - yearofbirth;
//         console.log((retirementAge - age) + a)
//     }
// }

// let poland = retirement(67)
// poland(1989)

// let john = {
//     name: 'John',
//     age: '26',
//     job: 'teacher',
//     presentation: function(style, time){
//         if (style === 'friendly') {
//             console.log(`Hi I am ${this.name}, ${this.age},and I am a ${this.job}. Good ${time}`)
//         }else if(style === 'formal'){
//             console.log(`Hey I'm ${this.name}, ${this.age},and I am a ${this.job}. Good ${time}`)
//         }
//     }
// }

// john.presentation('formal', 'morning')

// let emily = {
//     name: 'emily',
//     age: '28',
//     job: 'designer'
// }

// john.presentation.call(emily, 'formal', 'morning')

let Question = function(question, answers, correct){
        this.question = question;
        this.answers = answers;
        this.correct = correct
}

Question.prototype.displayAnswer = function(){
    console.log(this.question);
    this.answers.forEach((answer, index) => {
        console.log(`${index}: ${answer}`)
    });
}
 
Question.prototype.showAnswer = function(ans){
    if(ans === this.correct){
console.log('Correct answer')
    }else{
        console.log('Wrong answer')
    }
}

let q1 = new Question('Is JS the best language?', ['yes', 'no'], 0)
let q2 = new Question('My name is?', ['Damian', 'Annie', 'Mark'], 0)
let q3 = new Question('What is the color of the sky?', ['red','blue'], 1)

let questions = [q1,q2,q3]

 let n = Math.round(Math.random() * questions.length);

questions[n].displayAnswer()

let answer = parseInt(prompt('Please select answer'))

questions[n].showAnswer(answer)