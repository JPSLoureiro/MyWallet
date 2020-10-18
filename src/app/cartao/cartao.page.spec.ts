import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CartaoPage } from './cartao.page';

describe('CartaoPage', () => {
  let component: CartaoPage;
  let fixture: ComponentFixture<CartaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CartaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
