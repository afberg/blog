import {LitElement, html, css, customElement, property} from 'lit-element';

// This decorator defines the element.
@customElement('animated-text')
export class AnimatedText extends LitElement {

    // This decorator creates a property accessor that triggers rendering and
    // an observed attribute.
    @property({ type: String}) text = 'Anton_Forsberg';
    @property({ type: Number}) visible = 0;

    static get styles() {
        return css`
        .container {
            display: flex;
        }
        span {
            font-family: monospace;
            display: flex;
            color: var(--textColor);
        }
        .char {
            animation: typeIn 0.5s ease-in-out;
            animation-fill-mode: forwards;
        }
        .transform{
            max-width: 0ch;
            overflow: hidden;
            opacity: 0;
            background-color: var(--textColor);
            color: white;
        }

        @keyframes typeIn {
            to {
                opacity: 1;
                color: var(--textColor);
                background-color: transparent;
                max-width: 1ch;
            }
        }
        `;
        
    }

    // Render element DOM by returning a `lit-html` template.
    render() {
    return html`
    <div class="container">
        ${this.text.split('').map( (char, i) => html`
        ${this.visible < this.text.length - 1 && i === this.text.length - 1 ? html`
            <span class="number">${this.text.length - 2 - this.visible}</span>` : ''
        }
            <span class="char 
                ${ i > this.visible && i < this.text.length - 1 ? 'transform' : ''}"
                style="animation-delay: ${i*0.5+Math.random() + 's'};">
                ${char}
            </span>
        `)}
    </div>`;
    }

}