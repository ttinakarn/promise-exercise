const question_1 = function (successMessage, errorMessage, shouldReject) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (shouldReject == true) {
                reject(errorMessage)
            }
            else {
                resolve(successMessage)
            }
        }, 1000)
    })
}

question_1("success", "fail", true).then(function(response){
    console.log(response);
}).catch(function(err){
    console.log(err);
})
