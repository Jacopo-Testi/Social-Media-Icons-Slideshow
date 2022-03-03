const slideshow = document.querySelector('.slideshow')

// Slide the icons each 3s
setInterval(() => {

    const firstIcon = slideshow.firstElementChild

    // Adding the fading effect
    firstIcon.classList.add('faded-out')

    const thirdIcon = slideshow.children[3]

    // Make the third icon bright
    thirdIcon.classList.add('light')

    // Remove the light class to all the icon that are not the third
    thirdIcon.previousElementSibling.classList.remove('light')

    // Setting timeout of half second before removing the element 
    setTimeout(() => {
        // Remove the first icon of the slideshow from the wrapper
        slideshow.removeChild(firstIcon)

        // Add the icon removed as the last one of the slideshow
        slideshow.appendChild(firstIcon)

        // Setting timeout of half second before removing the fade effect
        setTimeout(() => {
            firstIcon.classList.remove('faded-out')
        }, 500)
    }, 500)
}, 3000)