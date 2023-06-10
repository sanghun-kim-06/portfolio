function glitch(element) {
    setInterval(() => {
        const top1 = Math.random() * 100
        const btm1 = Math.random() * 100
        const top2 = Math.random() * 100
        const btm2 = Math.random() * 100

        element.style.setProperty('--t1', '${top1}%')
        element.style.setProperty('--b1', '${btm1}%')
        element.style.setProperty('--t2', '${top2}%')
        element.style.setProperty('--b2', '${btm2}%')
    }, 100)
}

const h1 = document.querySelector('h1')
glitch(h1)