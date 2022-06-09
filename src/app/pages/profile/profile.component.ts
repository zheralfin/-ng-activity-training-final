import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(
    private _userService: UsersService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      console.log('PARAMS', params);
      if (params['id']) {
        this._userService.getById(params['id']).subscribe((user) => {
          this.user = user.data;
          console.log(this.user.data);
        })
      }
    })
  }

}
