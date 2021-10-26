// const setUpEvents = () => {
const main = document.getElementById('main');
const btn = document.getElementById('btn');
var color = ["green", "red", "blue", "tomato", "orange", "brown", "gray"];
let counter = 0;

const toggleBox = () => {
        // console.log('show and hide me');
    if(main.classList.contains('open')){
        main.classList.remove('open')
        btn.innerHTML = "show more"       
    } else {
        main.classList.add('open')
        btn.innerHTML = "show less"
    }
}

const changeColor = () => {

    if(counter >= color.length) {
        counter = 0
    }
    main.style.backgroundColor = color[counter];
    counter++;
}

var timer = setInterval(changeColor, 3000);

// console.log(counter);

const stopColor = () => {
    if(main.classList.contains('open')){
    clearInterval(timer)
    } else {
       changeColor()
       setInterval(changeColor, 3000)
    }
}


btn.addEventListener('click', toggleBox)
btn.addEventListener('click', stopColor)
// }



//  window.onload = function () {
//         setUpEvents()
//     }

