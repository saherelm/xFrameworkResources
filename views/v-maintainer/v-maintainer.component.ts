import {
  Inject,
  NgZone,
  Renderer2,
  Component,
  ElementRef,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { XResourceIDs } from 'x-framework-core';
import { X_CONFIG } from '../../config/x-config';
import { XConfig } from '../../config/app-config';
import { ViewportRuler } from '@angular/cdk/overlay';
import { XManagerService } from 'x-framework-services';
import { XBaseComponent } from 'x-framework-components';
import { AppResourceIDs } from 'src/app/config/app.localization.config';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'v-maintainer',
  templateUrl: './v-maintainer.component.html',
  styleUrls: ['./v-maintainer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VMaintainerComponent extends XBaseComponent {
  //
  //#region Props ...
  //
  // Prepare All Resource IDs ...
  readonly ResourceIDs = Object.assign(
    Object.assign({}, XResourceIDs),
    AppResourceIDs
  ) as any;
  //#endregion

  //
  //#region Constructor ...
  public constructor(
    @Inject(X_CONFIG) public config: XConfig,
    public managerService: XManagerService,
    public element: ElementRef,
    public renderer: Renderer2,
    public ruler: ViewportRuler,
    public zone: NgZone,
    public changeDetector: ChangeDetectorRef
  ) {
    super(
      config,
      managerService,
      element,
      renderer,
      ruler,
      zone,
      changeDetector
    );
  }
  //#endregion
}
