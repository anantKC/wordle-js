document.addEventListener("DOMContentLoaded",() => {
    createSquare()
    const keys = document.querySelectorAll('.keyboard-row button')
    let guessedWords = [[]]
    let availableSpace = 1;
    let word = "dairy"

    function createSquare(){
        const gameBoard = document.getElementById("board");
        for(let index= 0; index<30;index++){
            let square = document.createElement("div")
            square.classList.add("square")
            square.setAttribute("id",index+1)
            gameBoard.appendChild(square);
        }

    }
    
    function getCurrentWordArr(){
        const numberOfGuessedWords = guessedWords.length
        return guessedWords[numberOfGuessedWords-1]
    }

    function updateGuessedWords(letter){
        const currentWordArr = getCurrentWordArr()

        if(currentWordArr && currentWordArr.length < 5){
            currentWordArr.push(letter)
            const availableSpaceEl = document.getElementById(String(availableSpace))
            availableSpace += 1
            availableSpaceEl.textContent  = letter;
        }
    }

    function handleSubmitWord(){
        const currentWordArr = getCurrentWordArr()
        
        if(currentWordArr.length !==5){
            window.alert("Word must be 5 letters")
        }
        const currentWord = currentWordArr.join('')

        if(currentWord === word){
            window.alert("Cool")
        }
        else{
            window.alert("Not cool")
        }

        guessedWords.push([])
    }


    for (let i = 0; i < keys.length; i++) {
        keys[i] = onclick = ({target}) =>{
            const letter = target.getAttribute('data-key');
            if (letter ==="enter"){
                handleSubmitWord()
                return;
            }

            updateGuessedWords(letter)

        }
    }
    
    
})