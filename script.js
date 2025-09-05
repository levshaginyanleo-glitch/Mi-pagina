document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animate-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    const copyBtn = document.getElementById('copy-btn');
    const bizumNumber = document.getElementById('bizum-number');

    if (copyBtn && bizumNumber) {
        copyBtn.addEventListener('click', () => {
            const numberToCopy = bizumNumber.textContent.replace(/\s/g, '');
            navigator.clipboard.writeText(numberToCopy).then(() => {
                const originalText = copyBtn.textContent;
                copyBtn.textContent = '¡Copiado!';
                setTimeout(() => {
                    copyBtn.textContent = originalText;
                }, 2000);
            }).catch(err => {
                console.error('Error al copiar el número: ', err);
                alert('No se pudo copiar el número. Por favor, cópialo manualmente.');
            });
        });
    }
});

