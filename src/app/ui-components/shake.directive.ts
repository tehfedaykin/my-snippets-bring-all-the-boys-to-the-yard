import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[milkshakeShake]'
})
export class ShakeDirective {

  constructor(private el: ElementRef) {
 }

 @HostListener('mouseenter') onMouseEnter() { 
  this.highlight('#FF69B4');
}

@HostListener('mouseleave') onMouseLeave() {
  this.highlight(null);
}

private highlight(color: string) {
  //this.el.nativeElement.style.backgroundColor = color;
  this.el.nativeElement.class = 'isSparkling';
}

}
