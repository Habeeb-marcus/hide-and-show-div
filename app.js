const setUpEvents = () => {
const main = document.getElementById('main');
const btn = document.getElementById('btn');
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

btn.addEventListener('click', toggleBox)
}



 window.onload = function () {

        setUpEvents()
    }

