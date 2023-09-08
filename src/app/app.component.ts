import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { ToastrComponentlessModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  project_id ="41199"
  branch_id="4"
  isChecked=false

  data:any
  constructor(public apiService:ApiService){
  }
  ngOnInit(): void {
  }

  getData(){
    let obj = {
      "api_key": "BBw9cGiMpd56IFZz7m24Fm8L4f4f51FMEMGQKhytAsrL+5fNUqeZiM6TuM2ibw4yjWxFGOFAa+1Q6/Vt2YjNHMOAIR45Uy7o88m737ZXTWM=",
      "language_code": "en",
      "device_id": "2CEC3804-46E6-4803-8982-88CFFCD402DD",
      "device_token": "ex7n_U-pwlQ:APA91bGwFupIdjXEJqs4ZtdRwXLPPopDqwIU0gOH5n38ZPFEROk8WdAPQMsBxPLRd_3d8J3qIrUqUp8mEEvUjapCj7LVEOPO3kDt1lGT6r9L1C6VntoYuwbZnstfOSaZxeFXnibJXWKj",
      "device_type": "android",
      "mst_product_id": this.project_id,//41199,
      "branch_id": this.branch_id,//4,
      "price_type": 1,
      "dishtype_id": "0",
      "is_for_repeat_set_combo": this.isChecked ? 1 : 0

    }
    this.apiService.getData(obj).subscribe((res: any) => {
      console.log(res?.data);
      this.data = res?.data
    })
  }



}
