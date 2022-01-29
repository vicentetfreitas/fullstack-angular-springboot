import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductService } from 'src/app/services/product.service';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
