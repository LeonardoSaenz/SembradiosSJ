import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Terreno1Page } from './terreno1.page';

describe('Terreno1Page', () => {
  let component: Terreno1Page;
  let fixture: ComponentFixture<Terreno1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Terreno1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Terreno1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
