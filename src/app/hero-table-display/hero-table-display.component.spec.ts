import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTableDisplayComponent } from './hero-table-display.component';

describe('HeroTableDisplayComponent', () => {
  let component: HeroTableDisplayComponent;
  let fixture: ComponentFixture<HeroTableDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroTableDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroTableDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
