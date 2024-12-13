import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { PmsAppServiceContract } from '../../../contracts/pmsappservicecontract';
import { Product } from '../../../models/product';
import { TOKEN_NAME } from '../../../utils/constants';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css'
})
export class ViewProductComponent implements OnInit {
  product?: Product;
  constructor(
    private currentRoute: ActivatedRoute,
    @Inject(TOKEN_NAME) private ps: PmsAppServiceContract<Product>,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    const snapshot: ActivatedRouteSnapshot = this.currentRoute.snapshot
    const id = snapshot.params['id']
    this.product = this.ps.get(+id)
  }
  goTo(id: number) {
    this.router.navigate(['/products', 'update', id])
  }
}
