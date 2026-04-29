;(function($) {

    $(document).ready( function() {
        $(document).on('click', '.header-area .show-menu', function() {
            $(this).toggleClass('active');
            $(".header-area .navbar").toggleClass('active');
        });

        AOS.init({
            duration: 1500,
            once: true,
        })
    });

})(jQuery);

var div = document.createElement("div");
    div.id="preloader",
    div.className="preloader",
    div.innerHTML='<div class="black_wall"></div><div class="loader"></div>',
    document.body.insertBefore(div,document.body.firstChild),window.onload=function() {
    document.getElementById("preloader").classList.add("off")
};

const dot = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');

let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
});

function animate() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';

    requestAnimationFrame(animate);
}
animate();

document.addEventListener("touchstart", createParticles);
document.addEventListener("click", createParticles);

function createParticles(e) {
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const y = e.touches ? e.touches[0].clientY : e.clientY;

    for (let i = 0; i < 8; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");

        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 60;

        particle.style.left = x + "px";
        particle.style.top = y + "px";

        particle.style.setProperty("--dx", Math.cos(angle) * distance);
        particle.style.setProperty("--dy", Math.sin(angle) * distance);

        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 800);
    }
}

if (window.matchMedia("(pointer: coarse)").matches) {
    // don't initialize custom cursor
}