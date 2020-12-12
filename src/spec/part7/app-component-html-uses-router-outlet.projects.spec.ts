import { TestBed, waitForAsync } from '@angular/core/testing';

import { AppModule } from '../../app/app.module';

import { AppComponent } from '../../app/app.component';

import { Routes } from '@angular/router';

import { RouterTestingModule } from '@angular/router/testing';

const appRoutes: Routes = [
  { path: "products", component: null },
  { path: "product/:id", component: null }
];

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule.withRoutes([])]
    }).compileComponents();
  }));

  it('should only contain a single tag named router-outlet @app-component-html-uses-router-outlet', waitForAsync(() => {
    const AppComponentFixture = TestBed.createComponent(AppComponent);
    since('There\'s currently no `router-outlet` tag in the AppComponent HTML file.').expect(AppComponentFixture.nativeElement.querySelector('router-outlet')).not.toBeNull();
  }));

});