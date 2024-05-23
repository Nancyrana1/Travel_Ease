// const sliderImgs = ["image1.jpg", "image2.jpg", "image3.jpeg", "image4.jpeg", "image5.jpeg", "image6.jpeg","image7.jpeg","image8.jpeg","image9.jpeg","image10.jpeg","image11.jpeg","image12.jpeg"];
let sliderImage = document.querySelector('.background-image');
let sliderGrids = [...document.querySelectorAll('.grid-item')];

let currentImage = 0;

setInterval(() => {
    changeSliderImage();
}, 5000);

const changeSliderImage = () => {
    sliderGrids.map((gridItem, index) => {
        setTimeout(() => {
            gridItem.classList.remove('hide');

            setTimeout(() => {

                if(index == sliderGrids.length - 1){
                    if(currentImage >= sliderImgs.length - 1){
                        currentImage = 0;
                    } else{
                        currentImage++;
                    }

                    sliderImage.src = `img/${sliderImgs[currentImage]}`;

                    sliderGrids.map((item, i) => {
                        setTimeout(() => {
                            item.classList.add('hide')
                        }, i * 100);
                    })

                }

            }, 100);

        }, index * 100);
    })
}

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(scrollY >= 188){
        navbar.classList.add('bg');
    } else{
        navbar.classList.remove('bg')
    }
})









// google translator

    function googleTranslateElementInit() {
        new google.translate.TranslateElement(
        {pageLanguage:'en'},
        'google_translate_element'
        );
            
        }
    

<script type="text/javascript" src="https://translate.google.com/translate_element.js?cb=googleTranslateElementInit" ></script>


// testimonials

const testimonials = [
    {
        name: "Cherise G",
        photoUrl:
            "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
        text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.",
    },
    {
        name: "Rosetta Q",
        photoUrl:
            "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
        text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.",
    },
    {
        name: "Constantine V",
        photoUrl:
            "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
        text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
    },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
    const { name, photoUrl, text } = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++;
    if (idx === testimonials.length) {
        idx = 0;
    }
    setTimeout(() => {
        updateTestimonial();
    }, 6000);
}