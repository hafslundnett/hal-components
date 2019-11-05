import { BoolPipe } from './bool.pipe';


@NgModule({
  imports: [
    BoolPipe,
  ],
  declarations: [BoolPipe],
  exports: [BoolPipe],
})
export class BoolPipeModule { }