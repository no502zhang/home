import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    NgZorroAntdModule,
  ],
  exports: [
    CommonModule,
    RouterModule,

    NgZorroAntdModule,
  ],
  declarations: []
})
export class SharedModule { }
