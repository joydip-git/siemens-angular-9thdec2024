import { Routes } from "@angular/router";
import { ProductContainerComponent } from "../products/components/product-container/product-container.component";
import { ViewProductComponent } from "../products/components/view-product/view-product.component";
import { UpdateProductComponent } from "../products/components/update-product/update-product.component";
import { AddProductComponent } from "../products/components/add-product/add-product.component";
import { HomeComponent } from "../shared/components/home/home.component";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";

// export const productRoutes: Routes = [
//     {
//         path: 'products', component: ProductContainerComponent
//     },
//     {
//         path: 'products/view/:id', component: ViewProductComponent
//     },
//     {
//         path: 'products/update/:id', component: UpdateProductComponent
//     },
//     {
//         path: 'products/add', component: AddProductComponent
//     }
// ]
export const productRoutes: Routes = [
    {
        path: 'products',
        children: [
            {
                path: '', component: ProductContainerComponent
            },
            {
                path: 'view/:id', component: ViewProductComponent
            },
            {
                path: 'update/:id', component: UpdateProductComponent
            },
            {
                path: 'add', component: AddProductComponent
            }
        ]
    }
]

export const commonRoutes: Routes = [
    {
        path: 'home', component: HomeComponent
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    }
]

export const appRoutes: Routes = [
    {
        path: '**', component: PageNotFoundComponent
    }
]

//{id:'1'}