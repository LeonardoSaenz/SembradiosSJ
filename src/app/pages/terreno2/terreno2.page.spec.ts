import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Terreno2Page } from './terreno2.page';

describe('Terreno2Page', () => {
  let component: Terreno2Page;
  let fixture: ComponentFixture<Terreno2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Terreno2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Terreno2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
