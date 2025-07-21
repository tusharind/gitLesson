console.log("hi")
//U ka matlab hota hai untracked to remove this add and commit 

function closure (){
    console.log("hi")
}

function biggerFunction (closure) {
    let here = closure
    here()

}

biggerFunction()

console.log("chal be")

//hahaha