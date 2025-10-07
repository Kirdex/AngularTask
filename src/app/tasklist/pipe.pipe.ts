import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusFilter',
  standalone: true
})
export class PipePipe implements PipeTransform {

  transform(tasks: any[], selectedStatus?: string): any[] {
    if (!tasks) return [];
    if (!selectedStatus || selectedStatus === 'All') return tasks;
    
    return tasks.filter(task => 
      task.status && task.status.toLowerCase() === selectedStatus.toLowerCase()
    );
  }

}
