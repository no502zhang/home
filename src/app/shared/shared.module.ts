import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule,

    NgZorroAntdModule,
  ],
  declarations: []
})
export class SharedModule { }
