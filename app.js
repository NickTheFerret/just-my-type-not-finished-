let sentences = ['I am extremely hungry and need food as soon as possible. rip', 'Help me i have McFallen', 'Video Gamers are superior in every way, nerds', 'I can type at a moderate speed, unless it is my name', 'This is just my typing tho'];
let letterCtr = 0
let sentenceCtr = 0
let sentenceDisplay = $("#sentence")
let targetLetter = $("#target-letter")

sentenceDisplay.text(sentences[sentenceCtr])


$(document).ready(function () {
    const keyboardUpperContainer = $("#keyboard-upper-container")
    const keyboardLowerContainer = $("#keyboard-lower-container")
    keyboardUpperContainer.hide()

    $(document).keydown(function (e) {
        if (e.shiftKey) {
            keyboardLowerContainer.hide()
            keyboardUpperContainer.show()
        }

        //checks if user pressed the correct key
        if (e.key === sentences[sentenceCtr][letterCtr]) {
            letterCtr++
            targetLetter.text(sentences[sentenceCtr][letterCtr])

            if (sentences[sentenceCtr][letterCtr] === " ") {

                targetLetter.text("Space")
            }
        }
    })

    $(document).keypress(function (e) {

        $(`#${e.which}`).css("background-color", "yellow")
    })

    $(document).keyup(function (e) {
        let asciiCode = e.key.charCodeAt(0);   //remember this
        if (e.which == 16) {
            keyboardLowerContainer.show()
            keyboardUpperContainer.hide()

        }

        //if user gets to end of sentence
        if (letterCtr === sentences[sentenceCtr].length) {
            letterCtr = 0
            sentenceCtr++
            sentenceDisplay.text(sentences[sentenceCtr])
            targetLetter.text(sentences[sentenceCtr][letterCtr])
        }
        $(`#${asciiCode}`).css("background-color", "#f5f5f5")
    })

});






