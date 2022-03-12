import { Order } from '@/app/models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @Input() order: Order = { id: 0, date: '', status: 0 };

  constructor() {}

  ngOnInit() {}

}
