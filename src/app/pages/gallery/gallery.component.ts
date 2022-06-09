import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  products:any = [];

  constructor(
    private _productService: ProductsService
  ) { }

  ngOnInit(): void {
    this._productService.getAll().subscribe((products: any) => {
      if (products.data) {


        this.products = products.data;
        console.log(this.products);
      }
    });
  }

}
