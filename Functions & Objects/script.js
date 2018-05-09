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

function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
            console.log(name + ', can you explain what is UX?')
        }
    }else if(job === 'teacher'){
        return function(name){
            console.log(name + ', what is 2 + 2?')
        }
    }else{
        return function(name){
             console.log('Hello' + name)
        }
    }
}

let teacherQuestion = interviewQuestion('teacher')
teacherQuestion('John')
let ux = interviewQuestion('designer')
ux('Annie')