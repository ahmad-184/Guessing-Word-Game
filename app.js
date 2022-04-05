
function myGame() {
    const btnRunGame = document.querySelector(".RunGame")
    const GameRound = document.querySelector(".GameRoundZero")
    const GameGuesses = document.querySelector(".GameGuessesZero")
    const bgOverlay = document.querySelector(".overlay")
    const Container = document.querySelector(".Container")
    const button = document.getElementById("guessBTN")
    const textGuess = document.querySelector(".textGuess")
    const input = document.querySelector(".input")
    const message = document.querySelector(".Pmessage")
    const GameWinZero = document.querySelector(".GameWinZero")
    const WinContent = document.querySelector(".WinContent")
    let ScoreGamer = document.querySelector(".GameScoreZero")
    const messageContainer = document.querySelector(".messageContainer")
    const GuideContainer = document.querySelector(".GuideContainer")
    const CloseButton = document.querySelector(".Closecontainer")
    const OffBTN = document.querySelector(".OffBTN")
    const Offcontainer = document.querySelector(".Offcontainer")
    const YesBtn = document.querySelector(".YesBtn")
    const CancelBtn = document.querySelector(".CancelBtn")
    const main = document.querySelector(".main")
    const EndGameOverlay = document.querySelector(".EndGameOverlay")
    const pEnd = document.getElementsByClassName("pEnd")
    const rounds = document.querySelector(".Rounds")
    const wins = document.querySelector(".Wins")
    const guesses = document.querySelector(".Guesses")
    const scores = document.querySelector(".Scores")
    const containerEndGame = document.querySelector(".container")
    let zeroRound = 0
    let zeroWin = 0
    let gusses = 0
    let scoreGamer = 0
    let gamePlay = false
    const wordShower = document.querySelector(".anotherWord")
    // const myArray = ["array","const","javascript","css","html","horizon","zero","forbidden","west","johle","fuck"]
    const myArray = ["کشور","عکس","بازی","کافی","زمان","عالی","اسم","سلام","فاک","لباس","بازار"
    ,"ارزش","نماز","مکه","امروز","دیروز","خواب","راز","دختر","پسر","مرد","زن"]
    let scramble = ""
    let scarmbled = ""

    
    btnRunGame.addEventListener("click", () => {
        if (!gamePlay) {
            gamePlay = true
            myGrid()
            animatFade()
            scramble = myWord()
            scarmbled  = RandomSplit(scramble.split(""))
            textGuess.innerHTML = scarmbled
            textGuess.style.color ="#bddb2a"
            wordShower.addEventListener("click",AnotherWord)
            button.addEventListener("click",clickBtn)
            funcFadeGuide()
        } else {}
    })

    function AnotherWord() {
        if (scoreGamer >= 2) {
            textGuess.innerHTML = scramble
            textGuess.style.color ="#44e644"
            console.log(scramble)
            scoreGamer--
            scoreGamer--
            scoreGamer--
            scoreGamer--
            ScoreGamer.innerHTML = scoreGamer
        } else {
            const messageScore = document.querySelector(".messageScoreContainer")
            messageScore.style.display="block"
            setTimeout(() => {
                messageScore.style.opacity="1"
            }, 100)
            setTimeout(() => {
                messageScore.style.opacity="0"
            }, 3000)
            setTimeout(() => {
                messageScore.style.display="none"
            }, 3300)
        }
    }

    const myGrid = () => {
        btnRunGame.style.zIndex = "0"
        bgOverlay.style.zIndex = "1111"
        bgOverlay.style.clipPath = "circle(0%)"
        zeroRound++
        GameRound.innerHTML = zeroRound
        btnRunGame.innerHTML = `Next`
        btnRunGame.style.display="none"
        btnRunGame.classList.add("active")
        Container.style.display = "block"
        setTimeout(() => {
            Container.style.opacity = "1"
        },500)
    }

    const myWord = () => {
        const RandomNumber = Math.floor(Math.random() * myArray.length)
        const RandomWord = myArray[RandomNumber]
        return RandomWord
    }

    const RandomSplit = (arr) => {
        for (let i = arr.length - 1  ; i > 0 ; i--) {
            let temp = arr[i]
            let num = Math.floor(Math.random() * (i+1))
            arr[i] = arr[num]
            arr[num] = temp
        }
        return arr
    }

    function clickBtn() {
        if (input.value === scramble) {
            ifFunc()
            End()
        }else if (input.value == "") {
            EmptyFunc()
        } else {
            gusses++
            failFunc()
        }
        GameGuesses.innerHTML = gusses
        ScoreGamer.innerHTML = scoreGamer
    }
    
    function ifFunc() {
        zeroWin++
        gusses++
        scoreGamer++
        scoreGamer++
        console.log(scoreGamer);
        btnRunGame.style.display= "block"
        btnRunGame.style.opacity= "0"
        btnRunGame.style.bottom = "2rem"
        GameWinZero.innerHTML = zeroWin
        WinContent.style.display= "flex"
        WinContent.style.zIndex= "2"
        setTimeout(() => {
            WinContent.style.opacity="1"
        },100)
        setTimeout(() => {
            btnRunGame.style.opacity= "1"
            btnRunGame.style.zIndex= "11"
        }, 300)
    }

    function EmptyFunc() {
        const messageP = document.createElement("p")
        messageP.classList.add("Pmessage")
        messageP.style.color = "rgb(255, 223, 95)"
        messageP.innerHTML = `Field is Empty`
        messageContainer.appendChild(messageP)
        setTimeout(() => {
            message.style.opacity = "0"
        }, 2000)
        setTimeout(() => {
            message.style.display="none"
            messageContainer.removeChild(messageP)
        }, 2000)
    }

    function failFunc() {
        const messageP = document.createElement("p")
        messageP.classList.add("Pmessage")
        messageP.style.color = "rgb(255, 95, 95)"
        messageP.innerHTML = `Wrong, please try again`
        messageContainer.appendChild(messageP)
        wordShower.classList.add("animatin")
        setTimeout(() => {
            message.style.opacity = "0"
        }, 3000)
        setTimeout(() => {
            message.style.display="none"
            messageContainer.removeChild(messageP)
        }, 3000)
        setTimeout(() => {
            wordShower.classList.remove("animatin")
        }, 3000)
    }

    function animatFade() {
        WinContent.style.opacity="0"
        btnRunGame.style.opacity="0"
        setTimeout(() => {
            WinContent.style.display="none"
            btnRunGame.style.zIndex="0"
        }, 500)
    }

    const funcFadeGuide = () => {
        CloseButton.addEventListener("click",() => {
            GuideContainer.style.opacity = "0"
            setTimeout(() => {
                GuideContainer.style.display = "none"
            }, 600)
        })
    }

    const End = () => {
        input.value = ""
        gamePlay = false
    }

    const EndGame = () => {
        OffBTN.addEventListener("click", () => {
            Offcontainer.style.clipPath = " circle(100% at 0px 196px)"
        })
        CancelBtn.addEventListener("click", () => {
            Offcontainer.style.clipPath = " circle(0% at 0px 195px)"
        })
        YesBtn.addEventListener("click", () => {
            ShowContainer()
            ShowAchivements()
        })
    }
    EndGame()

    const ShowContainer = () => {
        main.style.opacity= "0"
        setTimeout(() => {
            EndGameOverlay.style.display ="block"
        }, 100)
        setTimeout(() => {
            main.style.display = "none"
            EndGameOverlay.style.opacity ="1"
        }, 200)
        setTimeout(() => {
            containerEndGame.style.height ="83%"
        }, 700)
    }

    const ShowAchivements = () => {
        const SpansEnd = [rounds,wins,guesses,scores]
        const SpansEndZero = [zeroRound,zeroWin,gusses,scoreGamer]
        const Timer = [1,2,3,4]

        setTimeout(() => {
            for( let i = 0 ; i < pEnd.length ; i++) {
                pEnd[i].style.opacity = "1"
                pEnd[i].style.transitionDelay = Timer[i] + "s"
            }
        }, 500)

        setTimeout(() => {
            let zero = 0
            setInterval(() => {
                if(zero == SpansEndZero[0]) {
                    clearInterval(this)
                } else {
                    zero++
                    SpansEnd[0].innerHTML = zero
                }
            },70)
        }, 1900)

        setTimeout(() => {
            let zero = 0
            setInterval(() => {
                if(zero == SpansEndZero[1]) {
                    clearInterval(this)
                } else {
                    zero++
                    SpansEnd[1].innerHTML = zero
                }
            },70)
        }, 2900)

        setTimeout(() => {
            let zero = 0
            setInterval(() => {
                if(zero == SpansEndZero[2]) {
                    clearInterval(this)
                } else {
                    zero++
                    SpansEnd[2].innerHTML = zero
                }
            },20)
        }, 3800)

        setTimeout(() => {
            let zero = 0
            setInterval(() => {
                if(zero == SpansEndZero[3]) {
                    clearInterval(this)
                } else {
                    zero++
                    SpansEnd[3].innerHTML = zero
                }
            },70)
        }, 4900)
    }
}

myGame()