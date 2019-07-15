import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrls: ['./recipe-start.component.css']
})
export class RecipeStartComponent implements OnInit {
  loggedIn = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  isLoggedIn () {
    if (this.authService.isAuthenticated()) {
      this.loggedIn = true;
      return true;
    }
  }
}
