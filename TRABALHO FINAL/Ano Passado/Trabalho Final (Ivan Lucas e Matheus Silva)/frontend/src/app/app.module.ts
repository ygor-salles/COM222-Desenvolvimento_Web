import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { DetailComponent } from './pages/detail/detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CartComponent } from './pages/cart/cart.component';
import { RequestComponent } from './pages/request/request.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';

const appRoutes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'product/:id/detail', component: DetailComponent },
  { path: 'product/:id/edit', component: ProductEditComponent },
  { path: 'carShopping', component: CartComponent },
  { path: 'requests', component: RequestComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MenuComponent,
    DetailComponent,
    CartComponent,
    RequestComponent,
    ProductEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
