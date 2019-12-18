const question_1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("hello");
    }, 4000)
})

const question_2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("question 2")
    }, 2000)
})

const question_3 = new Promise(function (resolve, reject) {
    resolve("question 3")
}).then(function(response){
    console.log(response);
    
})

const question_4 = function (input) {
    return new Promise(function (resolve, reject) {
        if (input.length > 1) {
            resolve("Pass");
        }
        else {
            reject("Fail")
        }
    })
}

question_2.then(function(response){
    console.log(response);
})

question_4("4").then(function(response){
    console.log(response);
}).catch(function(err){
    console.log(err);
})