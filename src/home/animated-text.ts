import {LitElement, html, css, customElement, property} from 'lit-element';

@customElement('animated-text')
export class AnimatedText extends LitElement {

    @property({ type: String}) text = 'Anton_Forsberg';
    @property({ type: Number}) visible = 0;

    constructor() {
        super();
      }

    static get styles() {
        return css`
        :host {
            display: inline-flex;
            border-bottom: 1px solid var(--textColor);
        }
        .container {
            display: flex;
            
        }
        .container.animating {
            cursor: pointer;
        }
        .animating span.transform {
            color: var(--accentColor);
        }
        span {
            font-family: monospace;
            display: flex;
            color: var(--textColor);
            font-size: var(--fontSize);
        }
        .transform{
            max-width: 0ch;
            overflow: hidden;
            opacity: 0;
            transition: color 2s ease-out;
        }
        .animate {
            animation: typeIn 0.5s ease-in-out;
            animation-fill-mode: forwards;
        }
        .transform.last {
            max-width: unset;
            opacity: 1;
            background-color: transparent;
        }

        @keyframes typeIn {
            from {background-color: var(--textColor)}
            to {
                opacity: 1;
                background-color: transparent;
                max-width: 1ch;
            }
        }
        `;
        
    }
    startAnimation() {
       this.updateVisible();
    }
    updateVisible() {
        const timeout = Math.max(0.3,Math.random())*800;
        if(this.visible < this.text.length - 1) {
            setTimeout(() => {
                this.visible++;
                this.updateVisible();
            }, timeout)
        }
        
    }

    render() {
        return html`
        <div class="container ${this.visible < this.text.length -1 ? 'animating': ''}"
            @click="${() => this.startAnimation()}">
            ${this.text.split('').map( (char, i) => html`
                <span class="char 
                    ${ this.shouldTransform(i) ? 'transform' : ''}
                    ${ this.shouldTransform(i) && i <= this.visible ? 'animate': ''}
                    ${ this.isLast(i) ? 'last' : ''}">
                    ${ this.isLast(i) &&  this.visible < i ? this.text.length - this.visible - 2 : char }
                </span>
            `)}
        </div>`;
    }

    isLast(index: number): boolean {
        return index === this.text.length - 2;
    }
    shouldTransform(index: number): boolean {
        return index > 0 && index < this.text.length - 1;
    }

}