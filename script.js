let slides = document.querySelectorAll('.slides img'),
    currentImgIndex = 0

const nextImage = () => {
    slides[currentImgIndex].classList.remove('selected')

    currentImgIndex++

    if(currentImgIndex >= slides.length) {
        currentImgIndex = 0
    }

    slides[currentImgIndex].classList.add('selected')
}

setInterval(() => {
    nextImage()
}, 2000)