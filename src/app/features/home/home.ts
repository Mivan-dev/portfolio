import { Component } from '@angular/core';
import { Contact } from "../sections/contact/contact";
import { Hero } from "../sections/hero/hero";
import { About } from "../sections/about/about";
import { Skills } from "../sections/skills/skills";
import { Projects } from '../sections/projects/projects';

@Component({
  selector: 'app-home',
  imports: [Contact, Hero, About, Skills, Projects],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
