import { Component, Input, OnInit } from '@angular/core';
import { levels } from '../../interfaces/ISkill';

@Component({
  selector: 'app-level-bar',
  templateUrl: './level-bar.component.html',
  styleUrls: ['./level-bar.component.scss'],
})
export class LevelBarComponent implements OnInit {
  @Input() level!: levels;

  constructor() {}

  ngOnInit(): void {}

  getClass(position: number): string {
    let res = 'material-icons ';
    switch (position) {
      case 1: {
        return res + this.getColor();
      }
      case 2: {
        if (
          this.level === levels.BASIC ||
          this.level === levels.MEDIUM ||
          this.level === levels.HIGH ||
          this.level === levels.VERY_HIGH
        ) {
          return res + this.getColor();
        } else {
          return res + 'color-unselected';
        }
      }
      case 3: {
        if (
          this.level === levels.MEDIUM ||
          this.level === levels.HIGH ||
          this.level === levels.VERY_HIGH
        ) {
          return res + this.getColor();
        } else {
          return res + 'color-unselected';
        }
      }
      case 4: {
        if (this.level === levels.HIGH || this.level === levels.VERY_HIGH) {
          return res + this.getColor();
        } else {
          return res + 'color-unselected';
        }
      }
      case 5: {
        if (this.level === levels.VERY_HIGH) {
          return res + this.getColor();
        } else {
          return res + 'color-unselected';
        }
      }
      default: {
        return 'material-icons color-unselected';
      }
    }
  }

  private getColor(): string {
    switch (this.level) {
      case levels.LOW: {
        return 'color-low';
      }
      case levels.BASIC: {
        return 'color-basic';
      }
      case levels.MEDIUM: {
        return 'color-medium';
      }
      case levels.HIGH: {
        return 'color-high';
      }
      case levels.VERY_HIGH: {
        return 'color-very-high';
      }
      default: {
        return 'color-unselected';
      }
    }
  }
}
