import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../shared/material/material.module';
import { DemoRoutingModule } from './demo-routing.module';

import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
  declarations: [ButtonsComponent],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FlexLayoutModule,
    MaterialModule

  ]
})
export class DemoModule { }
