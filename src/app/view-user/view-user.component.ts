import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  userId: string = '';
  userData !: any;

  constructor(private formBuilder: FormBuilder,
    private api : ApiService,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(res => {
      this.userId = res.id;
    })

    this.api.viewUser(this.userId).subscribe(res=> {
      this.userData = res;
    })
  }

}

