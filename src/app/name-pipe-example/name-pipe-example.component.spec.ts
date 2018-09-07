import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamePipeExampleComponent } from './name-pipe-example.component';

describe('NamePipeExampleComponent', () => {
  let component: NamePipeExampleComponent;
  let fixture: ComponentFixture<NamePipeExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamePipeExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamePipeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
