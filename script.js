document.addEventListener('DOMContentLoaded', function() {
    // Background music
    const audio = document.getElementById('bg-music');
    audio.volume = 0.25;

    audio.play().catch(() => {
        // If autoplay blocked, play on first click
        const resumeAudio = () => {
            audio.play();
            document.removeEventListener('click', resumeAudio);
        };
        document.addEventListener('click', resumeAudio);
    });

    // Mute button
    const muteBtn = document.getElementById('mute-btn');
    const muteIcon = document.getElementById('mute-icon');
    muteBtn.addEventListener('click', () => {
        audio.muted = !audio.muted;
        muteIcon.textContent = audio.muted ? '🔇' : '🔊';
    });

    // Chapter toggle
    const headings = document.querySelectorAll('.chapter-heading');
    headings.forEach(heading => {
        heading.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isOpen = this.classList.contains('open');

            // Close all
            headings.forEach(h => {
                h.classList.remove('open');
                h.nextElementSibling.style.maxHeight = null;
            });

            if (!isOpen) {
                this.classList.add('open');
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});
