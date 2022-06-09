import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any = [];

  constructor(
    private _httpService: HttpService,
    private _userService:UsersService
  ) { }

  ngOnInit(): void {
    this._httpService.getUnsecuredUsers().subscribe((users: any) => {
      if (users.data) {
        this.users = users.data;
        console.log(this.users);
      }
    });
  }

  delete(id: any) {
    this._userService.deleteById(id).subscribe((user: any) => {
      this._httpService.getUnsecuredUsers().subscribe((users: any) => {
        if (users.data) {
          this.users = users.data;
          console.log(this.users);
        }
      });
    });
  }

}
