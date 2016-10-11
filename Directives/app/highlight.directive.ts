import { Directive, ElementRef, Input, Renderer, HostListener } from '@angular/core';
@Directive({ selector: '[myHighlight]' }) // css query https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors
export class HighlightDirective {
    private _defaultColor = "red";
    @Input('myHighlight') 
    highlightColor:string;
    @Input() set defaultColor(colorName: string){
        this._defaultColor = colorName || this._defaultColor;
    }
    constructor(
    private el: ElementRef,
    private renderer: Renderer) {
        //renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
    }
    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightColor || this._defaultColor);
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }
    private highlight(color: string) {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
    }
}