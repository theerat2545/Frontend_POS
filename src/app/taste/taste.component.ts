import { Component } from '@angular/core';
import { MyModalComponent } from '../my-modal/my-modal.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import config from '../../config';

@Component({
  selector: 'app-taste',
  standalone: true,
  imports: [MyModalComponent, FormsModule],
  templateUrl: './taste.component.html',
  styleUrl: './taste.component.css'
})
export class TasteComponent {
  constructor(private http: HttpClient) {}

  id: number = 0;
  foodTypeId: number = 0;
  name: string = '';
  remark: string = '';
  tastes: any[] = [];
  foodTypes: any[] = [];

  ngOnInit() {
    this.fetchDataFoodTypes();
    this.fetchData();
  }

  fetchDataFoodTypes() {
    try {
      this.http
        .get(config.apiServer + '/api/foodType/list')
        .subscribe((res: any) => {
          this.foodTypes = res.results;
        })
    } catch (e: any) {
      Swal.fire({
        title: 'error',
        text: e.message,
        icon: 'error'
      });
    }
  }

  fetchData() {

  }

  save() {

  }

  edit(item: any) {

  }

  remove(item: any) {

  }
}
