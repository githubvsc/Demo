import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './pages/login/dashboard/dashboard.component';
import { LayoutComponent } from './pages/login/layout/layout.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HomeComponent, LoginComponent,RouterOutlet,LoginComponent,LayoutComponent,DashboardComponent]
})
export class AppComponent {
  title = 'Demo';
}
