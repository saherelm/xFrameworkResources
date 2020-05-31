import {
  Input,
  Inject,
  Renderer2,
  Component,
  ViewChild,
  ElementRef,
  TemplateRef,
  ChangeDetectorRef
} from '@angular/core';
import {
  XColor,
  notValue,
  XStandardType,
  XOneOrManyType,
  XColorIdentifier
} from 'x-framework-core';
import { Observable } from 'rxjs';
import {
  XMenuSlot,
  XLogoSlot,
  XBackSlot,
  XSideType,
  XSideSlot,
  XTitleSlot,
  XMenuState,
  XContentSlot,
  XPageComponent,
  XLogoSlotIdentifier,
  XBackSlotIdentifier,
  XMenuSlotIdentifier,
  XPageSizeIdentifier,
  XSideSlotIdentifier,
  XSideTypeIdentifier,
  XTitleSlotIdentifier,
  XContentSlotIdentifier
} from 'x-framework-components';
import { MenuController } from '@ionic/angular';
import { X_CONFIG } from '../../config/x-config';
import { XConfig } from '../../config/app-config';
import { ViewportRuler } from '@angular/cdk/overlay';
import { isNullOrUndefined } from 'x-framework-core';
import { XManagerService } from 'x-framework-services';
import { NavPageItems } from '../../config/page.config';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'v-page',
  templateUrl: './v-page.component.html',
  styleUrls: ['./v-page.component.scss']
})
export class VPageComponent extends XPageComponent {
  //
  //#region Props ...
  //
  isMobileUi$: Observable<boolean>;
  isNotMobileUi$: Observable<boolean>;

  //
  //#region Page Props ...
  private TOOLBAR_CONTENT_TEMPLATE: TemplateRef<any>;

  /**
   * the toolbar content ...
   */
  @ViewChild('toolbarContentTemplateRef', { static: false })
  set toolbarContentTemplateRef(v: TemplateRef<any>) {
    //
    if (isNullOrUndefined(v)) {
      return;
    }

    //
    this.TOOLBAR_CONTENT_TEMPLATE = v;
  }

  get toolbarContentTemplateRef() {
    return this.TOOLBAR_CONTENT_TEMPLATE;
  }

  //
  navPages = NavPageItems;

  //
  @Input()
  color: XStandardType<XColorIdentifier> = 'light-shade';

  @Input()
  cssClass: XStandardType<XOneOrManyType<string>>;
  //#endregion

  //
  //#region Toolbar Props ...
  //
  //#region Toolbar Boundary ...
  //
  @Input()
  showToolbar: XStandardType<boolean> = true;

  //
  @Input()
  toolbarColor: XStandardType<XColor> = XColor.Light;
  //#endregion

  //
  //#region Toolbar ProgressBar ...
  @Input()
  toolbarProgressBarColor: XStandardType<XColor> = XColor.Warning;
  //#endregion

  //
  //#region Toolbar Title and SubTitle ...
  //
  // Toolbar Title ...
  @Input()
  toolbarTitleSlot: XStandardType<XTitleSlotIdentifier> = XTitleSlot.End;

  @Input()
  toolbarShowTitle: XStandardType<boolean> = true;

  @Input()
  toolbarTitle: XStandardType<string> = super.resourceProvider(
    this.ResourceIDs.app_name
  );
  //#endregion

  //
  //#region Toolbar Logo ...
  @Input()
  toolbarLogoSlot: XStandardType<XLogoSlotIdentifier> = XLogoSlot.Start;

  @Input()
  toolbarShowLogo: XStandardType<boolean> = true;

  @Input()
  toolbarLogoUrl: XStandardType<string> = '/assets/image/logo.png';
  //#endregion

  //
  //#region Toolbar Back ...
  @Input()
  toolbarBackSlot: XStandardType<XBackSlotIdentifier> = XBackSlot.Start;

  @Input()
  toolbarShowBack: XStandardType<boolean> = false;

  @Input()
  toolbarHasBack: XStandardType<boolean> = true;

  @Input()
  toolbarDefaultHref = '/';
  //#endregion

  //
  //#region Toolbar Menu ...
  @Input()
  toolbarMenuSlot: XStandardType<XMenuSlotIdentifier> = XMenuSlot.Start;

  //
  @Input()
  menuState: XStandardType<XMenuState> = XMenuState.Opened;

  //
  @Input()
  toolbarShowMenu: XStandardType<boolean> = true;

  //
  @Input()
  toolbarHasMenu: XStandardType<boolean> = true;
  //#endregion

  //
  //#region Toolbar Templates ...
  @Input()
  toolbarContentSlot: XStandardType<XContentSlotIdentifier> =
    XContentSlot.Start;
  //#endregion
  //#endregion

  //
  //#region Ion Content Scrolling Handlers ...
  @Input()
  scrollStartClasses: XOneOrManyType<string> = 'start-scroll';

  @Input()
  scrollEndClasses: XOneOrManyType<string> = 'end-scroll';
  //#endregion

  //
  //#region Footer Props ...
  //
  @Input()
  footerColor: XStandardType<XColor> = XColor.Light;
  //#endregion

  //
  //#region Side Props ...
  //
  @Input()
  toggleMenuWhen: XStandardType<XPageSizeIdentifier> = 'md';

  @Input()
  hasSide: XStandardType<boolean> = true;

  @Input()
  sideSlot: XStandardType<XSideSlotIdentifier> = XSideSlot.Start;

  @Input()
  sideType: XStandardType<XSideTypeIdentifier> = XSideType.Overlay;

  @Input()
  sideColor: XStandardType<XColorIdentifier> = XColor.Light;
  //#endregion
  //#endregion

  //
  //#region Constructor ...
  constructor(
    public element: ElementRef,
    public renderer: Renderer2,
    public ruler: ViewportRuler,
    public menuController: MenuController,
    public managerService: XManagerService,
    public changeDetector: ChangeDetectorRef,
    @Inject(X_CONFIG) public config: XConfig
  ) {
    super(
      renderer,
      element,
      ruler,
      menuController,
      managerService,
      changeDetector,
      config
    );

    //
    this.isMobileUi$ = this.managerService.isMobileUi$;
    this.isNotMobileUi$ = notValue(this.isMobileUi$);
  }
  //#endregion

  //
  //#region LifeCycle ...
  // tslint:disable-next-line:use-lifecycle-interface
  async ngAfterViewInit() {
    super.ngAfterViewInit();

    //
    // await this.handleHasSideEffect();
    this.managerService.dispatchResizeEvent();
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewChecked() {
    super.ngAfterViewChecked();

    //
    this.changeDetector.detectChanges();
  }
  //#endregion

  //
  //#region Register Handlers ...
  registerViewHandlers() {
    super.registerViewHandlers();

    //
    //#region Register ManagerService Loading Handler ...
    this.managerService.isLoading$.subscribe(isLoading => {
      this.toolbarShowProgressBar = isLoading;
    });
    //#endregion
  }
  //#endregion

  //
  //#region Handlers ...
  async onChange(changeKeys: string[]) {
    super.onChange(changeKeys);

    //
    if (changeKeys.includes('hasSide')) {
      await this.handleHasSideEffect();
    }
  }
  //#endregion

  //
  //#region Provided Actions ...
  //#endregion

  //
  //#region Private ...
  private async handleHasSideEffect() {
    //
    const hasSide = await this.getValueAsync(this.hasSide);
    if (!hasSide) {
      //
      this.toolbarHasMenu = false;
      this.toolbarShowMenu = false;
      this.toggleMenuWhen = '';
    }
  }
  //#endregion
}
