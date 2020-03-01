import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Chapter5Page } from './chapter5.page';

describe('Chapter5Page', () => {
  let component: Chapter5Page;
  let fixture: ComponentFixture<Chapter5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Chapter5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
