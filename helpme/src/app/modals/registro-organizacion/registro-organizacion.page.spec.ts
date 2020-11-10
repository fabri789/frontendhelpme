import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistroOrganizacionPage } from './registro-organizacion.page';

describe('RegistroOrganizacionPage', () => {
  let component: RegistroOrganizacionPage;
  let fixture: ComponentFixture<RegistroOrganizacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroOrganizacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroOrganizacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
