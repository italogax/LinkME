function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
    
    // Pegar a tag IMG.
    const img = document.querySelector("#profile img")
    
    // Substituir a imagem
    if (html.classList.contains('light')) {
    // Se tiver light mode, adcionar a imagem light.        
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', 'Imgem Light')
    } else {
        // se tiver sem light mode, manter a imagem normal. 
        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('alt', 'Imagem madrugadão')
    }
    
}

 