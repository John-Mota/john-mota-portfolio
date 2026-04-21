import { Component, signal, computed, HostListener, OnInit, OnDestroy, Inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Project } from '../../models/project.model';
import { PERSONAL_PROJECTS_DATA } from '../../data/personal-projects.data';

@Component({
  selector: 'app-personal-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personal-projects.html',
  styleUrls: ['../projects/projects.scss', './personal-projects.scss']
})
export class PersonalProjectsComponent implements OnInit, OnDestroy {
  originalProjects = PERSONAL_PROJECTS_DATA;
  projects = signal<Project[]>(this.originalProjects);
  
  infiniteProjects = computed(() => {
    const arr = this.projects();
    return [...arr, ...arr, ...arr];
  });

  currentImageIndexMap = new Map<string, number>();
  selectedProject = signal<Project | null>(null);

  // Carousel State
  currentSlide = signal(this.originalProjects.length);
  itemsPerView = signal(3);
  isTransitioning = signal(true);
  
  touchStartX = 0;
  touchEndX = 0;
  autoPlayInterval: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateItemsPerView();
      // Adjust initial slide to middle block
      this.currentSlide.set(this.originalProjects.length);
      this.startAutoPlay();
    }
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  @HostListener('window:resize')
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateItemsPerView();
    }
  }

  updateItemsPerView() {
    const width = window.innerWidth;
    if (width < 768) {
      this.itemsPerView.set(1.2);
    } else {
      // Force 3 items for center mode to look correct on both tablet and desktop
      this.itemsPerView.set(3);
    }
  }

  get centerIndex(): number {
    return this.currentSlide();
  }

  goToSlide(index: number) {
    this.onCarouselInteraction();
    this.isTransitioning.set(true);
    // Move to the exact same relative index in the middle block
    this.currentSlide.set(this.originalProjects.length + index);
  }

  startAutoPlay() {
    if (this.autoPlayInterval) clearInterval(this.autoPlayInterval);
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 4000); // 4 seconds
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  onCarouselInteraction() {
    this.stopAutoPlay();
    // Restart autoplay after 8 seconds of inactivity
    setTimeout(() => {
      if (!this.autoPlayInterval) this.startAutoPlay();
    }, 8000);
  }

  nextSlide() {
    if (this.selectedProject()) return; // pause if modal is open!
    this.isTransitioning.set(true);
    this.currentSlide.update(s => s + 1);
    this.checkBounds();
  }

  prevSlide() {
    this.isTransitioning.set(true);
    this.currentSlide.update(s => s - 1);
    this.checkBounds();
  }

  checkBounds() {
    const len = this.originalProjects.length;
    setTimeout(() => {
      this.isTransitioning.set(false);
      const current = this.currentSlide();
      const normalized = ((current % len) + len) % len; 
      const middleIndex = len + normalized;
      
      if (current !== middleIndex) {
        this.currentSlide.set(middleIndex);
      }
    }, 500); // Wait for CSS transition (0.5s)
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
    this.onCarouselInteraction();
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  handleSwipe() {
    const threshold = 50;
    if (this.touchStartX - this.touchEndX > threshold) {
      this.nextSlide();
    } else if (this.touchEndX - this.touchStartX > threshold) {
      this.prevSlide();
    }
  }

  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.selectedProject()) return;
    
    if (event.key === 'ArrowRight') {
      this.onCarouselInteraction();
      this.nextSlide();
    } else if (event.key === 'ArrowLeft') {
      this.onCarouselInteraction();
      this.prevSlide();
    }
  }

  getCurrentImage(project: Project): string {
    const index = this.currentImageIndexMap.get(project.id) || 0;
    return project.images[index];
  }

  nextImage(project: Project, event?: Event) {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    const currentIndex = this.currentImageIndexMap.get(project.id) || 0;
    const nextIndex = (currentIndex + 1) % project.images.length;
    this.currentImageIndexMap.set(project.id, nextIndex);
  }

  prevImage(project: Project, event?: Event) {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    const currentIndex = this.currentImageIndexMap.get(project.id) || 0;
    const prevIndex = (currentIndex - 1 + project.images.length) % project.images.length;
    this.currentImageIndexMap.set(project.id, prevIndex);
  }

  openDetails(project: Project) {
    this.selectedProject.set(project);
    this.stopAutoPlay();
    document.body.style.overflow = 'hidden'; 
  }

  closeDetails() {
    this.selectedProject.set(null);
    this.startAutoPlay();
    document.body.style.overflow = 'auto'; 
  }
}
