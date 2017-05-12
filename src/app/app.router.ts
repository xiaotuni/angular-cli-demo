import { RouterModule } from '@angular/router';
// import { MyComponentComponent } from './my-component/my-component.component';
// import { ProductComponent } from './product/product.component';
// import { MembersComponent } from './members/members.component';
// import { NotFoundComponent } from './not-found/not-found.component';
import { AppComs, ProductComponent, MembersComponent, MyComponentComponent, NotFoundComponent } from './app.coms'
// const { ProductComponent, MembersComponent, MyComponentComponent, NotFoundComponent } = AppComs;

const routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'member', component: MembersComponent },
  { path: 'product', component: ProductComponent },
  { path: 'mycomponent', component: MyComponentComponent },
  { path: '**', component: NotFoundComponent }
];

// export const AppRouting = RouterModule.forRoot(routes, { useHash: true });
export const AppRouting = RouterModule.forRoot(routes, { useHash: !true });
