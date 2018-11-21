import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouComponent } from './you/you.component';
import { DiscoverComponent } from './discover/discover.component';
import { GroupComponent } from './group/group.component';

@NgModule({
  declarations: [
    YouComponent,
    DiscoverComponent,
    GroupComponent
  ],
  exports: [
    YouComponent,
    DiscoverComponent,
    GroupComponent
  ],
  imports: [CommonModule]
})
export class PhotoExploreModule { }
