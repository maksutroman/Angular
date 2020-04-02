import { Requirement } from './requirements-model';
import { Injectable, ViewChild, ElementRef } from '@angular/core';

@Injectable()
export class RequirementService {
  requirements: Requirement[] = [
    new Requirement('Java Script', 'Base knowlage of OOP'),
    new Requirement('HTML, JS, CSS,', 'REST API')
  ];

  getRequirement() {
    return this.requirements.slice();
  }
}

export class AddRequirements {
  @ViewChild('skillsInput', { static: false }) skillsInputRef: ElementRef;
  @ViewChild('descInput', { static: false }) descInputRef: ElementRef;
}
