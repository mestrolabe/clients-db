import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'validation-errors',
  templateUrl: './validation-errors.component.html',
  styleUrls: ['./validation-errors.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValidationErrorsComponent implements OnInit {

  @Input() errors!: ValidationErrors | null | undefined;
  @Input() errSub!: string;
  @Input() minlen!: string;
  @Input() maxlen!: string;
  @Input() patterns!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
