import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, HeaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
