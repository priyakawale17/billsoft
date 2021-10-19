import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { DashboardComponent } from 'src/app/Components/dashboard/dashboard.component';
// import { HeaderComponent } from 'src/app/Shared/header/header.component';
// import { FooterComponent } from 'src/app/Shared/footer/footer.component';
// import { SidebarComponent } from 'src/app/Shared/sidebar/sidebar.component';
import { ProductListComponent } from 'src/app/Components/Products/product-list/product-list.component';
import { ClientComponent } from 'src/app/Components/client/client.component';
import { AddClientComponent } from 'src/app/Components/client/add-client/add-client.component';
// import { AppComponent } from 'src/app/app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list'; 
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from 'src/app/Components/Products/add-product/add-product.component';
import { ClientProductComponent } from 'src/app/Components/client-product/client-product.component';
// import {MatTableDataSource} from '@angular/material/table';
// import {MatSort} from '@angular/material/sort';



@NgModule({
  declarations: [
    DefaultComponent,
    // HeaderComponent,
    // FooterComponent,
    // SidebarComponent,
    ProductListComponent,
    ClientComponent,
    AddProductComponent,
    AddClientComponent,
    DashboardComponent,
    ClientProductComponent
  
   
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    SharedModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule
    // MatTableDataSource,
    // MatSort

    
  ]
})
export class DefaultModule { }
