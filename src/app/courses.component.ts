import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
    {{ text | summary: 10 }}
    <h2>{{ getTitle() }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
    <img [src]="imageUrl" />
    <table>
      <tr>
        <td [attr.colspan]="colSpan"></td>
      </tr>
    </table>

    <button class="btn btn-primary" [class.active]="isActive">Save</button>
    <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Style</button>
    <div (click)="onDivClicked()">
      <button (click)="onSave($event)">Save</button>
    </div>
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    <div>
      {{ course.title | uppercase }} <br />
      {{ course.rating | number: '1.2-2' }} <br />
      {{ course.students | number }} <br />
      {{ course.price | currency: 'INR':true:'3.2-2' }} <br />
      {{ course.releaseDate | date: 'shortDate' }} <br />
    </div>
  `
})
export class CoursesComponent {
  courses;
  imageUrl = 'http://lorempixel.com/400/200';
  colSpan = 2;
  isActive = false;
  email = 'me@example.com';
  course = {
    title: 'The Complete Angular Course',
    rating: 4.56789,
    students: 25000,
    price: 190.25,
    releaseDate: new Date(2016, 3, 1)
  };

  text =
    'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ';

  onKeyUp() {
    console.log(this.email);
  }

  onSave($event) {
    console.log('saved', $event);
    $event.stopPropagation();
  }
  onDivClicked() {
    console.log('div was clicked');
  }
  getTitle() {
    return 'Angular Courses';
  }
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
