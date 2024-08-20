// Smooth scroll untuk navigasi header
document.querySelectorAll('header nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

// Efek header transparan saat digulir
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(0, 123, 255, 0.9)'; // Biru lebih gelap
    } else {
        header.style.backgroundColor = 'rgba(0, 123, 255, 0.7)'; // Biru lebih terang
    }
});
