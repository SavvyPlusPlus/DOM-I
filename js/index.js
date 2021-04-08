const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//NAVIGATION START
const navAnch = document.querySelectorAll('nav a')

navAnch.forEach((anchor, index) => {
  anchor.textContent = siteContent ['nav']['nav-item-' + (index + 1)]
})
//Alternative
// avAnch[0].textContent = siteContent['nav']['nav-item-1']
// avAnch[1].textContent = siteContent['nav']['nav-item-2']
// avAnch[2].textContent = siteContent['nav']['nav-item-3']
// avAnch[3].textContent = siteContent['nav']['nav-item-4']
// avAnch[4].textContent = siteContent['nav']['nav-item-5']
// avAnch[5].textContent = siteContent['nav']['nav-item-6']
//NAVIGATION END

//HEADER IMAGE
let headImg = document.querySelector("#cta-img");
headImg.setAttribute('src', siteContent["cta"]["img-src"])

//CTA-H1/HEADER ETC
let headOne = document.querySelector("h1")
let headOneSplit = siteContent["cta"]["h1"].split(' ').join('<br>')
headOne.innerHTML = headOneSplit

//Button

let button = document.querySelector(".cta-text button")
button.textContent = siteContent["cta"]["button"]

//Main-Content
let mainH4 = document.querySelectorAll('.text-content h4')
let mainPar = document.querySelectorAll('.text-content p')

mainH4[0].textContent = siteContent['main-content']['features-h4']
mainPar[0].textContent = siteContent['main-content']['features-content']

mainH4[1].textContent = siteContent['main-content']['about-h4']
mainPar[1].textContent = siteContent['main-content']['about-content']

//Middle-Image
let midImg = document.querySelector(".middle-img")
midImg.setAttribute('src', siteContent['main-content']['middle-img-src'])


//Main-Content-Contined
mainH4[2].textContent = siteContent['main-content']['services-h4']
mainPar[2].textContent = siteContent['main-content']['services-content']

mainH4[3].textContent = siteContent['main-content']['product-h4']
mainPar[3].textContent = siteContent['main-content']['product-content']

mainH4[4].textContent = siteContent['main-content']['vision-h4']
mainPar[4].textContent = siteContent['main-content']['vision-content']

//Main-Content-END

//Contact
let contH4 = document.querySelector('.contact h4')
let contPar = document.querySelectorAll('.contact p')

contH4.textContent = siteContent['contact']['contact-h4']

contPar[0].textContent = siteContent['contact']['address']

contPar[1].textContent = siteContent['contact']['phone']

contPar[2].textContent = siteContent['contact']['email']

//Footer 
let footPar = document.querySelector('footer p')
footPar.textContent = siteContent['footer']['copyright']


