import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  constructor(private primeConfig: PrimeNGConfig) {}

  /**
   * Set ripple effects true.
   */
  public ngOnInit(): void {
    this.primeConfig.ripple = true;
  }

}
