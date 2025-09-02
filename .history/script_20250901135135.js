document.addEventListener('DOMContentLoaded', () => {
    const lottieContainer = document.getElementById('lottie-container');

    const animation = lottie.loadAnimation({
        container: lottieContainer,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'graph_02.json' // Assumes graph_02.json is in the same folder
    });

    animation.addEventListener('DOMLoaded', () => {
        animation.playSegments([0, 69], true);
    });

    const step1Button = document.getElementById('step1');
    const step2Button = document.getElementById('step2');
    const step3Button = document.getElementById('step3');
    const step4Button = document.getElementById('step4');

    step1Button.addEventListener('click', () => {
        animation.playSegments([0, 69], true);
    });

    step2Button.addEventListener('click', () => {
        animation.playSegments([211, 324], true);
    });

    step3Button.addEventListener('click', () => {
        animation.playSegments([400, 486], true);
    });

    step4Button.addEventListener('click', () => {
        animation.playSegments([568, 647], true);
    });

    const lottieContainerComplete = document.getElementById('lottie-container-complete');
    
    const completeAnimation = lottie.loadAnimation({
        container: lottieContainerComplete,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'complete.json'
    });

    completeAnimation.addEventListener('DOMLoaded', () => {
        const svgElement = lottieContainerComplete.querySelector('svg');
        if (svgElement) {
            const width = svgElement.getAttribute('width');
            const height = svgElement.getAttribute('height');
            if (width && height) {
                lottieContainerComplete.style.width = `${width}px`;
                lottieContainerComplete.style.height = `${height}px`;
            }
        }
    });
});
