import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let header: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    header = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have nav-top class element', () => {
    const navTop: HTMLElement = header.querySelector('.nav-top');
    expect(navTop).toBeTruthy();
  });

  it('should create nav-brand title', () => {
    const navBrand: HTMLElement = header.querySelector('.nav-brand');
    expect(navBrand).toBeTruthy();
    const title = navBrand.querySelector('div').textContent;
    expect(title).toEqual('ToyStory');
  });

  it('should create navigation lists', () => {
    const navRoutes = header.querySelector('.nav-routes');
    expect(navRoutes).toBeTruthy();
    const routes = navRoutes.querySelectorAll('a');
    expect(routes[0].textContent).toEqual('Catelog');
    expect(routes[1].textContent).toEqual('Delivery');
    expect(routes[2].textContent).toEqual('About');
    expect(routes[3].textContent).toEqual('Contacts');
  });

  it('should create a cart wrapper element', () => {
    const cartWrapper = header.querySelector('.cart-wrapper');
    expect(cartWrapper).toBeTruthy();
  });

});
