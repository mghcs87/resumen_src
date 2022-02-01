import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ISkill, levels } from '../../interfaces/ISkill';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  skills: ISkill[] = [];
  language: ISkill[] = [];

  constructor(private translate: TranslateService) {
    this.skills = [
      {
        name: 'Android',
        image: 'assets/images/android.png',
        category: 'EDUCATION_LABEL_MOBILE',
        level: levels.VERY_HIGH,
      },
      {
        name: 'iOS',
        image: 'assets/images/ios.png',
        category: 'EDUCATION_LABEL_MOBILE',
        level: levels.HIGH,
      },
      {
        name: 'Ionic',
        image: 'assets/images/ionic.png',
        category: 'EDUCATION_LABEL_MOBILE',
        level: levels.VERY_HIGH,
      },
      {
        name: 'Java',
        image: 'assets/images/java.png',
        category: 'EDUCATION_LABEL_MOBILE',
        level: levels.HIGH,
      },
      {
        name: 'Kotlin',
        image: 'assets/images/kotlin.png',
        category: 'EDUCATION_LABEL_MOBILE',
        level: levels.HIGH,
      },
      {
        name: 'Swift',
        image: 'assets/images/swift.png',
        category: 'EDUCATION_LABEL_MOBILE',
        level: levels.MEDIUM,
      },
      {
        name: 'TypeScript',
        image: 'assets/images/ts.png',
        category: 'EDUCATION_LABEL_WEB',
        level: levels.HIGH,
      },
      {
        name: 'Angular',
        image: 'assets/images/angular.png',
        category: 'EDUCATION_LABEL_WEB',
        level: levels.BASIC,
      },
      {
        name: 'Sass',
        image: 'assets/images/sass.png',
        category: 'EDUCATION_LABEL_WEB',
        level: levels.BASIC,
      },
      {
        name: 'Bootstrap',
        image: 'assets/images/bootstrap.png',
        category: 'EDUCATION_LABEL_WEB',
        level: levels.BASIC,
      },
      {
        name: 'Firebase',
        image: 'assets/images/firebase.png',
        category: 'EDUCATION_LABEL_BACKEND',
        level: levels.BASIC,
      },
      {
        name: 'SQLite',
        image: 'assets/images/sqlite.png',
        category: 'EDUCATION_LABEL_DATABASE',
        level: levels.BASIC,
      },
      {
        name: 'PostgreSQL',
        image: 'assets/images/postgre.png',
        category: 'EDUCATION_LABEL_DATABASE',
        level: levels.BASIC,
      },
      {
        name: 'Git',
        image: 'assets/images/git.png',
        category: 'EDUCATION_LABEL_BASIC',
        level: levels.HIGH,
      },
    ];
    this.language = [
      {
        name: 'EDUCATION_LABEL_SPANISH',
        image: 'assets/images/language.png',
        category: 'EDUCATION_LABEL_BASIC',
        level: levels.VERY_HIGH,
      },
      {
        name: 'EDUCATION_LABEL_ENGLISH',
        image: 'assets/images/language.png',
        category: 'EDUCATION_LABEL_BASIC',
        level: levels.BASIC,
      },
    ];
  }

  ngOnInit(): void {}
}
