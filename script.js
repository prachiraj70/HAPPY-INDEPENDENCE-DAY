document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('.title');
    const flag = document.querySelector('.flag');
    const button = document.getElementById('waveButton');
    const particlesContainer = document.getElementById('particles');

    // Show the title with fade-in effect
    setTimeout(() => {
        title.style.opacity = 1;
    }, 1000);

    // Add event listener to the button to start flag waving
    button.addEventListener('click', () => {
        flag.classList.toggle('waving');
    });

    // Create particles effect
    function createParticles() {
        for (let i = 0; i < 50; i++) {
            let particle = document.createElement('div');
            particle.classList.add('particle');
            let size = Math.random() * 10 + 5;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.top = `${Math.random() * window.innerHeight}px`;
            particle.style.left = `${Math.random() * window.innerWidth}px`;
            particlesContainer.appendChild(particle);

            // Remove the particle after 2 seconds
            setTimeout(() => {
                particlesContainer.removeChild(particle);
            }, 2000);
        }
    }

    setInterval(createParticles, 1000);
});
