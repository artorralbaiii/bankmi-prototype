import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { MyFeedComponent } from './content/my-feed/my-feed.component';


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent, children: [
            {
                path: '',
                component: MyFeedComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
