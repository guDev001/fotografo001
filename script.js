const scrollRevealOption = {
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
}

// header container 
ScrollReveal().reveal('.header-content h1', {
    ...scrollRevealOption,
})

ScrollReveal().reveal('.header-content p', {
    ...scrollRevealOption,
    delay: 500
})

ScrollReveal().reveal('.header-btn ', {
    ...scrollRevealOption,
    delay: 1000
})

// Information Container
ScrollReveal().reveal('.information-card', {
    ...scrollRevealOption,
    interval: 500
})

// testimonial Container
ScrollReveal().reveal('.testimonial-card', {
    ...scrollRevealOption,
    interval: 500
})

// instructor Container
ScrollReveal().reveal('.instructor-card', {
    ...scrollRevealOption,
    interval: 500
})