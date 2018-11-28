import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouComponent } from './you/you.component';
import { DiscoverComponent } from './discover/discover.component';
import { GroupComponent } from './group/group.component';
import { ExploreComponent } from './explore/explore.component';
import { PhotoCardComponent } from './explore/photo-card/photo-card.component';

@NgModule({
  declarations: [
    YouComponent,
    DiscoverComponent,
    GroupComponent,
    ExploreComponent,
    PhotoCardComponent
  ],
  exports: [
    YouComponent,
    DiscoverComponent,
    GroupComponent,
    ExploreComponent
  ],
  imports: [CommonModule]
})
export class PhotoExploreModule { }
