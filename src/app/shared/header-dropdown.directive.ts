import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class HeaderDropdownDirective {
  counter = 0;
  @HostBinding('class.open') isOpen = false;
  @HostBinding('class.hide') isClosed = false;
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    this.counter += 1;
  }
  @HostListener('document:click', ['$event']) toggleClose() {
    const isInside = event.deepPath()[0].toString();
    console.log(isInside);
    if (this.isOpen === true && isInside !== '' && this.counter > 0) {
      this.isOpen = false;
    }
  }
}
