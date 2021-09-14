import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { UserModel } from './user-dashboard.model';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  formValue !: FormGroup;
  userModelObj : UserModel = new UserModel ();
  userData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;
  showRow: boolean = true;

  constructor(private formbuilder: FormBuilder,
    private api : ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
        name : [''],
        email : [''],
        phone : ['']
    })
    this.getAllUsers();
  }
  clickAddUser() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = true;
  }
  postUserDetails(){
    this.userModelObj.name = this.formValue.value.name;
    this.userModelObj.email = this.formValue.value.email;
    this.userModelObj.phone = this.formValue.value.phone;

    this.api.postUser(this.userModelObj)
    .subscribe(res=> {
      console.log(res);
      alert("User Added Successfully to the database")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllUsers();
    },
    err=> {
      alert("Something went wrong");
  })
  }
  getAllUsers() {
    this.api.getUser()
    .subscribe(res=> {
      this.userData = res;
    })
  }
  deleteUser(row : any){
    this.api.deleteUser(row.id)
    .subscribe(res=> {
      alert("User Deleted");
      this.getAllUsers()
    })
  }
  userEdit(row:any){
    this.showAdd = false;
    this.showUpdate = true;
    this.userModelObj.id = row.id;
    this.formValue.controls['name'].setValue(row.name);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['phone'].setValue(row.phone);
  }
  updateUserDetails() {
    this.userModelObj.name = this.formValue.value.name;
    this.userModelObj.email = this.formValue.value.email;
    this.userModelObj.phone = this.formValue.value.phone;

    this.api.updateUser(this.userModelObj, this.userModelObj.id)
    .subscribe(res=> {
      alert("Updated Sucessfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllUsers();
    })
  }

    viewUser(){
      this.showRow = ! this.showRow;
    }
  }

