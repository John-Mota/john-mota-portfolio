import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Stack } from '../../models/stack.model';
import { STACKS_DATA } from '../../data/stacks.data';

@Component({
  selector: 'app-stacks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stacks.html',
  styleUrls: ['./stacks.scss']
})
export class StacksComponent {
  stacks = signal<Stack[]>(STACKS_DATA);
  
  // Group stacks by category
  categories = computed(() => {
    const list = this.stacks();
    const map = new Map<string, Stack[]>();
    
    list.forEach(item => {
      if (!map.has(item.category)) {
        map.set(item.category, []);
      }
      map.get(item.category)?.push(item);
    });
    
    return Array.from(map.entries()).map(([name, items]) => ({ name, items }));
  });
}
