import { Requirement } from '../requirements-list/requirements-model';

export class Event {
  public name: string;
  public description: string;
  public image: string;
  public requirement: Requirement[];

  constructor(
    name: string,
    description: string,
    image: string,
    requirement: Requirement[]
  ) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.requirement = requirement;
  }
}
