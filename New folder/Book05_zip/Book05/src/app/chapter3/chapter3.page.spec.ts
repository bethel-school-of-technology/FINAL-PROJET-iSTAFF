import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Chapter3Page } from './chapter3.page';

describe('Chapter3Page', () => {
  let component: Chapter3Page;
  let fixture: ComponentFixture<Chapter3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Chapter3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
