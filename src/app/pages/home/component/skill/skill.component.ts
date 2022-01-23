import { Component, OnInit, Input } from '@angular/core';
import { ISkill } from '../../interfaces/ISkill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input() skills!: ISkill[];

  constructor() { }

  ngOnInit(): void {
  }

}
