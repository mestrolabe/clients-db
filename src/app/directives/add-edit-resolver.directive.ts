import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAddEditResolver]'
})
export class AddEditResolverDirective {

  constructor(public view: ViewContainerRef) { }

}
