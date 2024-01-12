import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServivelayerComponent } from './servivelayer.component';

describe('ServivelayerComponent', () => {
  let component: ServivelayerComponent;
  let fixture: ComponentFixture<ServivelayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServivelayerComponent]
    });
    fixture = TestBed.createComponent(ServivelayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
