import { Component, OnInit } from '@angular/core';
import { Developer } from '../common/developer.model';
import { Skill } from '../common/skill.model';
@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
  public developer = new Developer("Marley","Bob",45,"Homme","I'm happy",[
    new Skill("Angular","https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/220px-Angular_full_color_logo.svg.png","https://angular.io"),
    new Skill("Javascript","https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/262px-Unofficial_JavaScript_logo_2.svg.png","https://fr.wikipedia.org/wiki/JavaScript")
  ])
  constructor() { }

  ngOnInit() {
  }

}
