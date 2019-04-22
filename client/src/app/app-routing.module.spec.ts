/* tslint:disable:no-unused-variable */
import { AppRoutingModule } from './app-routing.module';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HomeComponent } from './pages/home/home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { Location } from '@angular/common';

describe('AppRoutingModule', () => {
  let appRoutingModule: AppRoutingModule;
  const routes: Routes = [
    { path: '', component: HomeComponent }
  ];
  let location: Location;
  let router: Router;

  beforeEach(() => {
    appRoutingModule = new AppRoutingModule();
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent
      ],
      imports: [RouterTestingModule.withRoutes(routes)]
    }).compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    // fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it('navigate to "" redirects you to /home', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('');
  }));

});
