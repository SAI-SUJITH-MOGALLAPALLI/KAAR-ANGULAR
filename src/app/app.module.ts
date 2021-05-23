import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BreadcrumbModule } from 'angular-crumbs';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReactiveFormsModule} from '@angular/forms';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { DataTablesModule } from 'angular-datatables'; 
import { NgxPaginationModule } from 'ngx-pagination';
import { InterceptorService } from './service/authentication/loader/interceptor.service';
import { LoginComponent } from './Customer Portal/login/login.component';
import { DashboardComponent } from './Customer Portal/dashboard/dashboard.component';
import { CustprofiledetailComponent } from './Customer Portal/custprofile/custprofiledetail/custprofiledetail.component';
import { CustprofileeditComponent } from './Customer Portal/custprofile/custprofileedit/custprofileedit.component';
import { InquirydataComponent } from './Customer Portal/dashboard/components/inquirydata/inquirydata.component';
import { ListofdeliveryComponent } from './Customer Portal/dashboard/components/listofdelivery/listofdelivery.component';
import { InvoicedetailsComponent } from './Customer Portal/custfinancesheet/components/invoicedetails/invoicedetails.component';
import { PaymentandagingComponent } from './Customer Portal/custfinancesheet/components/paymentandaging/paymentandaging.component';
import { SalesorderdataComponent } from './Customer Portal/dashboard/components/salesorderdata/salesorderdata.component';
import { MasterdatauploadComponent } from './Customer Portal/custmasterdataupload/masterdataupload/masterdataupload.component';
import { OverallsalesdataComponent } from './Customer Portal/custfinancesheet/components/overallsalesdata/overallsalesdata.component';
import { CreditdebitmemoComponent } from './Customer Portal/custfinancesheet/components/creditdebitmemo/creditdebitmemo.component';
import { VendorGoodsReceiptComponent } from './Vendor Portal/Vendor-dashboard/vendor-goods-receipt/vendor-goods-receipt.component';
import { VendorPurchaseOrderComponent } from './Vendor Portal/Vendor-dashboard/vendor-purchase-order/vendor-purchase-order.component';
import { VendorQuotationComponent } from './Vendor Portal/Vendor-dashboard/vendor-quotation/vendor-quotation.component';
import { VendorCreditComponent } from './Vendor Portal/Vendor-Finance-Sheet/vendor-credit/vendor-credit.component';
import { VendorDebitComponent } from './Vendor Portal/Vendor-Finance-Sheet/vendor-debit/vendor-debit.component';
import { VendorInvoiceDetailsComponent } from './Vendor Portal/Vendor-Finance-Sheet/vendor-invoice-details/vendor-invoice-details.component';
import { VendorPaymentAgingComponent } from './Vendor Portal/Vendor-Finance-Sheet/vendor-payment-aging/vendor-payment-aging.component';
import { VendorLoginComponent } from './Vendor Portal/Vendor-login/vendor-login.component';
import { VendorProfileDetailComponent } from './Vendor Portal/Vendor-profile/vendor-profile-detail/vendor-profile-detail.component';
import { VendorProfileEditComponent } from './Vendor Portal/Vendor-profile/vendor-profile-edit/vendor-profile-edit.component';
import { DashboardvendorComponent } from './Vendor Portal/dashboardvendor/dashboardvendor.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
// import { VendorDashboardComponent } from './Vendor Portal/vendor-dashboard/vendor-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CustprofiledetailComponent,
    CustprofileeditComponent,
    InquirydataComponent,
    ListofdeliveryComponent,
    InvoicedetailsComponent,
    PaymentandagingComponent,
    CreditdebitmemoComponent,
    OverallsalesdataComponent,
    MasterdatauploadComponent,
    SalesorderdataComponent,
    VendorLoginComponent,
    VendorProfileEditComponent,
    VendorProfileDetailComponent,
    VendorQuotationComponent,
    VendorPurchaseOrderComponent,
    VendorGoodsReceiptComponent,
    VendorCreditComponent,
    VendorInvoiceDetailsComponent,
    VendorDebitComponent,
    VendorPaymentAgingComponent,
    DashboardvendorComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    BreadcrumbModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    DataTablesModule,
    MatProgressBarModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
