import {
  Input,
  Inject,
  Output,
  NgZone,
  Renderer2,
  Component,
  ViewChild,
  ElementRef,
  TemplateRef,
  EventEmitter,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  XColor,
  assign,
  XParam,
  XLocale,
  notValue,
  isFunction,
  XResourceIDs,
  XPickerColumn,
  XStandardType,
  XOneOrManyType,
  XColorIdentifier,
  XModalButtonRole,
  XPickerColumnOption,
} from 'x-framework-core';
import { Observable } from 'rxjs';
import {
  XMenuSlot,
  XLogoSlot,
  XBackSlot,
  XSideType,
  XSideSlot,
  XListItem,
  XTitleSlot,
  XIconNames,
  XMenuState,
  XContentSlot,
  XPageComponent,
  XPopoverComponent,
  XBackSlotIdentifier,
  XLogoSlotIdentifier,
  XMenuSlotIdentifier,
  XPageSizeIdentifier,
  XSideSlotIdentifier,
  XSideTypeIdentifier,
  XTitleSlotIdentifier,
  XListItemSlideOption,
  XContentSlotIdentifier,
} from 'x-framework-components';
import { map } from 'rxjs/operators';
import { MenuController } from '@ionic/angular';
import { X_CONFIG } from '../../config/x-config';
import { XConfig } from '../../config/app-config';
import { ViewportRuler } from '@angular/cdk/overlay';
import { XManagerService } from 'x-framework-services';
import { NavPageItems, Pages } from '../../config/page.config';
import { isNullOrUndefined, hasChild } from 'x-framework-core';
import { AppResourceIDs } from 'src/app/config/app.localization.config';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'v-page',
  templateUrl: './v-page.component.html',
  styleUrls: ['./v-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VPageComponent extends XPageComponent {
  //
  //#region Props ...
  //
  isMobileUi$ = this.managerService.isMobileUi$;
  isNotMobileUi$ = this.managerService.isNotMobileUi$;

  //
  //#region CaptureMode ...
  @Input()
  enableCaptureMode: XStandardType<boolean> = false;

  @Input()
  downloadCapturedImage: XStandardType<boolean> = true;

  @Input()
  captureTopOffset: XStandardType<number> = 0;

  @Input()
  captureBottomOffset: XStandardType<number> = 0;

  @Output()
  imageCaptured = new EventEmitter<string | Blob>();
  //#endregion

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

  private TOOLBAR_END_SLOT_TEMPLATE: TemplateRef<any>;

  /**
   * the toolbar end slot content ...
   */
  @ViewChild('toolbarEndSlotButtonsTemplateRef', { static: false })
  set toolbarEndSlotButtonsTemplate(v: TemplateRef<any>) {
    //
    if (isNullOrUndefined(v)) {
      return;
    }

    //
    this.TOOLBAR_END_SLOT_TEMPLATE = v;
  }

  get toolbarEndSlotButtonsTemplate() {
    return this.TOOLBAR_END_SLOT_TEMPLATE;
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
  toolbarColor: XStandardType<XColor> = XColor.Primary;
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
  toolbarLogoUrl: XStandardType<string> = './assets/image/logo.png';
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
  toolbarDefaultHref: string;
  //#endregion

  //
  //#region Toolbar Menu ...
  @Input()
  toolbarMenuSlot: XStandardType<XMenuSlotIdentifier> = XMenuSlot.Start;

  //
  @Input()
  menuState: XStandardType<XMenuState>;

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
  //#region Scrolling Handlers ...
  @Input()
  provideScrollEvents: XStandardType<boolean> = true;

  @Input()
  scrollBehaviour: XOneOrManyType<string> = ['x-fab'];

  @Input()
  scrollStartClasses: XOneOrManyType<string> = 'start-scroll';

  @Input()
  scrollEndClasses: XOneOrManyType<string> = 'end-scroll';
  //#endregion

  //
  //#region Footer Props ...
  //
  @Input()
  footerColor: XStandardType<XColorIdentifier> = XColor.Primary;
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
  sideColor: XStandardType<XColorIdentifier> = XColor.Primary;
  //#endregion
  //#endregion

  //
  //#region Constructor ...
  constructor(
    public zone: NgZone,
    public element: ElementRef,
    public renderer: Renderer2,
    public ruler: ViewportRuler,
    public menuController: MenuController,
    public managerService: XManagerService,
    public changeDetector: ChangeDetectorRef,
    @Inject(X_CONFIG) public config: XConfig
  ) {
    super(
      zone,
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
  onInit() {
    super.onInit();

    //
    this.menuState = this.isMobileUi$.pipe(
      map((isMobile) => (isMobile ? XMenuState.WillClose : XMenuState.Opened))
    );
  }

  async afterViewInit() {
    super.afterViewInit();

    //
    const showToolbar = await this.getValueAsync(this.showToolbar);
    if (showToolbar) {
      this.detectChanges();
    }

    //
    this.managerService.dispatchResizeEvent();
  }

  afterViewChecked() {
    super.afterViewChecked();

    //
    this.changeDetector.detectChanges();
  }

  async onChange(changeKeys: string[]) {
    super.onChange(changeKeys);

    //
    if (changeKeys.includes('hasSide')) {
      await this.handleHasSideEffect();
    }
  }
  //#endregion

  //
  //#region Register Handlers ...
  registerViewHandlers() {
    super.registerViewHandlers();

    //
    //#region Register ManagerService Loading Handler ...
    this.managerService.isLoading$.subscribe((isLoading) => {
      this.toolbarShowProgressBar = isLoading;
    });
    //#endregion
  }
  //#endregion

  //
  //#region Handlers ...
  //#endregion

  //
  //#region UI Handlers ...
  async handleMoreButtonClicked(event: any) {
    //
    const onlyIcon = false;

    //
    const slideOptions: XListItemSlideOption[] = [];

    //
    slideOptions.push({
      id: 'change_language',
      icon: XIconNames.language,
      title: XResourceIDs.language,
      color: XColor.Tertiary,
      slot: 'start',
      onlyIcon,
      handler: async () => {
        await this.handleChangeLocale();
      },
    });

    //
    const isCaptureModeEnabled = await this.getValueAsync(
      this.enableCaptureMode
    );
    if (isCaptureModeEnabled) {
      //
      slideOptions.push({
        id: 'disable_capture_mode',
        icon: XIconNames.crop,
        title: XResourceIDs.disable_capture_mode,
        color: XColor.Danger,
        slot: 'start',
        onlyIcon,
        handler: async () => {
          //
          this.enableCaptureMode = false;
          this.detectChanges();
        },
      });
    } else {
      //
      slideOptions.push({
        id: 'enable_capture_mode',
        icon: XIconNames.crop,
        title: XResourceIDs.enable_capture_mode,
        color: XColor.Tertiary,
        slot: 'start',
        onlyIcon,
        handler: async () => {
          //
          this.enableCaptureMode = true;
          this.detectChanges();
        },
      });
    }

    //
    slideOptions.push({
      id: 'theme_manager',
      icon: XIconNames.color_palette,
      title: AppResourceIDs.theme_manager,
      color: XColor.Tertiary,
      slot: 'start',
      onlyIcon,
      handler: async () => {
        //
        const route = this.managerService.mergeRoutes(Pages.ThemeManager.route);
        await this.managerService.navigateByUrl(route);
      },
    });

    //
    const item: XListItem<any> = {
      data: '',
      slideOptions,
    };

    //
    const popOver = await this.managerService.dialogService.presentPopover({
      component: XPopoverComponent,
      componentProps: assign({}, { key: XParam.Item, value: item }),
      translucent: true,
      showBackdrop: true,
      event,
    });

    //
    const { data } = await popOver.onWillDismiss();
    if (!data || !data.id || !data.data) {
      return;
    }

    //
    const optionId = data.id.toString() as string;
    const option =
      item && item.slideOptions
        ? item.slideOptions.find((so) => so.id === optionId)
        : null;
    if (!option) {
      return;
    }

    //
    const handler = option.handler;
    if (!handler || !isFunction(handler)) {
      return;
    }

    //
    // Run Handler ...
    await handler();
  }

  async handleImageCaptured(image: string | Blob) {
    //
    console.log('imageCaptured: ', image);

    //
    if (image) {
      this.imageCaptured.emit(image);
    }

    //
    this.enableCaptureMode = false;
    this.detectChanges();
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

  private async handleChangeLocale() {
    //
    const currentLocale = this.managerService.currentLocale;
    const availableLanguages = this.config.availableLanguages.map((ai) => {
      return {
        name: ai.name,
        locale: ai.locale,
      };
    });
    if (!hasChild(availableLanguages)) {
      return;
    }

    //
    const localOptions: XPickerColumnOption[] = availableLanguages.map((al) => {
      //
      const op: XPickerColumnOption = {
        text: al.name,
        value: al.locale,
        disabled: al.locale === currentLocale,
      };

      //
      return op;
    });
    const localColumn: XPickerColumn = {
      name: 'locales',
      options: localOptions,
    };

    //
    await this.managerService.dialogService.presentPicker({
      buttons: [
        {
          text: XResourceIDs.ok,
          role: XModalButtonRole.Selected,
          cssClass: ['btn-selected'],
          handler: async (value) => {
            //
            const selectedLocale: XLocale = value?.locales?.value;
            if (!selectedLocale) {
              return;
            }

            //
            await this.managerService.settingsService.changeLocale(
              selectedLocale,
              true
            );
          },
        },
        {
          text: XResourceIDs.cancel,
          role: XModalButtonRole.Cancel,
          cssClass: ['btn-cancel'],
          handler: () => {},
        },
      ],
      columns: [localColumn],
    });
  }
  //#endregion
}
