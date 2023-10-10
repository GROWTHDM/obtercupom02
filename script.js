const btn = document.getElementById('toNext');
const video02 = document.getElementById('video02');
const video = document.getElementById('video01');
const video03 = document.getElementById('video')
const btn2 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const video04 = document.getElementById('video03');


setTimeout(() => {
    btn.style.display = 'block';
}, 120000);

setTimeout(() => {
    btn2.style.display = 'block'
}, 196000);

setTimeout(() => {
    btn4.style.display = 'block'
}, 255000)

btn.onclick = () => {
    btn.style.display = 'none';
    video03.classList.add('active');
    video02.classList.add('active2');
    video02.style.display = 'block';
    setTimeout(() => {
        video.style.display = 'none';
        video.muted = true;
    }, 1000)
}

btn2.onclick = () => {
    btn2.style.display = 'none';
    video04.classList.add('active2');
    video02.classList.add('active3');
    video04.style.display = 'block';
    setTimeout(() => {
        video02.style.display = 'none';
    }, 1000)
}

btn4.onclick = () => {
    window.open("https://go.perfectpay.com.br/PPU38CN3RF8/?src=funil-iza-video")
}

