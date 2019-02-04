import { NgModule } from '@angular/core';
import { CategoryfilterPipe } from './categoryfilter/categoryfilter';
import { OrderByPipe } from './order-by/order-by';
@NgModule({
	declarations: [CategoryfilterPipe,
    CategoryfilterPipe,
    OrderByPipe],
	imports: [],
	exports: [CategoryfilterPipe,
    CategoryfilterPipe,
    OrderByPipe]
})
export class PipesModule {}
