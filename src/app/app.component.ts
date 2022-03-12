import { Order, OrderStatus, OrdersMemory } from './models/order';
import { Component, OnInit } from '@angular/core';
import fakeOrderStatusList from './data/fake-order-status-list';
import fakeOrderList from './data/fake-order-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  orderStatusList: OrderStatus[] = [];
  orderList: Order[] = [];
  connectedTo: string[] = [];

  memory: OrdersMemory[] = [];

  constructor() {
    this.orderStatusList = fakeOrderStatusList();
    this.orderList = fakeOrderList();
    this.connectedTo = this.getConnectedTo();

    this.initMemory();
  }

  ngOnInit() {}

  initMemory() {
    this.orderStatusList.forEach(orderStatus => {
      const memory = <OrdersMemory> {
        status: orderStatus,
        orders: this.filterOrderList(orderStatus)
      }

      this.memory.push(memory);
    });
  }

  filterOrderList(orderStatus: OrderStatus) {
    return this.orderList.filter(order => order.status === orderStatus.id);
  }

  getConnectedTo() {
    return this.orderStatusList.map(orderStatus => orderStatus.id.toString());
  }
}