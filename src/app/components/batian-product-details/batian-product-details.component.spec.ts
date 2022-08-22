import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatianProductDetailsComponent } from './batian-product-details.component';

describe('BatianProductDetailsComponent', () => {
  let component: BatianProductDetailsComponent;
  let fixture: ComponentFixture<BatianProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatianProductDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatianProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
