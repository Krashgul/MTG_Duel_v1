 //touch
    // Fullscreen
    const goFS = document.querySelector(".goFS");
    goFS.addEventListener("dblclick", () => {
      if (document.fullscreenElement) {
        document.exitFullscreen()
          .then(() => console.log("Document Exited form Full screen mode"))
          .catch((err) => console.error(err))
      } else {
        document.documentElement.requestFullscreen()
      }
    });

    // burger menu
    const burger = document.querySelector(".burger");
    const nav = document.querySelector("nav");

    // background Position
    function bgP11() {
      document.querySelector(".bgP1").style.backgroundPosition = "0 0";
    }

    function bgP12() {
      document.querySelector(".bgP1").style.backgroundPosition = "25% 0";
    }

    function bgP13() {
      document.querySelector(".bgP1").style.backgroundPosition = "50% 0";
    }

    function bgP14() {
      document.querySelector(".bgP1").style.backgroundPosition = "73% 0";
    }

    function bgP15() {
      document.querySelector(".bgP1").style.backgroundPosition = "100% 0";
    }

    function bgP21() {
      document.querySelector(".bgP2").style.backgroundPosition = "0 0";
    }

    function bgP22() {
      document.querySelector(".bgP2").style.backgroundPosition = "25% 0";
    }

    function bgP23() {
      document.querySelector(".bgP2").style.backgroundPosition = "50% 0";
    }

    function bgP24() {
      document.querySelector(".bgP2").style.backgroundPosition = "73% 0";
    }

    function bgP25() {
      document.querySelector(".bgP2").style.backgroundPosition = "100% 0";
    }


    // player
    const box1 = document.querySelector(".box1");
    const box2 = document.querySelector(".box2");
    const boxN1 = document.querySelector(".boxN1");
    const boxN2 = document.querySelector(".boxN2");
    const Life1 = document.querySelector(".ONE.LifeDisp");
    const life1plus1 = document.querySelector(".ONE.plus1");
    const life1min1 = document.querySelector(".ONE.min1");
    const lifeLink1 = document.querySelector(".ONE.LifeLink");
    const Life2 = document.querySelector(".TWO.LifeDisp");
    const life2plus1 = document.querySelector(".TWO.plus1");
    const life2min1 = document.querySelector(".TWO.min1");
    const lifeLink2 = document.querySelector(".TWO.LifeLink");
    const rottator1 = document.querySelector(".rottator1");
    const rottator2 = document.querySelector(".rottator2");
    const LifeTotal20 = document.querySelector(".LifeTotal20");
    const LifeTotal40 = document.querySelector(".LifeTotal40");

    let counter1 = 20;
    let counter2 = 20;
    let pcounter1 = 0;
    let pcounter2 = 0;

    burger.addEventListener("click", () => {
      burger.classList.toggle("on");
      nav.classList.toggle("on");
      LifeTotal20.classList.toggle("on");
      LifeTotal40.classList.toggle("on");
      life1plus1.classList.toggle("on");
      life2plus1.classList.toggle("on");
      life1min1.classList.toggle("on");
      life2min1.classList.toggle("on");
      goFS.classList.toggle("on");
    })

    // player1
    rottator1.addEventListener("dblclick", () => {
      box1.classList.toggle("rot180");
      boxN1.classList.toggle("rot180");
    })
    life1plus1.addEventListener("click", () => {
      counter1 = counter1 + 1;
      Life1.textContent = counter1;
    })
    life1min1.addEventListener("click", () => {
      counter1 = counter1 - 1;
      Life1.textContent = counter1;
    })
    lifeLink1.addEventListener("click", () => {
      counter1 = counter1 + 1;
      Life1.textContent = counter1;
      counter2 = counter2 - 1;
      Life2.textContent = counter2;
    })
    // player2
    rottator2.addEventListener("dblclick", () => {
      box2.classList.toggle("rot180");
      boxN2.classList.toggle("rot180");
    })
    life2plus1.addEventListener("click", () => {
      counter2 = counter2 + 1;
      Life2.textContent = counter2;
    })
    life2min1.addEventListener("click", () => {
      counter2 = counter2 - 1;
      Life2.textContent = counter2;
    })
    lifeLink2.addEventListener("click", () => {
      counter1 = counter1 - 1;
      Life1.textContent = counter1;
      counter2 = counter2 + 1;
      Life2.textContent = counter2;
    })
    //Life Total
    LifeTotal20.addEventListener("dblclick", () => {
      counter1 = 20;
      Life1.textContent = counter1;
      counter2 = 20;
      Life2.textContent = counter2;
    })
    LifeTotal40.addEventListener("dblclick", () => {
      counter1 = 40;
      Life1.textContent = counter1;
      counter2 = 40;
      Life2.textContent = counter2;
    })