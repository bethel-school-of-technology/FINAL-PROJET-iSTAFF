import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Chapter4Page } from './chapter4.page';

describe('Chapter4Page', () => {
  let component: Chapter4Page;
  let fixture: ComponentFixture<Chapter4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Chapter4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
