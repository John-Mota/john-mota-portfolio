import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.model';
import { PROJECTS_DATA } from '../../data/projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent {
  projects = signal<Project[]>(PROJECTS_DATA);
  
  currentImageIndexMap = new Map<string, number>();
  selectedProject = signal<Project | null>(null);

  getCurrentImage(project: Project): string {
    const index = this.currentImageIndexMap.get(project.id) || 0;
    return project.images[index];
  }

  nextImage(project: Project) {
    const currentIndex = this.currentImageIndexMap.get(project.id) || 0;
    const nextIndex = (currentIndex + 1) % project.images.length;
    this.currentImageIndexMap.set(project.id, nextIndex);
  }

  prevImage(project: Project) {
    const currentIndex = this.currentImageIndexMap.get(project.id) || 0;
    const prevIndex = (currentIndex - 1 + project.images.length) % project.images.length;
    this.currentImageIndexMap.set(project.id, prevIndex);
  }

  openDetails(project: Project) {
    this.selectedProject.set(project);
    document.body.style.overflow = 'hidden'; 
  }

  closeDetails() {
    this.selectedProject.set(null);
    document.body.style.overflow = 'auto'; 
  }
}

