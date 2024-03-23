import { func3 } from "./card.js"
import { func } from "./image.js"
import { func2 } from "./info.js"

let sectionOne = document.getElementById("sectionOne")

let Obj1 ={
    title: "Portfolio",
    desc: " There is a tide in the affairs of men, Which taken at the flood, leads on to fortune. Omitted, all the voyage of their life is bound in shallows and in miseries. On such a full sea are we now afloat. And we must take the current when it serves, or lose our ventures. ",
    btn:"Contact Me",
    myImg: "img.png"
}

let sectionTwo = document.getElementById("sectionTwo")

let Obj2={
    title2: "Project Completed",
    img1: "img.png",
    desc1: "The creatures outside looked from pig to man, and from man to pig, and from pig to man again; but already it was impossible to say which was which.",
    btn1: "LearnMore",
    img2: "img.png",
    desc2: "And therein lies the whole of man's plight. Human time does not turn in a circle; it runs ahead in a straight line. That is why man cannot be happy: happiness is the longing for repetition.",
    btn2: "Learn More",
    img3: "img.png",
    desc3: "The heart of man is very much like the sea, it has its storms, it has its tides and in its depths it has its pearls too",
    btn3: "Learn More"
}

let {title, desc, btn, myImg} = Obj1
sectionOne.append(func2(title,desc,btn))
sectionOne.append(func(myImg))


let {title2, img1, desc1, btn1, img2, desc2, btn2, img3, desc3, btn3} = Obj2
sectionTwo.append(func3(title2,img1,desc1,btn1,img2,desc2,btn2,img3,desc3,btn3))
