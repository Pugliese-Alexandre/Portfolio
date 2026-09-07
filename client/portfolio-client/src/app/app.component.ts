import { Component } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PersonalComponent } from './components/personal/personal.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',

  imports: [
    HeaderComponent,
    HeroComponent,
    ProjectsComponent,
    PersonalComponent,
    ContactComponent,
    FooterComponent
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
