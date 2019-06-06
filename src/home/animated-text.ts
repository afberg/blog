import {LitElement, html, css, customElement, property} from 'lit-element';

@customElement('animated-text')
export class AnimatedText extends LitElement {

    @property({ type: String}) text = 'anton_forsberg';
    @property({ type: Number}) visible = 0;

    constructor() {
        super();
      }

    static get styles() {
        return css`
        :host {
            display: inline-flex;
            
        }
        .container {
            display: flex;
        }
        .container:hover .transform.last::before, .started .transform.last::before {
            display: inline-flex;
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
        .started .transform.last::before {
            animation: none;
        }
        .transform.last::before {
            content: "|";
            display: none;
            font-weight: bold;
            margin:0 -4px;
            color: var(--textColor);
            overflow:hidden;
            animation: pulse 1s ease-in-out infinite alternate;
        }

        @keyframes typeIn {
            from {background-color: var(--textColor)}
            to  {
                opacity: 1;
                background-color: transparent;
                max-width: 1ch;
            }
        }
        @keyframes pulse {
            from { opacity: 0 }
            to   { opacity: 1 }
        }
        `;
        
    }
    startAnimation() {
       this.updateVisible();
    }
    updateVisible() {
        const timeout = Math.max(0.3,Math.random())*500;
        if(this.visible < this.text.length - 1) {
            setTimeout(() => {
                this.visible++;
                this.updateVisible();
            }, timeout)
        } else {
            this.dispatchEvent(new CustomEvent('animation-done'));
        }
        
    }

    render() {
        return html`
        <div class="container ${this.visible < this.text.length -1 ? 'animating': '' } ${this.visible > 0 ? 'started': ''}"
            @click="${() => this.startAnimation()}">
            ${this.text.split('').map( (char, i) => html`
                <span class="char 
                    ${ this.shouldTransform(i) ? 'transform' : ''}
                    ${ this.shouldTransform(i) && i <= this.visible ? 'animate': ''}
                    ${ this.isLast(i) ? 'last' : ''}">
                    ${ this.isLast(i) ? this.text.length - this.visible - 2 : char }
                </span>
            `)}
        </div>`;
    }

    isLast(index: number): boolean {
        return index === this.text.length - 2 &&  this.visible < index;
    }
    shouldTransform(index: number): boolean {
        return index > 0 && index < this.text.length - 1;
    }

}