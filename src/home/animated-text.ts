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
            display: block;
            color: var(--textColor)
        }`;
    }

    // Render element DOM by returning a `lit-html` template.
    render() {
    return html`
    <div class="container">
        ${this.text.split('').map( (char, i) => html`
            <span class="char ${ i > 0 && i < this.text.length - 1 ? 'transform' : ''}">
                ${char}
            </span>
        `)}
    </div>`;
    }

}