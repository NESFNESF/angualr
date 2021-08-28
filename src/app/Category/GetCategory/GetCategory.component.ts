import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/model/category/category.model';

@Component({
  templateUrl: './GetCategory.component.html'
})
export class GetCategory implements OnInit {


  constructor(private dataSource: CategoryModel) {

  }

  ngOnInit(): void {
  }


 // categorys = this.dataSource.getCategorys();
  get jsonProduct() {
    return JSON.stringify(this.dataSource.test());
  }
  categorys = this.dataSource.getCategorys();

}
