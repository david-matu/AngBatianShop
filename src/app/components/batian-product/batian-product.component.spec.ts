import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatianProductComponent } from './batian-product.component';

describe('BatianProductComponent', () => {
  let component: BatianProductComponent;
  let fixture: ComponentFixture<BatianProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatianProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatianProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
