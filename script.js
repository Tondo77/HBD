document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("openBtn");
    const scene1 = document.getElementById("scene1");
    const scene2 = document.getElementById("scene2");
    const transition = document.getElementById("transition");

    btn.addEventListener("click", () => {

        // Lift card
        document.querySelector(".card").style.transform =
        "translateY(-20px) scale(0.97)";

        // Blur background
        document.querySelector(".background").style.filter =
        "blur(6px)";

        // Show white bloom
        setTimeout(() => {

            transition.classList.add("show");

        },300);

        // Switch scene
        setTimeout(()=>{

            scene1.style.display="none";

            scene2.classList.add("active");

        },900);

        // Remove transition
        setTimeout(()=>{

            transition.classList.remove("show");

        },1200);

    });

});

const message =

`Dear Muthallliii ❤️

Aaj Babu ka Birthday hai... 🥹🎉
Aur sach bolun... main bht excited hun.

Zindagi mein bahut log aaye aur gaye... par tere jaisa pagal insaan kabhi nahi mila. 😂 Aur honestly, shayad dobara bhi na mile.

Pata hai, tune hamesha mera saath diya hai. Shayad tujhe kabhi realize bhi na ho ki tune meri life mein kitna positive impact dala hai.

Aur dekh na... jis company ke liye log saalon tak mehnat karte hain, woh mujhe itni unexpectedly mil gayi. Pata nahi luck tha ya tere good vibes. 😄

Tere saath khana, ghoomna, bakchodi karna... sab kuch alag hi level ka fun tha. Aur ek baat toh pakki hai... itna bada foodie main kabhi nahi tha jitna tune bana diya. 😂🍕🌮

Kabhi mood kharab ho, kabhi bore ho jaun, ya bas kisi se baat karne ka mann ho... tu un pehle logon mein se hai jo mere dimaag mein aate hain.

Aur haan... hamari friendship se kuch log jal bhi rahe hain... 👀😂
(Gossippppppppppppp)

Ek baat dil se...

Tu un bahut hi kam logon mein se hai jinko main apni life mein kabhi lose nahi karna chahta.

Thank you for always being there...
Thank you for understanding me...
Thank you for making ordinary days memorable.

Main genuinely lucky hoon ki meri life mein tu hai. ❤️

I hope this birthday brings you endless happiness, success, crazy adventures, lots of food 😋, and everything you've ever wished for.

Happy Birthday, Mutalliii! 🎂🌻💛`;

let index = 0;

function startTyping() {

    const text = document.getElementById("typingText");

    function type() {

        if (index >= message.length) return;

        const char = message.charAt(index);

        text.innerHTML += char;
        text.parentElement.scrollTop = text.parentElement.scrollHeight;
        index++;

        let speed = 60;

        if (char === " ") speed = 15;
        if (char === ",") speed = 100;
        if (char === "." || char === "!" || char === "?") speed = 120;
        if (char === "\n") speed = 220;

        setTimeout(type, speed);
    }

    type();
}

const continueScene2 = document.getElementById("continueScene2");

const scene2 = document.getElementById("scene2");
const scene3 = document.getElementById("scene3");

continueScene2.addEventListener("click", () => {

    scene2.classList.remove("active");

    scene2.style.display = "none";

    scene3.classList.add("active");

    startTyping();

});



const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{threshold:.2});

document.querySelectorAll(".memory-card").forEach(card=>{

    observer.observe(card);

});

const continueScene3 = document.getElementById("continueScene3");

const scene4 = document.getElementById("scene4");

continueScene3.addEventListener("click", () => {

    scene3.classList.remove("active");

    scene3.classList.remove("active");

        setTimeout(()=>{

            scene4.classList.add("active");

        },500);

    scene4.classList.add("active");

});



