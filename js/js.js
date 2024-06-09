

//פונקציה למנגינת רקע לדף המקשר//
function startGamePlayAudio() {
    let audio = new Audio('../marioSound/car1.mp3');
    audio.play();
}

//פונקציה למנגינה להשוואת הכרטיסים//
function compereAudio() {
    let audio = new Audio('../marioSound/card2.mp3');
    audio.play();
}
//פונקציה לקטע קול למציאת זוג נכון
function RightPearAudio() {
    let audio = new Audio('../marioSound/mmm.mp3');
    audio.play();
}

//פונקציה למנגינה לניצחון //
function winAudio() {
    let audio = new Audio('../marioSound/win.mp3');
    audio.play();
}

// //פונקציה שמרפרשת
// function Refresh() {
//     crateBord();
//     window.location.reload();
// }


//פונקציה שמשווה בין הכרטיסים//
function compereCard() {
    for (let i = 0; i < click.length; i++) {
        if (click[i] == 1) {
            a = start[i]
            a1 = i
            c = i
            break
        }
    }
    for (let i = c + 1; i < click.length; i++) {
        if (click[i] == 1) {
            b = start[i]
            b1 = i
            break
        }
    }
  

    if (a == b) {
        boo[a1] = 1
        boo[b1] = 1
        RightPearAudio();
    }
    else{
    compereAudio();
    }

    click[a1] = 0
    click[b1] = 0
    for (let i = 0; i < 10; i++) {
        if (boo[i] != 1) {
            setTimeout(() => {
                let element = document.getElementById(i);
                element.style.backgroundImage = 'url("../mario/f1.jpg")';
                click[i] = 0;
            }, 1230)
        }
    }
    flag = true;
}

let i = 0, a, b, a1, b1, c, j = 0;
let flag = true;

crateBord();


//פונקציה שיוצרת את כרטיסי המשחק//
function crateBord() {

    for (let i = 0; i < 10; i++) {
        const element = document.createElement("button");
        element.setAttribute("id", i);
        element.setAttribute("class", "card");
        element.style.backgroundImage = 'url("../mario/f1.jpg")';
        element.style.width = "290px";
        element.style.height = "190px";
        element.style.marginTop = "45px";
        element.style.marginBottom = "30px";
        element.style.marginRight = "20px";
        element.style.marginLeft = "20px";
        document.getElementById("game").appendChild(element);
        
        element.addEventListener("click", function () {
            element.style.backgroundImage = start[i];
            click[i] = 1;

            flag = !flag;
            //לחיצה שניה
            if (flag) {
            //משווה בין הכרטיסים//
                compereCard();
            }
            let count = 0;
            for (let x = 0; x < pic.length; x++) {
                let element = document.getElementById(x);
                if (element.style.backgroundImage != 'url("../mario/f1.jpg")') {
                    count++;
                }
                if (count == 10) {
                   
                    winAudio();
                    document.getElementById('game').style.display = 'none';
                    const background = document.getElementById("mwin1");
                    background.style.display = "block";
                    let back = document.getElementById("mwin");
                    back.style.display = "block";
                    background.style.backgroundImage = "cover";
                    document.getElementById('h3').style.display = 'none';
                    for (let x = 0; x < pic.length; x++) {
                        let element = document.getElementById(x);
                        element.style.display = "none";
                    }
                }
            }
        });
    }
}

let click = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let boo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const pic = ['url("../mario/p2.jpg")', 'url("../mario/p3.jpg")', 'url("../mario/p4.png")', 'url("../mario/p5.jpg")', 'url("../mario/p6.jpg")', 'url("../mario/p2.jpg")', 'url("../mario/p3.jpg")', 'url("../mario/p4.png")', 'url("../mario/p5.jpg")', 'url("../mario/p6.jpg")'];
let start = pic;




//פונקציה שמגרילה בצורה רנדומלית//
function startGame() {   
    
    flag = true;
    let game = document.getElementById('game');
    game.innerHTML = "";
    game.style.display = 'block'
    // startGamePlayAudio();

    let background1 = document.getElementById("mwin1");
    background1.style.display = "none";
    let back = document.getElementById("mwin");
    back.style.display = "none";

    let background = document.getElementById("bodyGame");
    background.style.backgroundImage = 'url("../background/s11.png")';
    background.style.backgroundImage = "cover";

    crateBord();

    for (let i = 0; i < 10; i++) {
        let element = document.getElementById(i);
        element.style.backgroundImage = 'url("../mario/f1.jpg")';
    }
    click = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    boo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let bool = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let temp = [null, null, null, null, null, null, null, null, null, null];
    let m = 0;
    let j = 0, y = 0;

    while (j < pic.length) {
        let element = pic[m];
        let randomNumber = Math.floor(Math.random() * 10);
        if (bool[randomNumber] == 1) {
            while (bool[randomNumber] == 1) {
                randomNumber++;
                if (randomNumber == 10) {
                    randomNumber = 0;
                    y++
                }
                if (y > 3) {
                    break
                }
            }
        }
        temp[randomNumber] = element;
        bool[randomNumber] = 1;
        m++;
        j++;
    }
    // Refresh();
    start = temp
}







