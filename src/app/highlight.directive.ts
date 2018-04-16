import { Directive, ElementRef, HostListener, HostBinding} from '@angular/core';



@Directive({
  selector: '[hoverSelect]'
})
export class HighlightDirective {
 
    @HostBinding('class.hover') isHovered: boolean = false;
    @HostBinding('class.selectHover') isHover: boolean = false;
    @HostListener('mouseenter') onMouseEnter() {
        this.isHovered=true;
        this.isHover=true;
    }   
    @HostListener('mouseleave') onMouseLeave() {
        this.isHovered=null;
        this.isHover=null;
          }

   /* @HostBinding('class.selectHover') isHover:boolean=false;
    @HostListener('mouseenter') onMouseEnter() {
        this.isHovered=true;
    }   
    @HostListener('mouseleave') onMouseLeave() {
        this.isHovered=null;
          }*/
}
