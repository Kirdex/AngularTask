import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
  standalone: true,
})
export class HoverHighlightDirective {
  @Input('appHoverHighlight') hoverColor = 'blue';

  private originalBackground = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

@HostListener('mouseleave') onLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.originalBackground);
  }
}
