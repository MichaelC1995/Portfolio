let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20

function moveBackground(event){
    const shapes = document.querySelectorAll(`.shape`);
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    
    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0
        const boolInt = isOdd ? -1 : 1
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

function toggleContrast(){
    if (contrastToggle) {
        contrastToggle = false
            return document.body.classList.remove(`dark-theme`) 
    }
    {
        contrastToggle = !contrastToggle;
        document.body.classList += ` dark-theme`
    }
}

function toggleModal(){
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove(`modal--open`)
    }
    isModalOpen = !isModalOpen;
    document.body.classList += ` modal--open`
}


function contact(){
    event.preventDefault();
    const loading = document.querySelector(`.modal__overlay--loading`);
    const success = document.querySelector(`.modal__overlay--success`);
    loading.classList += ` modal__overlay--visible`
    emailjs
        .sendForm(
            `service_udqtzg3`,
            `template_2f95ho8`,
            event.target,
            `56oTe-GE269i75ZAr`
        ).then(() => {
            loading.classList.remove(`modal__overlay--visible`);
            success.classList += ` modal__overlay--visible`;
        }) .catch(() => {
            loading.classList.remove(`modal__overlay--visible`);
            alert(
                `The email service is temporarily unavaiable. Please contact me directly at m.chatellier@yahoo.com`
            )
        })
}


