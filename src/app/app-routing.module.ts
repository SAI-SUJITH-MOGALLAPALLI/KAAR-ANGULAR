import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditdebitmemoComponent } from './Customer Portal/custfinancesheet/components/creditdebitmemo/creditdebitmemo.component';
import { InvoicedetailsComponent } from './Customer Portal/custfinancesheet/components/invoicedetails/invoicedetails.component';
import { OverallsalesdataComponent } from './Customer Portal/custfinancesheet/components/overallsalesdata/overallsalesdata.component';
import { PaymentandagingComponent } from './Customer Portal/custfinancesheet/components/paymentandaging/paymentandaging.component';
import { MasterdatauploadComponent } from './Customer Portal/custmasterdataupload/masterdataupload/masterdataupload.component';
import { CustprofiledetailComponent } from './Customer Portal/custprofile/custprofiledetail/custprofiledetail.component';
import { CustprofileeditComponent } from './Customer Portal/custprofile/custprofileedit/custprofileedit.component';
import { InquirydataComponent } from './Customer Portal/dashboard/components/inquirydata/inquirydata.component';
import { ListofdeliveryComponent } from './Customer Portal/dashboard/components/listofdelivery/listofdelivery.component';
import { SalesorderdataComponent } from './Customer Portal/dashboard/components/salesorderdata/salesorderdata.component';
import { DashboardComponent } from './Customer Portal/dashboard/dashboard.component';
import { LoginComponent } from './Customer Portal/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
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


const routes: Routes = [
  {path: '', component: LoginComponent ,canActivate: [LoginGuard]},
  {path: 'inquirydata', component: InquirydataComponent , canActivate: [AuthGuard], data: {breadcrumb : 'Inquiry Data'}},
  {path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuard], data: {breadcrumb : 'Dashboard'}},
  {path: 'custprofiledetail', component: CustprofiledetailComponent , canActivate: [AuthGuard], data: {breadcrumb : 'Customer Profile Detail'}},
  {path: 'custprofileedit', component: CustprofileeditComponent , canActivate: [AuthGuard], data: {breadcrumb : 'Customer Profile Edit'}},
  {path: 'invoicedetails', component: InvoicedetailsComponent , canActivate: [AuthGuard], data: {breadcrumb : 'Invoice Details'}},
  {path: 'listofdelivery', component: ListofdeliveryComponent , canActivate: [AuthGuard], data: {breadcrumb : 'Delivery List'}},
  {path: 'paymentsaging', component: PaymentandagingComponent , canActivate: [AuthGuard], data: {breadcrumb : 'Payment and Aging'}},
  {path: 'saleorderdata', component: SalesorderdataComponent, canActivate: [AuthGuard], data: {breadcrumb : 'Sales order data'}},
  {path: 'creditdebitdemo', component: CreditdebitmemoComponent, canActivate: [AuthGuard], data: {breadcrumb : 'Credit Debit Memo'}},
  {path: 'masterdataupload', component: MasterdatauploadComponent,  canActivate: [AuthGuard], data: {breadcrumb : 'Master data Upload'}},
  {path: 'overallsalesdata', component: OverallsalesdataComponent,  canActivate: [AuthGuard], data: {breadcrumb : 'Overall Sales Data'}},
  {path: 'vendorlogin', component: VendorLoginComponent},
  {path: 'vendorprofiledetail', component: VendorProfileDetailComponent},
  {path: 'vendorprofileedit', component: VendorProfileEditComponent},
  {path: 'vendorgoodsreceipt', component: VendorGoodsReceiptComponent},
  {path: 'vendorpurchaseorder', component: VendorPurchaseOrderComponent},
  {path: 'vendorquotation', component: VendorQuotationComponent},
  {path: 'vendorcredit', component: VendorCreditComponent},
  {path: 'vendordebit', component: VendorDebitComponent},
  {path: 'vendorinvoice', component: VendorInvoiceDetailsComponent},
  {path: 'vendorpaymentaging', component: VendorPaymentAgingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
