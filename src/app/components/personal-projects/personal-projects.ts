import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.model';
import { PERSONAL_PROJECTS_DATA } from '../../data/personal-projects.data';

@Component({
  selector: 'app-personal-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personal-projects.html',
  styleUrls: ['./personal-projects.scss']
})
export class PersonalProjectsComponent {
  personalProjects = signal<Project[]>(PERSONAL_PROJECTS_DATA);
}
