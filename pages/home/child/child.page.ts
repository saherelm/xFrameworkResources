import { Component, Input } from '@angular/core';
import { VPageComponent } from '../../../views/v-page/v-page.component';

@Component({
  selector: 'app-tools',
  templateUrl: './child.page.html',
  styleUrls: ['./child.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class ChildPage extends VPageComponent {
  //
  //#region Props ...
  //
  //#region Page Props ...
  @Input()
  toolbarSubTitle = 'Describe and Test Some Usefull Tools Component';

  @Input()
  toolbarShowSubTitle = true;
  //#endregion
  //#endregion
}
