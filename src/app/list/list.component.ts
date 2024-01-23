import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { NgFor } from '@angular/common';
import { map } from 'rxjs';
import UserList from '../../interfaces/userList.inteface';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  users: UserList[] | undefined;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService
      .getUsers()
      .pipe(
        map((users) =>
          users.map((user) => ({
            name: user.name,
            CI: user.CI,
            email: user.email,
            telephone: user.telephone,
          }))
        )
      )
      .subscribe((users) => {
        this.users = users;
      });
  }
}
