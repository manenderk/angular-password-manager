import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterObjectByMatchingAnyKeyValuePipe } from './filter-object-by-matching-any-key-value.pipe';



@NgModule({
  declarations: [FilterObjectByMatchingAnyKeyValuePipe],
  imports: [
    CommonModule
  ],
  exports: [FilterObjectByMatchingAnyKeyValuePipe]
})
export class PipesModule { }
