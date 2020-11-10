import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaPublicacionPage } from './lista-publicacion.page';

describe('ListaPublicacionPage', () => {
  let component: ListaPublicacionPage;
  let fixture: ComponentFixture<ListaPublicacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPublicacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaPublicacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
