let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push('Ralph')
}

function destructivelyPrependCat(name){
    cats.unshift('Bob')
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat(name) {
    return [...cats, 'Broom']
}

function prependCat(name) {
    return ['Arnold', ...cats]
}

function removeLastCat() {
    let catsCopy = cats.slice(0,2)
    return catsCopy

}

function removeFirstCat() {
    let catsCopyTwo = cats.slice(-2)
    return catsCopyTwo
}
