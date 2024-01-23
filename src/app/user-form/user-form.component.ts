import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../services/user.service';
import User from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent implements OnInit {
  formUser = new FormGroup({
    name: new FormControl('', [Validators.required]),
    CI: new FormControl(null, [Validators.required]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telephone: new FormControl(null, [Validators.required]),
  });

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  async onSubmit(e: Event) {
    e.preventDefault();
    const user: User = {
      name: this.formUser.value.name || '', // asigna una cadena vacía si es null o undefined
      CI: this.formUser.value.CI || null,
      password: this.formUser.value.password || null,
      email: this.formUser.value.email || null,
      telephone: this.formUser.value.telephone || null,
    };

    await this.userService.createUser(user);
    this.formUser.reset();
  }
}
