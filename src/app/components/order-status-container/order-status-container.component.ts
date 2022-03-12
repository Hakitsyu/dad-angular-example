import { Component, Input, OnInit } from '@angular/core';
import { OrderStatus, Order } from '@/app/models';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'order-status-container',
  templateUrl: './order-status-container.component.html',
  styleUrls: ['./order-status-container.component.scss']
})
export class OrderStatusContainerComponent implements OnInit {
  @Input() orderStatus: OrderStatus = { id: 0, title: '' };
  @Input() orders: Order[] = [];
  @Input() connectedTo: string[] = [];

  constructor() {}
  ngOnInit() {
    setInterval(() => {
      console.log(this.orders);
    }, 1500);
  }

  drop(event: CdkDragDrop<Order[]>) {
    if (event.previousContainer == event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);      
    }
  }
}
