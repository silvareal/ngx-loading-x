import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public load = false;

  ngxLoadingXForm: FormGroup;
  register = false;

  constructor(private fb: FormBuilder, ) { }

  ngOnInit() {
    this.ngxLoadingXForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  loginForm() {
    this.load = true;

    setTimeout(() => {
      this.load = false,
        this.register = true;
    }, 5000)
  }
}
