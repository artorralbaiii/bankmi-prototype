import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { ContentComponent } from './content/content.component';
import { UserItemComponent } from './user-item/user-item.component';
import { AlertsComponent } from './alerts/alerts.component';
import { FooterComponent } from './footer/footer.component';
import { MyFeedComponent } from './content/my-feed/my-feed.component';

@NgModule({
  declarations: [LayoutComponent, SidebarComponent, ContentComponent, UserItemComponent, AlertsComponent, FooterComponent, MyFeedComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
