import { Component, OnInit,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [MatTableModule,
    MatPaginatorModule,MatCardModule,
    MatSortModule,CommonModule, HttpClientModule], 
  providers: [UserService],                   
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  constructor(private userService: UserService) {}
  ngOnInit(): void {
  this.userService.getUsers().subscribe(data => {
  this.users = data;
  });
  }}
