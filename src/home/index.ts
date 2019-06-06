import './home.css';
import './animated-text';

const animatedText = document.querySelector('animated-text');
animatedText.addEventListener('animation-done', () => {
    (animatedText as HTMLElement).style.borderBottomColor = 'rgba(0,0,0,0)'; 
});