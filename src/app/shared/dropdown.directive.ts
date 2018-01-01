import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
     selector: '[appDropdownDirective]',
})
export class DropdownDirective {

    @HostBinding('class.open') toggleDown  = false;
    @HostListener('click') toggleDropdown(){
          this.toggleDown = !this.toggleDown;
    }
}