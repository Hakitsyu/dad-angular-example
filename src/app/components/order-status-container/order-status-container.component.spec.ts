import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderStatusContainerComponent } from './order-status-container.component';

describe('StatusContainerComponent', () => {
  let component: OrderStatusContainerComponent;
  let fixture: ComponentFixture<OrderStatusContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderStatusContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderStatusContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
