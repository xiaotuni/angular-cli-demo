import { RouterModule } from '@angular/router';
import { RouterComponent } from './containers/Core'
const { ProductComponent, MembersComponent, MyComponentComponent, NotFoundComponent } = RouterComponent;
const routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'member', component: MembersComponent },
  { path: 'product', component: ProductComponent },
  { path: 'mycomponent', component: MyComponentComponent },
  { path: '**', component: NotFoundComponent }
];

// export const AppRouting = RouterModule.forRoot(routes, { useHash: true });
export const AppRouting = RouterModule.forRoot(routes, { useHash: !true });
