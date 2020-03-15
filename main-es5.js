function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var appRoutes = [{
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Rahul-Yadav';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _home_hero_hero_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/hero/hero.component */
    "./src/app/home/hero/hero.component.ts");
    /* harmony import */


    var _home_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home/about/about.component */
    "./src/app/home/about/about.component.ts");
    /* harmony import */


    var _home_work_process_work_process_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home/work-process/work-process.component */
    "./src/app/home/work-process/work-process.component.ts");
    /* harmony import */


    var _home_passion_passion_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home/passion/passion.component */
    "./src/app/home/passion/passion.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _home_hero_hero_component__WEBPACK_IMPORTED_MODULE_7__["HeroComponent"], _home_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"], _home_work_process_work_process_component__WEBPACK_IMPORTED_MODULE_9__["WorkProcessComponent"], _home_passion_passion_component__WEBPACK_IMPORTED_MODULE_10__["PassionComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _home_hero_hero_component__WEBPACK_IMPORTED_MODULE_7__["HeroComponent"], _home_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"], _home_work_process_work_process_component__WEBPACK_IMPORTED_MODULE_9__["WorkProcessComponent"], _home_passion_passion_component__WEBPACK_IMPORTED_MODULE_10__["PassionComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 2,
      vars: 0,
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HeaderComponent_li_16_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span");
      }
    }

    function HeaderComponent_li_16_ul_5_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subMenu_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", subMenu_r6.navLink);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subMenu_r6.navItem);
      }
    }

    function HeaderComponent_li_16_ul_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_li_16_ul_5_li_1_Template, 3, 2, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var nav_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", nav_r1.submenu);
      }
    }

    function HeaderComponent_li_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_li_16_ng_template_3_Template, 1, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_li_16_ul_5_Template, 2, 1, "ul", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var nav_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", nav_r1.navLink);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nav_r1.navItem, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.submenu);
      }
    }

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.logoRahul = "rahul";
        this.logoYadav = "yadav";
        this.navLink = "home";
        this.submenu = true;
        this.navigation = [{
          navItem: "about me",
          navLink: "about",
          submenu: [{
            navItem: "my mission",
            navLink: "mission"
          }, {
            navItem: "my vision",
            navLink: "vision"
          }]
        }, {
          navItem: "work",
          navLink: "portfolio"
        }, {
          navItem: "online CV",
          navLink: "cv"
        }, {
          navItem: "hire me",
          navLink: "hire"
        }];
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 17,
      vars: 4,
      consts: [[1, "container"], [1, "header-content"], [1, "logo"], [3, "routerLink"], [1, "humberger-menu"], [1, "menu-cover"], [1, "cross"], [1, "nav-menu"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "navactive", 3, "routerLink"], ["test", ""], [4, "ngIfTest", "ngIf"], ["routerLinkActive", "submenuactive", 3, "routerLink"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HeaderComponent_li_16_Template, 6, 3, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.navLink);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.logoRahul);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.logoYadav);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navigation);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: ["header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  float: left;\n  padding: 44px 44px;\n  position: absolute;\n  left: 0;\n  right: auto;\n  top: 0;\n  bottom: auto;\n  z-index: 2;\n}\nheader[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 23px 0 0 40px;\n  float: left;\n}\nheader[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 80px;\n  text-transform: uppercase;\n  letter-spacing: -9px;\n  line-height: 56px;\n  margin: 0 0 17px 0;\n}\nheader[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Josefin Sans\", sans-serif;\n  font-weight: normal;\n  font-size: 42px;\n  color: #ff603c;\n  text-transform: uppercase;\n  padding: 0 0 0 56px;\n  letter-spacing: 9px;\n}\nheader[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::first-letter {\n  color: #fff;\n}\nheader[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:before {\n  width: 81px;\n  height: 81px;\n  position: absolute;\n  left: 0;\n  right: auto;\n  top: 0;\n  bottom: auto;\n  background-color: #fde756;\n  content: \"\";\n  z-index: -1;\n}\nheader[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:after {\n  width: 59px;\n  height: 59px;\n  position: absolute;\n  left: 58px;\n  right: auto;\n  top: 69px;\n  bottom: auto;\n  background-color: #ff603c;\n  content: \"\";\n  z-index: -2;\n}\nheader[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%] {\n  float: left;\n  margin: 48px 0 0 164px;\n}\nheader[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0 0 0 0;\n  padding: 0;\n  float: left;\n  position: relative;\n}\nheader[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 20px;\n  text-transform: capitalize;\n  font-weight: 700;\n  padding: 0 20px;\n  border-radius: 50px;\n  height: 44px;\n  line-height: 46px;\n  float: left;\n  position: relative;\n}\nheader[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 250px;\n  opacity: 0;\n  filter: Alpha(opacity=0);\n  visibility: hidden;\n  -webkit-visibility: hidden;\n  -moz-visibility: hidden;\n  -o-visibility: hidden;\n  -ms-visibility: hidden;\n  overflow: hidden;\n  transition: all 0.3s ease-in-out;\n  -webkit-transition: all 0.3s ease-in-out;\n  -moz-transition: all 0.3s ease-in-out;\n  -o-transition: all 0.3s ease-in-out;\n  -ms-transition: all 0.3s ease-in-out;\n  border-radius: 10px;\n}\nheader[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n  margin: 0;\n}\nheader[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 17px;\n  text-transform: capitalize;\n}\nheader[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background-color: #ff603c;\n  padding: 10px 0 10px 15px;\n  width: 100%;\n  height: auto;\n  line-height: normal;\n  border-radius: 0;\n  color: #fff;\n  border-bottom: rgba(255, 255, 255, 0.2) 1px solid;\n  font-size: 17px;\n  transition: all 0.3s ease-in-out;\n  -webkit-transition: all 0.3s ease-in-out;\n  -moz-transition: all 0.3s ease-in-out;\n  -o-transition: all 0.3s ease-in-out;\n  -ms-transition: all 0.3s ease-in-out;\n}\nheader[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #3e3a39;\n  color: #fff;\n}\nheader[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin: 0 0 0 20px;\n}\nheader[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%] {\n  background-color: #ff603c;\n  color: #fff;\n  padding-left: 40px;\n  padding-right: 40px;\n  font-weight: normal;\n  text-transform: uppercase;\n  font-size: 16px;\n  transition: all 0.3s ease-in-out;\n  -webkit-transition: all 0.3s ease-in-out;\n  -moz-transition: all 0.3s ease-in-out;\n  -o-transition: all 0.3s ease-in-out;\n  -ms-transition: all 0.3s ease-in-out;\n}\nheader[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%]:hover {\n  background-color: #3e3a39;\n  color: #fff;\n  border-color: #3e3a39;\n}\nheader[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   ul[_ngcontent-%COMP%] {\n  opacity: 1;\n  filter: Alpha(opacity=1);\n  visibility: visible;\n  -webkit-visibility: visible;\n  -moz-visibility: visible;\n  -o-visibility: visible;\n  -ms-visibility: visible;\n}\n.humberger-menu[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: #351055 2px solid;\n  position: absolute;\n  left: auto;\n  right: 22%;\n  top: 69px;\n  bottom: auto;\n  border-radius: 5px;\n  cursor: pointer;\n  display: block;\n  display: none;\n}\n.humberger-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 3px;\n  background-color: #351055;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n}\n.humberger-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before {\n  width: 60%;\n  height: 3px;\n  background-color: #351055;\n  position: absolute;\n  left: 0;\n  right: auto;\n  top: -6px;\n  bottom: auto;\n  margin: auto;\n  content: \"\";\n}\n.humberger-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n  width: 60%;\n  height: 3px;\n  background-color: #351055;\n  position: absolute;\n  left: auto;\n  right: 0;\n  top: 6px;\n  bottom: auto;\n  margin: auto;\n  content: \"\";\n}\n.cross[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: #351055 2px solid;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 100px;\n  bottom: auto;\n  margin: auto;\n  border-radius: 5px;\n  cursor: pointer;\n  display: none;\n}\n.cross[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 3px;\n  background-color: #351055;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  -o-transform: rotate(45deg);\n  transform-origin: center center;\n  -webkit-transform-origin: center center;\n  -moz-transform-origin: center center;\n  -o-transform-origin: center center;\n  transform-style: flat;\n  -webkit-transform-style: flat;\n  -moz-transform-style: flat;\n  -o-transform-style: flat;\n}\n.cross[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before {\n  width: 100%;\n  height: 3px;\n  background-color: #351055;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  transform: rotate(90deg);\n  -webkit-transform: rotate(90deg);\n  -moz-transform: rotate(90deg);\n  -o-transform: rotate(90deg);\n  transform-origin: center center;\n  -webkit-transform-origin: center center;\n  -moz-transform-origin: center center;\n  -o-transform-origin: center center;\n  transform-style: flat;\n  -webkit-transform-style: flat;\n  -moz-transform-style: flat;\n  -o-transform-style: flat;\n  content: \"\";\n}\n@media only screen and (min-width: 1600px) and (max-width: 1800px) {\n  header[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%] {\n    margin: 48px 0 0 65px;\n  }\n}\n@media only screen and (min-width: 1366px) and (max-width: 1750px) {\n  header[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%] {\n    margin: 48px 0 0 65px;\n  }\n}\n@media only screen and (min-width: 1024px) and (max-width: 1365px) {\n  header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    padding: 10px 0 0 17px;\n  }\n  header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 60px;\n    margin: 0 0 1px 0;\n  }\n  header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n    padding: 0 0 0 39px;\n  }\n  header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:before {\n    width: 60px;\n    height: 60px;\n  }\n  header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:after {\n    width: 40px;\n    height: 40px;\n    position: absolute;\n    left: 30px;\n    right: auto;\n    top: 48px;\n    bottom: auto;\n  }\n  header[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%] {\n    margin: 30px 0 0 30px;\n  }\n  header[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    margin: 0 0 0 10px;\n  }\n  header[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%] {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n  header[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 0 10px;\n    font-size: 18px;\n  }\n}\n@media only screen and (max-width: 1023px) {\n  header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    padding: 10px 0 0 17px;\n    margin: 0 0 0 100px;\n  }\n  header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 60px;\n    margin: 0 0 1px 0;\n  }\n  header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n    padding: 0 0 0 39px;\n  }\n  header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:before {\n    width: 60px;\n    height: 60px;\n    background-color: #e6d24f;\n  }\n  header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:after {\n    width: 40px;\n    height: 40px;\n    position: absolute;\n    left: 30px;\n    right: auto;\n    top: 48px;\n    bottom: auto;\n  }\n  header[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n  }\n  header[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  header[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n    padding: 25px 0;\n    font-size: 36px;\n    height: auto;\n    line-height: normal;\n    color: #fff;\n  }\n  header[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    margin: 0;\n    width: 100%;\n    float: left;\n    text-align: center;\n  }\n  header[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%] {\n    padding: 0 40px;\n    background-color: #fde756;\n    width: auto;\n    color: #3e3a39;\n    display: inline-block;\n    float: none;\n    height: 44px;\n    line-height: 46px;\n    font-weight: 700;\n  }\n  header[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    position: relative;\n    opacity: 1;\n    filter: Alpha(opacity=1);\n    visibility: visible;\n    -webkit-visibility: visible;\n    -moz-visibility: visible;\n    -o-visibility: visible;\n    -ms-visibility: visible;\n    top: 0;\n    width: 100%;\n  }\n  header[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    background-color: transparent !important;\n  }\n  header[_ngcontent-%COMP%]   .menu-cover[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #ff603c;\n    z-index: 10;\n    height: 100%;\n    width: 100%;\n    opacity: 0;\n    filter: Alpha(opacity=0);\n    position: fixed;\n    left: 0;\n    right: auto;\n    top: -100%;\n    bottom: auto;\n    transition: all 0.5s ease-in;\n    -webkit-transition: all 0.5s ease-in;\n    -moz-transition: all 0.5s ease-in;\n    -o-transition: all 0.5s ease-in;\n    -ms-transition: all 0.5s ease-in;\n  }\n  header[_ngcontent-%COMP%]   .menu-cover.open[_ngcontent-%COMP%] {\n    opacity: 1;\n    filter: Alpha(opacity=1);\n    position: fixed;\n    left: 0;\n    right: auto;\n    top: 0;\n    bottom: auto;\n  }\n  header[_ngcontent-%COMP%]   .menu-cover.close[_ngcontent-%COMP%] {\n    opacity: 0;\n    filter: Alpha(opacity=0);\n    position: fixed;\n    left: auto;\n    right: 0;\n    top: 100%;\n    bottom: auto;\n  }\n  header[_ngcontent-%COMP%]   .humberger-menu[_ngcontent-%COMP%] {\n    display: block;\n  }\n  header[_ngcontent-%COMP%]   .cross[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media only screen and (min-width: 480px) and (max-width: 639px) {\n  header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    margin: 0 0 0 46px;\n  }\n}\n@media only screen and (min-width: 360px) and (max-width: 479px) {\n  header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    margin: 0 0 0 -1px;\n  }\n  header[_ngcontent-%COMP%]   .humberger-menu[_ngcontent-%COMP%] {\n    right: 15%;\n  }\n}\n@media only screen and (max-width: 359px) {\n  header[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    margin: 0 0 0 0;\n  }\n  header[_ngcontent-%COMP%]   .humberger-menu[_ngcontent-%COMP%] {\n    right: 20px;\n    top: 43px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0k6XFxBTkdVTEFSIFRVVE9SSUFMXFxSYWh1bFlhZGF2XFxSYWh1bC1ZYWRhdi9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9JOlxcQU5HVUxBUiBUVVRPUklBTFxcUmFodWxZYWRhdlxcUmFodWwtWWFkYXYvc3JjXFxhc3NldHNcXGNzc1xcdmFyaWFibGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvSTpcXEFOR1VMQVIgVFVUT1JJQUxcXFJhaHVsWWFkYXZcXFJhaHVsLVlhZGF2L3NyY1xcYXNzZXRzXFxjc3NcXG1peGlucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLFdDd0JVO0VEeEJXLFlBQUE7RUFBYyxXQUFBO0VBQWEsa0JBQUE7RUVIaEQsa0JGR3lHO0VFRnpHLE9GRWtIO0VFRGxILFdGQ29IO0VFQXBILE1BQUE7RUFDQSxZRkQySDtFQUFPLFVBQUE7QUdPdEk7QUhMUTtFQUNJLGtCQUFBO0VBQW9CLHNCQUFBO0VBQXdCLFdBQUE7QUdTeEQ7QUhSWTtFQUNJLGdCQUFBO0VBQWtCLGVBQUE7RUFBaUIseUJBQUE7RUFBMkIsb0JBQUE7RUFBc0IsaUJBQUE7RUFBbUIsa0JBQUE7QUdldkg7QUhiWTtFQUNJLHVDQ0RJO0VEQzZCLG1CQUFBO0VBQXFCLGVBQUE7RUFBaUIsY0NaeEU7RURZOEYseUJBQUE7RUFBMkIsbUJBQUE7RUFBcUIsbUJBQUE7QUdxQjdKO0FIcEJnQjtFQUFnQixXQUFBO0FHdUJoQztBSHJCWTtFQUFVLFdBQUE7RUFBYSxZQUFBO0VFZC9CLGtCRmMrRDtFRWIvRCxPRmF3RTtFRVp4RSxXRlkwRTtFRVgxRSxNRlcrRTtFRVYvRSxZRlVpRjtFQUFPLHlCQ2QzRTtFRGM4RyxXQUFBO0VBQWEsV0FBQTtBR2lDNUk7QUhoQ1k7RUFBUyxXQUFBO0VBQWEsWUFBQTtFRWY5QixrQkZlOEQ7RUVkOUQsVUZjdUU7RUVidkUsV0ZhNEU7RUVaNUUsU0ZZaUY7RUVYakYsWUZXc0Y7RUFBTyx5QkNoQmxGO0VEZ0JtSCxXQUFBO0VBQWEsV0FBQTtBRzRDL0k7QUh6Q0k7RUFDSSxXQUFBO0VBQWEsc0JBQUE7QUc0Q3JCO0FIM0NRO0VBQ0ksZ0JBQUE7RUFBa0IsZUFBQTtFQUFpQixVQUFBO0VBQVksV0FBQTtFQUFhLGtCQUFBO0FHaUR4RTtBSGhEWTtFQUNJLGVBQUE7RUFBaUIsMEJBQUE7RUFBNEIsZ0JBQUE7RUFBa0IsZUFBQTtFQUFpQixtQkFBQTtFQUFxQixZQUFBO0VBQWMsaUJBQUE7RUFBbUIsV0FBQTtFQUFhLGtCQUFBO0FHMERuSztBSHhEWTtFQUNDLGtCQUFBO0VBQW9CLFNBQUE7RUFBVyxPQUFBO0VBQVMsWUFBQTtFRTJCakQsVUYzQmdGO0VFNEJoRix3QkFBQTtFQTlDQSxrQkZrQnVHO0VFakJ2RywwQkZpQnVHO0VFaEJ2Ryx1QkZnQnVHO0VFZnZHLHFCRmV1RztFRWR2RyxzQkZjdUc7RUFBVSxnQkFBQTtFRU1qSCxnQ0FBQTtFQUNBLHdDQUFBO0VBQ0EscUNBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VGVjZLLG1CQUFBO0FHMkVqTDtBSDFFYTtFQUNJLFdBQUE7RUFBYSxXQUFBO0VBQWEsU0FBQTtBRzhFM0M7QUg1RXFCO0VBQ0ksZ0JBQUE7RUFBa0IsZUFBQTtFQUFpQiwwQkFBQTtBR2dGNUQ7QUg3RWlCO0VBQ0cseUJDcENMO0VEb0NzQyx5QkFBQTtFQUEyQixXQUFBO0VBQWEsWUFBQTtFQUFjLG1CQUFBO0VBQXFCLGdCQUFBO0VBQWtCLFdDL0JwSTtFRCtCeUosaURBQUE7RUFBK0MsZUFBQTtFRUhsTixnQ0FBQTtFQUNBLHdDQUFBO0VBQ0EscUNBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0FDMkZKO0FIM0ZvQjtFQUNJLHlCQ3BDVDtFRG9DMEMsV0NqQzNDO0FFK0hkO0FIekZZO0VBQ0ksa0JBQUE7QUcyRmhCO0FIMUZnQjtFQUNJLHlCQzlDTDtFRDhDc0MsV0N6Q3ZDO0VEeUM0RCxrQkFBQTtFQUFvQixtQkFBQTtFQUFxQixtQkFBQTtFQUFxQix5QkFBQTtFQUEyQixlQUFBO0VFYi9KLGdDQUFBO0VBQ0Esd0NBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7QUNnSEo7QUh0R29CO0VBQ0kseUJDOUNUO0VEOEMwQyxXQzNDM0M7RUQyQ2dFLHFCQzlDL0Q7QUV3SmY7QUhyR2dCO0VFQ1osVUFBQTtFQUNBLHdCQUFBO0VBOUNBLG1CRjZDd0Q7RUU1Q3hELDJCRjRDd0Q7RUUzQ3hELHdCRjJDd0Q7RUUxQ3hELHNCRjBDd0Q7RUV6Q3hELHVCRnlDd0Q7QUc2RzVEO0FIbkdBO0VBQ0ksV0FBQTtFQUFhLFlBQUE7RUFBYyx5QkFBQTtFRWhFM0Isa0JGZ0VrRjtFRS9EbEYsVUYrRDJGO0VFOUQzRixVRjhEZ0c7RUU3RGhHLFNGNkRvRztFRTVEcEcsWUY0RHlHO0VBQU8sa0JBQUE7RUFBb0IsZUFBQTtFQUFpQixjQUFBO0VBQWdCLGFBQUE7QUdpSHpLO0FIaEhJO0VBQ0ksVUFBQTtFQUFZLFdBQUE7RUFBYSx5QkM1RGQ7RUNOZixrQkZrRW9GO0VFakVwRixPRmlFNkY7RUVoRTdGLFFGZ0UrRjtFRS9EL0YsTUYrRGlHO0VFOURqRyxTRjhEbUc7RUFBSSxZQUFBO0FHMEgzRztBSHpIUTtFQUNJLFVBQUE7RUFBWSxXQUFBO0VBQWEseUJDOURsQjtFQ05mLGtCRm9Fd0Y7RUVuRXhGLE9GbUVpRztFRWxFakcsV0ZrRW1HO0VFakVuRyxTRmlFd0c7RUVoRXhHLFlGZ0U2RztFQUFPLFlBQUE7RUFBYyxXQUFBO0FHb0l0STtBSGxJUTtFQUNJLFVBQUE7RUFBWSxXQUFBO0VBQWEseUJDakVsQjtFQ05mLGtCRnVFd0Y7RUV0RXhGLFVGc0VpRztFRXJFakcsUUZxRXNHO0VFcEV0RyxRRm9Fd0c7RUVuRXhHLFlGbUU0RztFQUFPLFlBQUE7RUFBYyxXQUFBO0FHNklySTtBSHpJQTtFQUNJLFdBQUE7RUFBYSxZQUFBO0VBQWMseUJBQUE7RUU1RTNCLGtCRjRFa0Y7RUUzRWxGLE9GMkUyRjtFRTFFM0YsUUYwRTZGO0VFekU3RixVRnlFK0Y7RUV4RS9GLFlGd0VxRztFQUFPLFlBQUE7RUFBYyxrQkFBQTtFQUFvQixlQUFBO0VBQWlCLGFBQUE7QUd1Sm5LO0FIdEpJO0VBQ0ksVUFBQTtFQUFZLFdBQUE7RUFBYSx5QkN4RWQ7RUNOZixrQkY4RW9GO0VFN0VwRixPRjZFNkY7RUU1RTdGLFFGNEUrRjtFRTNFL0YsTUYyRWlHO0VFMUVqRyxTRjBFbUc7RUFBSSxZQUFBO0VFNUR2Ryx3QkY0RHdJO0VFM0R4SSxnQ0YyRHdJO0VFMUR4SSw2QkYwRHdJO0VFekR4SSwyQkZ5RHdJO0VFeER4SSwrQkZ3RHNKO0VFdkR0Six1Q0Z1RHNKO0VFdER0SixvQ0ZzRHNKO0VFckR0SixrQ0ZxRHNKO0VFcER0SixxQkZvRG9LO0VFbkRwSyw2QkZtRG9LO0VFbERwSywwQkZrRG9LO0VFakRwSyx3QkZpRG9LO0FHNEt4SztBSDNLUTtFQUNJLFdBQUE7RUFBYSxXQUFBO0VBQWEseUJDMUVuQjtFQ05mLGtCRmdGeUY7RUUvRXpGLE9GK0VrRztFRTlFbEcsUUY4RW9HO0VFN0VwRyxNRjZFc0c7RUU1RXRHLFNGNEV3RztFQUFJLFlBQUE7RUU5RDVHLHdCRjhENkk7RUU3RDdJLGdDRjZENkk7RUU1RDdJLDZCRjRENkk7RUUzRDdJLDJCRjJENkk7RUUxRDdJLCtCRjBEMko7RUV6RDNKLHVDRnlEMko7RUV4RDNKLG9DRndEMko7RUV2RDNKLGtDRnVEMko7RUV0RDNKLHFCRnNEeUs7RUVyRHpLLDZCRnFEeUs7RUVwRHpLLDBCRm9EeUs7RUVuRHpLLHdCRm1EeUs7RUFBTyxXQUFBO0FHa01wTDtBSDdMQTtFQUVRO0lBQ0kscUJBQUE7RUcrTFY7QUFDRjtBSDVMQTtFQUVRO0lBQ0kscUJBQUE7RUc2TFY7QUFDRjtBSDFMQTtFQUdZO0lBQ0ksc0JBQUE7RUcwTGQ7RUh6TGM7SUFDSSxlQUFBO0lBQWlCLGlCQUFBO0VHNExuQztFSDFMYztJQUNJLGVBQUE7SUFBaUIsbUJBQUE7RUc2TG5DO0VIM0xjO0lBQVUsV0FBQTtJQUFhLFlBQUE7RUcrTHJDO0VIOUxjO0lBQVMsV0FBQTtJQUFhLFlBQUE7SUUvR2xDLGtCRitHa0U7SUU5R2xFLFVGOEcyRTtJRTdHM0UsV0Y2R2dGO0lFNUdoRixTRjRHcUY7SUUzR3JGLFlGMkcwRjtFR3VNNUY7RUhwTU07SUFDSSxxQkFBQTtFR3NNVjtFSHBNYztJQUNJLGtCQUFBO0VHc01sQjtFSHJNa0I7SUFDSSxrQkFBQTtJQUFvQixtQkFBQTtFR3dNMUM7RUhyTWM7SUFBRSxlQUFBO0lBQXFCLGVBQUE7RUd5TXJDO0FBQ0Y7QUhwTUE7RUFHWTtJQUNJLHNCQUFBO0lBQXdCLG1CQUFBO0VHcU10QztFSHBNYztJQUNJLGVBQUE7SUFBaUIsaUJBQUE7RUd1TW5DO0VIck1jO0lBQ0ksZUFBQTtJQUFpQixtQkFBQTtFR3dNbkM7RUh0TWM7SUFBVSxXQUFBO0lBQWEsWUFBQTtJQUFjLHlCQUFBO0VHMk1uRDtFSDFNYztJQUFTLFdBQUE7SUFBYSxZQUFBO0lFN0lsQyxrQkY2SWtFO0lFNUlsRSxVRjRJMkU7SUUzSTNFLFdGMklnRjtJRTFJaEYsU0YwSXFGO0lFeklyRixZRnlJMEY7RUdtTjVGO0VIaE5NO0lBQ0ksV0FBQTtJQUFhLFNBQUE7RUdtTnZCO0VIbE5VO0lBQ0ksV0FBQTtFR29OZDtFSG5OYztJQUFHLFdBQUE7SUFBYSxrQkFBQTtJQUFvQixlQUFBO0lBQWlCLGVBQUE7SUFBaUIsWUFBQTtJQUFjLG1CQUFBO0lBQXFCLFdDaEozRztFRTRXWjtFSDNOYztJQUNJLFNBQUE7SUFBVyxXQUFBO0lBQWEsV0FBQTtJQUFhLGtCQUFBO0VHZ092RDtFSC9Oa0I7SUFBRSxlQUFBO0lBQWlCLHlCQ3ZKdEI7SUR1SnlELFdBQUE7SUFBYSxjQ3RKeEU7SURzSjhGLHFCQUFBO0lBQXVCLFdBQUE7SUFBYSxZQUFBO0lBQWMsaUJBQUE7SUFBbUIsZ0JBQUE7RUcwT2hMO0VIeE9jO0lBQ0ksa0JBQUE7SUVyR2hCLFVGcUdzRDtJRXBHdEQsd0JBQUE7SUE5Q0EsbUJGa0o2RTtJRWpKN0UsMkJGaUo2RTtJRWhKN0Usd0JGZ0o2RTtJRS9JN0Usc0JGK0k2RTtJRTlJN0UsdUJGOEk2RTtJQUFVLE1BQUE7SUFBUSxXQUFBO0VHbVBqRztFSGpQc0I7SUFBRyx3Q0FBQTtFR29QekI7RUgvT007SUFDSSxhQUFBO0lBQWUsbUJBQUE7SUFBcUIsdUJBQUE7SUFBeUIseUJDbksxRDtJRG1LNkYsV0FBQTtJQUFhLFlBQUE7SUFBYyxXQUFBO0lFN0duSSxVRjZHaUs7SUU1R2pLLHdCQUFBO0lBdERBLGVGa0t5TDtJRWpLekwsT0ZpSytMO0lFaEsvTCxXRmdLaU07SUUvSmpNLFVGK0pzTTtJRTlKdE0sWUY4SjRNO0lFbEk1TSw0QkFBQTtJQUNBLG9DQUFBO0lBQ0EsaUNBQUE7SUFDQSwrQkFBQTtJQUNBLGdDQUFBO0VDaVlGO0VIbFFVO0lFOUdSLFVGK0c2QjtJRTlHN0Isd0JBQUE7SUF0REEsZUZvS21EO0lFbktuRCxPRm1LeUQ7SUVsS3pELFdGa0syRDtJRWpLM0QsTUZpS2dFO0lFaEtoRSxZRmdLa0U7RUcwUXBFO0VIeFFVO0lFakhSLFVGa0g2QjtJRWpIN0Isd0JBQUE7SUF0REEsZUZ1S21EO0lFdEtuRCxVRnNLeUQ7SUVyS3pELFFGcUs4RDtJRXBLOUQsU0ZvS2dFO0lFbktoRSxZRm1LcUU7RUdnUnZFO0VIN1FNO0lBQWtCLGNBQUE7RUdnUnhCO0VIL1FNO0lBQVEsY0FBQTtFR2tSZDtBQUNGO0FIL1FBO0VBR1k7SUFDSSxrQkFBQTtFRytRZDtBQUNGO0FIdlFBO0VBR1k7SUFDSSxrQkFBQTtFR3VRZDtFSHBRTTtJQUFpQixVQUFBO0VHdVF2QjtBQUNGO0FIalFBO0VBQ0k7SUFDSSxhQUFBO0VHbVFOO0VIalFVO0lBQ0ksZUFBQTtFR21RZDtFSGhRTTtJQUFpQixXQUFBO0lBQWEsU0FBQTtFR29RcEM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vYXNzZXRzL2Nzcy92YXJpYWJsZXMuY29tcG9uZW50LnNjc3NcIjtcclxuQGltcG9ydCBcIi4uLy4uL2Fzc2V0cy9jc3MvbWl4aW5zLmNvbXBvbmVudC5zY3NzXCI7XHJcblxyXG5oZWFkZXJ7XHJcbiAgICB3aWR0aDogJGNvbGdyaWQtMTAwOyBoZWlnaHQ6IGF1dG87IGZsb2F0OiBsZWZ0OyBwYWRkaW5nOiAkUGFkZGluZ1RvcDIgJFBhZGRpbmdib3R0b20yOyBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSwwLGF1dG8sMCxhdXRvKTsgei1pbmRleDogMjtcclxuICAgIC5oZWFkZXItY29udGVudHtcclxuICAgICAgICAubG9nb3tcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBwYWRkaW5nOiAyM3B4IDAgMCA0MHB4OyBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwOyBmb250LXNpemU6IDgwcHg7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IGxldHRlci1zcGFjaW5nOiAtOXB4OyBsaW5lLWhlaWdodDogNTZweDsgbWFyZ2luOiAwIDAgMTdweCAwOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkc3ViaGVhZGluZ0ZvbnR1c2U7IGZvbnQtd2VpZ2h0OiBub3JtYWw7IGZvbnQtc2l6ZTogNDJweDsgY29sb3I6ICRwcmltYXJ5Q29sb3I7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IHBhZGRpbmc6IDAgMCAwIDU2cHg7IGxldHRlci1zcGFjaW5nOiA5cHg7XHJcbiAgICAgICAgICAgICAgICAmOjpmaXJzdC1sZXR0ZXJ7Y29sb3I6I2ZmZjt9ICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpiZWZvcmV7IHdpZHRoOiA4MXB4OyBoZWlnaHQ6IDgxcHg7IEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLDAsYXV0bywwLGF1dG8pOyBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5Q29sb3I7IGNvbnRlbnQ6IFwiXCI7IHotaW5kZXg6IC0xO31cclxuICAgICAgICAgICAgJjphZnRlcnsgd2lkdGg6IDU5cHg7IGhlaWdodDogNTlweDsgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsNThweCxhdXRvLDY5cHgsYXV0byk7IGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5Q29sb3I7IGNvbnRlbnQ6IFwiXCI7IHotaW5kZXg6IC0yO31cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubmF2LW1lbnV7IFxyXG4gICAgICAgIGZsb2F0OiBsZWZ0OyBtYXJnaW46IDQ4cHggMCAwIDE2NHB4OyBcclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTsgbWFyZ2luOiAwIDAgMCAwOyBwYWRkaW5nOiAwOyBmbG9hdDogbGVmdDsgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4OyB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgZm9udC13ZWlnaHQ6IDcwMDsgcGFkZGluZzogMCAyMHB4OyBib3JkZXItcmFkaXVzOiA1MHB4OyBoZWlnaHQ6IDQ0cHg7IGxpbmUtaGVpZ2h0OiA0NnB4OyBmbG9hdDogbGVmdDsgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHVse1xyXG4gICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDEwMCU7IGxlZnQ6IDA7IHdpZHRoOiAyNTBweDsgQGluY2x1ZGUgb3BhY2l0eSgwKTsgQGluY2x1ZGUgdmlzaWJsaXR5KGhpZGRlbik7ICBvdmVyZmxvdzogaGlkZGVuOyBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwuM3MsZWFzZS1pbi1vdXQpOyBib3JkZXItcmFkaXVzOiAxMHB4OyBcclxuICAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBmbG9hdDogbGVmdDsgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7IGZvbnQtc2l6ZTogMTdweDsgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeUNvbG9yOyBwYWRkaW5nOiAxMHB4IDAgMTBweCAxNXB4OyB3aWR0aDogMTAwJTsgaGVpZ2h0OiBhdXRvOyBsaW5lLWhlaWdodDogbm9ybWFsOyBib3JkZXItcmFkaXVzOiAwOyBjb2xvcjogJGNvbW1vbkNvbG9yOyBib3JkZXItYm90dG9tOnJnYmEoMjU1LDI1NSwyNTUsLjIpIDFweCBzb2xpZCA7IGZvbnQtc2l6ZTogMTdweDsgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwsLjNzLGVhc2UtaW4tb3V0KTtcclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGVmYXVsdENvbG9yOyBjb2xvcjogJGNvbW1vbkNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjAgMCAwIDIwcHg7XHJcbiAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5Q29sb3I7IGNvbG9yOiAkY29tbW9uQ29sb3I7IHBhZGRpbmctbGVmdDogNDBweDsgcGFkZGluZy1yaWdodDogNDBweDsgZm9udC13ZWlnaHQ6IG5vcm1hbDsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgZm9udC1zaXplOiAxNnB4OyBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwuM3MsZWFzZS1pbi1vdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkZWZhdWx0Q29sb3I7IGNvbG9yOiAkY29tbW9uQ29sb3I7IGJvcmRlci1jb2xvcjogJGRlZmF1bHRDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIHVse1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMSk7IEBpbmNsdWRlIHZpc2libGl0eSh2aXNpYmxlKTsgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5odW1iZXJnZXItbWVudXsgXHJcbiAgICB3aWR0aDogNDBweDsgaGVpZ2h0OiA0MHB4OyBib3JkZXI6ICRhZGRpdGlvbkNvbG9yVHdvIDJweCBzb2xpZDsgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsYXV0bywyMiUsNjlweCxhdXRvKTsgYm9yZGVyLXJhZGl1czogNXB4OyBjdXJzb3I6IHBvaW50ZXI7IGRpc3BsYXk6IGJsb2NrOyBkaXNwbGF5OiBub25lO1xyXG4gICAgc3BhbntcclxuICAgICAgICB3aWR0aDogNjAlOyBoZWlnaHQ6IDNweDsgYmFja2dyb3VuZC1jb2xvcjogJGFkZGl0aW9uQ29sb3JUd287IEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLDAsMCwwLDApOyBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7IGhlaWdodDogM3B4OyBiYWNrZ3JvdW5kLWNvbG9yOiAkYWRkaXRpb25Db2xvclR3bzsgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsMCxhdXRvLC02cHgsYXV0byk7IG1hcmdpbjogYXV0bzsgY29udGVudDogXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgd2lkdGg6IDYwJTsgaGVpZ2h0OiAzcHg7IGJhY2tncm91bmQtY29sb3I6ICRhZGRpdGlvbkNvbG9yVHdvOyBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSxhdXRvLDAsNnB4LGF1dG8pOyBtYXJnaW46IGF1dG87IGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5jcm9zc3tcclxuICAgIHdpZHRoOiA0MHB4OyBoZWlnaHQ6IDQwcHg7IGJvcmRlcjogJGFkZGl0aW9uQ29sb3JUd28gMnB4IHNvbGlkOyBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSwwLDAsMTAwcHgsYXV0byk7IG1hcmdpbjogYXV0bzsgYm9yZGVyLXJhZGl1czogNXB4OyBjdXJzb3I6IHBvaW50ZXI7IGRpc3BsYXk6IG5vbmU7XHJcbiAgICBzcGFue1xyXG4gICAgICAgIHdpZHRoOiA2MCU7IGhlaWdodDogM3B4OyBiYWNrZ3JvdW5kLWNvbG9yOiAkYWRkaXRpb25Db2xvclR3bzsgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsMCwwLDAsMCk7IG1hcmdpbjogYXV0bzsgQGluY2x1ZGUgdHJhbnNmb3JtKHJvdGF0ZSg0NWRlZyksY2VudGVyIGNlbnRlcixmbGF0KTtcclxuICAgICAgICAmOmJlZm9yZXtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7IGhlaWdodDogM3B4OyBiYWNrZ3JvdW5kLWNvbG9yOiAkYWRkaXRpb25Db2xvclR3bzsgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsMCwwLDAsMCk7IG1hcmdpbjogYXV0bzsgQGluY2x1ZGUgdHJhbnNmb3JtKHJvdGF0ZSg5MGRlZyksY2VudGVyIGNlbnRlcixmbGF0KTsgY29udGVudDogXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxNjAwcHgpIGFuZCAobWF4LXdpZHRoOjE4MDBweCl7XHJcbiAgICBoZWFkZXJ7XHJcbiAgICAgICAgLm5hdi1tZW51eyBcclxuICAgICAgICAgICAgbWFyZ2luOiA0OHB4IDAgMCA2NXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTM2NnB4KSBhbmQgKG1heC13aWR0aDoxNzUwcHgpe1xyXG4gICAgaGVhZGVye1xyXG4gICAgICAgIC5uYXYtbWVudXsgXHJcbiAgICAgICAgICAgIG1hcmdpbjogNDhweCAwIDAgNjVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCkgYW5kIChtYXgtd2lkdGg6MTM2NXB4KXtcclxuICAgIGhlYWRlcntcclxuICAgICAgICAuaGVhZGVyLWNvbnRlbnR7XHJcbiAgICAgICAgICAgIC5sb2dve1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwIDAgMTdweDtcclxuICAgICAgICAgICAgICAgIGgxe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDsgbWFyZ2luOiAwIDAgMXB4IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7IHBhZGRpbmc6IDAgMCAwIDM5cHg7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmV7IHdpZHRoOiA2MHB4OyBoZWlnaHQ6IDYwcHg7fVxyXG4gICAgICAgICAgICAgICAgJjphZnRlcnsgd2lkdGg6IDQwcHg7IGhlaWdodDogNDBweDsgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsMzBweCxhdXRvLDQ4cHgsYXV0byk7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXYtbWVudXsgXHJcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCAwIDAgMzBweDtcclxuICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGR7IFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7IHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYXtwYWRkaW5nOiAwIDEwcHg7ICAgICBmb250LXNpemU6IDE4cHg7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyM3B4KXtcclxuICAgIGhlYWRlcntcclxuICAgICAgICAuaGVhZGVyLWNvbnRlbnR7XHJcbiAgICAgICAgICAgIC5sb2dve1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwIDAgMTdweDsgbWFyZ2luOiAwIDAgMCAxMDBweDtcclxuICAgICAgICAgICAgICAgIGgxe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDsgbWFyZ2luOiAwIDAgMXB4IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7IHBhZGRpbmc6IDAgMCAwIDM5cHg7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmV7IHdpZHRoOiA2MHB4OyBoZWlnaHQ6IDYwcHg7IGJhY2tncm91bmQtY29sb3I6ICNlNmQyNGY7fVxyXG4gICAgICAgICAgICAgICAgJjphZnRlcnsgd2lkdGg6IDQwcHg7IGhlaWdodDogNDBweDsgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsMzBweCxhdXRvLDQ4cHgsYXV0byk7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXYtbWVudXsgXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBtYXJnaW46IDA7ICBcclxuICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGF7IHdpZHRoOiAxMDAlOyB0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmc6IDI1cHggMDsgZm9udC1zaXplOiAzNnB4OyBoZWlnaHQ6IGF1dG87IGxpbmUtaGVpZ2h0OiBub3JtYWw7IGNvbG9yOiAkY29tbW9uQ29sb3I7fVxyXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkeyBcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7IHdpZHRoOiAxMDAlOyBmbG9hdDogbGVmdDsgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgICAgICAgICAgICAgICAgICBhe3BhZGRpbmc6IDAgNDBweDsgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeUNvbG9yOyB3aWR0aDogYXV0bzsgY29sb3I6ICRkZWZhdWx0Q29sb3I7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgZmxvYXQ6IG5vbmU7IGhlaWdodDogNDRweDsgbGluZS1oZWlnaHQ6IDQ2cHg7IGZvbnQtd2VpZ2h0OiA3MDA7fVxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHVse1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgIEBpbmNsdWRlIG9wYWNpdHkoMSk7IEBpbmNsdWRlIHZpc2libGl0eSh2aXNpYmxlKTsgdG9wOiAwOyB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXsgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDt9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51LWNvdmVye1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnlDb2xvcjsgICB6LWluZGV4OiAxMDsgaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwJTsgQGluY2x1ZGUgb3BhY2l0eSgwKTsgICBAaW5jbHVkZSBwb3NpdGlvbihmaXhlZCwwLGF1dG8sLTEwMCUsYXV0byk7IEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsLC41cyxlYXNlLWluKTtcclxuICAgICAgICAgICAgJi5vcGVue1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgxKTsgQGluY2x1ZGUgcG9zaXRpb24oZml4ZWQsMCxhdXRvLDAsYXV0byk7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICYuY2xvc2V7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDApOyBAaW5jbHVkZSBwb3NpdGlvbihmaXhlZCxhdXRvLDAsMTAwJSxhdXRvKTtcclxuICAgICAgICAgICAgfSAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmh1bWJlcmdlci1tZW51eyAgZGlzcGxheTogYmxvY2s7fVxyXG4gICAgICAgIC5jcm9zc3sgZGlzcGxheTogYmxvY2s7fVxyXG4gICAgfSAgICBcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjQ4MHB4KSBhbmQgKG1heC13aWR0aDo2MzlweCl7XHJcbiAgICBoZWFkZXJ7XHJcbiAgICAgICAgLmhlYWRlci1jb250ZW50e1xyXG4gICAgICAgICAgICAubG9nb3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgNDZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjM2MHB4KSBhbmQgKG1heC13aWR0aDo0NzlweCl7XHJcbiAgICBoZWFkZXJ7XHJcbiAgICAgICAgLmhlYWRlci1jb250ZW50e1xyXG4gICAgICAgICAgICAubG9nb3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgLTFweDtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuaHVtYmVyZ2VyLW1lbnV7IHJpZ2h0OiAxNSU7fVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzU5cHgpe1xyXG4gICAgaGVhZGVye1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgLmhlYWRlci1jb250ZW50e1xyXG4gICAgICAgICAgICAubG9nb3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMDtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuaHVtYmVyZ2VyLW1lbnV7IHJpZ2h0OiAyMHB4OyB0b3A6IDQzcHg7fVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG4gICAgXHJcblxyXG5cclxuIiwiJHByaW1hcnlDb2xvcjogI2ZmNjAzYztcclxuJHNlY29uZGFyeUNvbG9yOiAjZmRlNzU2O1xyXG4kZGVmYXVsdENvbG9yOiAjM2UzYTM5O1xyXG4kZGVmYXVsdENvbG9ydHdvOiAjMDUwNTA1O1xyXG4kbWFpbkNvbnRhaW5lcjogMTIwMHB4O1xyXG4kY29tbW9uQ29sb3I6ICNmZmY7XHJcbiRhZGRpdGlvbkNvbG9yT25lOiAjMTAyNjMxO1xyXG4kYWRkaXRpb25Db2xvclR3bzogIzM1MTA1NTtcclxuXHJcblxyXG4kaGVhZGluZ0ZvbnR1c2U6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xyXG4kc3ViaGVhZGluZ0ZvbnR1c2U6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4kZGVzY3JpYmVGb250dXNlOiAnQmVsbG90YSBUZXh0JywgY3Vyc2l2ZTtcclxuXHJcblxyXG4kbWFpbkNvbnRhaW5lcjogMTIwMHB4O1xyXG5cclxuJGNvbGdyaWQtMTA6IDEwJTtcclxuJGNvbGdyaWQtMjA6IDIwJTtcclxuJGNvbGdyaWQtMjU6IDI1JTtcclxuJGNvbGdyaWQtMzA6IDMwJTtcclxuJGNvbGdyaWQtMzM6IDMzLjMzMzMzJTtcclxuJGNvbGdyaWQtNDA6IDQwJTtcclxuJGNvbGdyaWQtNTA6IDUwJTtcclxuJGNvbGdyaWQtNjA6IDYwJTtcclxuJGNvbGdyaWQtNzA6IDcwJTtcclxuJGNvbGdyaWQtODA6IDgwJTtcclxuJGNvbGdyaWQtOTA6IDkwJTtcclxuJGNvbGdyaWQtMTAwOiAxMDAlO1xyXG5cclxuJFBhZGRpbmdUb3A6IDEyM3B4O1xyXG4kUGFkZGluZ2JvdHRvbTogMTIzcHg7XHJcblxyXG4kUGFkZGluZ1RvcDI6IDQ0cHg7XHJcbiRQYWRkaW5nYm90dG9tMjogNDRweDtcclxuXHJcbiRkZWZhdWx0LWZvbnRzaXplOiAxNnB4O1xyXG4kZm9udC1iaWctZXh0cmE6IDExMHB4O1xyXG4kZm9udC1iaWctdWx0cmE6IDcwcHg7XHJcbiRmb250LWJpZzogNDJweDtcclxuJGZvbnQtbWlkaXVtOiAzMHB4O1xyXG4kZm9udC1zbWFsbDogMjBweDsiLCJAbWl4aW4gcG9zaXRpb24oJHBvc2l0aW9uLCRsZWZ0LCRyaWdodCwkdG9wLCRib3R0b20pe1xyXG4gICAgcG9zaXRpb246ICRwb3NpdGlvbjtcclxuICAgIGxlZnQ6ICRsZWZ0O1xyXG4gICAgcmlnaHQ6ICRyaWdodDtcclxuICAgIHRvcDogJHRvcDtcclxuICAgIGJvdHRvbTogJGJvdHRvbTtcclxufVxyXG5cclxuQG1peGluIHZpc2libGl0eSgkdmFsdWUpe1xyXG4gICAgdmlzaWJpbGl0eTogJHZhbHVlO1xyXG4gICAgLXdlYmtpdC12aXNpYmlsaXR5OiAkdmFsdWU7XHJcbiAgICAtbW96LXZpc2liaWxpdHk6ICR2YWx1ZTtcclxuICAgIC1vLXZpc2liaWxpdHk6ICR2YWx1ZTtcclxuICAgIC1tcy12aXNpYmlsaXR5OiAkdmFsdWU7XHJcbn1cclxuXHJcblxyXG5cclxuQG1peGluIHRyYW5zZm9ybSgkdmFsdWUtdHlwZSwkb3JpZ2luLCRzdHlsZSl7XHJcbiAgICB0cmFuc2Zvcm06ICR2YWx1ZS10eXBlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICR2YWx1ZS10eXBlO1xyXG4gICAgLW1vei10cmFuc2Zvcm06ICR2YWx1ZS10eXBlO1xyXG4gICAgLW8tdHJhbnNmb3JtOiAkdmFsdWUtdHlwZTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46ICRvcmlnaW47XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46ICRvcmlnaW47XHJcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46ICRvcmlnaW47XHJcbiAgICAtby10cmFuc2Zvcm0tb3JpZ2luOiAkb3JpZ2luO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiAkc3R5bGU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogJHN0eWxlO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6ICRzdHlsZTtcclxuICAgIC1vLXRyYW5zZm9ybS1zdHlsZTogJHN0eWxlO1xyXG59XHJcbkBtaXhpbiB0cmFuc2l0aW9uKCR0cmFuc2l0aW9uLCRkdXJhdGlvbiwkYmVoYXZpb3VyKXtcclxuICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uICRkdXJhdGlvbiAkYmVoYXZpb3VyO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbiAkZHVyYXRpb24gJGJlaGF2aW91cjtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogJHRyYW5zaXRpb24gJGR1cmF0aW9uICRiZWhhdmlvdXI7XHJcbiAgICAtby10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbiAkZHVyYXRpb24gJGJlaGF2aW91cjtcclxuICAgIC1tcy10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbiAkZHVyYXRpb24gJGJlaGF2aW91cjtcclxufVxyXG5AbWl4aW4gZmlsdGVyKCR2YWx1ZSl7XHJcbiAgICBmaWx0ZXI6ICR2YWx1ZTtcclxuICAgIC13ZWJraXQtZmlsdGVyOiAkdmFsdWU7XHJcbiAgICAtbW96LWZpbHRlcjogJHZhbHVlO1xyXG4gICAgLW8tZmlsdGVyOiAkdmFsdWU7XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4KCR2YWx1ZSl7XHJcbiAgICBmbGV4OiAkdmFsdWU7XHJcbiAgICAtd2Via2l0LWZsZXg6ICR2YWx1ZTtcclxuICAgIC1tb3otZmxleDogJHZhbHVlO1xyXG4gICAgLW8tZmxleDogJHZhbHVlO1xyXG4gICAgLW1zLWZsZXg6ICR2YWx1ZTtcclxufVxyXG5AbWl4aW4gb3BhY2l0eSgkdmFsdWUpe1xyXG4gICAgb3BhY2l0eTogJHZhbHVlO1xyXG4gICAgZmlsdGVyOiBBbHBoYShvcGFjaXR5PSR2YWx1ZSk7XHJcbn1cclxuQG1peGluIGFuaW1hdGlvbigkbmFtZSwkdGltZSwkZmlsbG1vZGUpe1xyXG4gICAgYW5pbWF0aW9uOiAkbmFtZSAkdGltZSAkZmlsbG1vZGU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogJG5hbWUgJHRpbWUgJGZpbGxtb2RlO1xyXG4gICAgLW1vei1hbmltYXRpb246ICRuYW1lICR0aW1lICRmaWxsbW9kZTtcclxuICAgIC1vLWFuaW1hdGlvbjogJG5hbWUgJHRpbWUgJGZpbGxtb2RlO1xyXG4gICAgLW1zLWFuaW1hdGlvbjogJG5hbWUgJHRpbWUgJGZpbGxtb2RlOyBcclxufVxyXG4iLCJoZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogNDRweCA0NHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiBhdXRvO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogYXV0bztcbiAgei1pbmRleDogMjtcbn1cbmhlYWRlciAuaGVhZGVyLWNvbnRlbnQgLmxvZ28ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDIzcHggMCAwIDQwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuaGVhZGVyIC5oZWFkZXItY29udGVudCAubG9nbyBoMSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IC05cHg7XG4gIGxpbmUtaGVpZ2h0OiA1NnB4O1xuICBtYXJnaW46IDAgMCAxN3B4IDA7XG59XG5oZWFkZXIgLmhlYWRlci1jb250ZW50IC5sb2dvIGgyIHtcbiAgZm9udC1mYW1pbHk6IFwiSm9zZWZpbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogNDJweDtcbiAgY29sb3I6ICNmZjYwM2M7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDAgMCAwIDU2cHg7XG4gIGxldHRlci1zcGFjaW5nOiA5cHg7XG59XG5oZWFkZXIgLmhlYWRlci1jb250ZW50IC5sb2dvIGgyOjpmaXJzdC1sZXR0ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cbmhlYWRlciAuaGVhZGVyLWNvbnRlbnQgLmxvZ286YmVmb3JlIHtcbiAgd2lkdGg6IDgxcHg7XG4gIGhlaWdodDogODFweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogYXV0bztcbiAgdG9wOiAwO1xuICBib3R0b206IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGU3NTY7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHotaW5kZXg6IC0xO1xufVxuaGVhZGVyIC5oZWFkZXItY29udGVudCAubG9nbzphZnRlciB7XG4gIHdpZHRoOiA1OXB4O1xuICBoZWlnaHQ6IDU5cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNThweDtcbiAgcmlnaHQ6IGF1dG87XG4gIHRvcDogNjlweDtcbiAgYm90dG9tOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2MDNjO1xuICBjb250ZW50OiBcIlwiO1xuICB6LWluZGV4OiAtMjtcbn1cbmhlYWRlciAubmF2LW1lbnUge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiA0OHB4IDAgMCAxNjRweDtcbn1cbmhlYWRlciAubmF2LW1lbnUgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDAgMCAwIDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5oZWFkZXIgLm5hdi1tZW51IGxpIGEge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGhlaWdodDogNDRweDtcbiAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5oZWFkZXIgLm5hdi1tZW51IGxpIHVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAyNTBweDtcbiAgb3BhY2l0eTogMDtcbiAgZmlsdGVyOiBBbHBoYShvcGFjaXR5PTApO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIC13ZWJraXQtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtbW96LXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLW8tdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtbXMtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbmhlYWRlciAubmF2LW1lbnUgbGkgdWwgbGkge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMDtcbn1cbmhlYWRlciAubmF2LW1lbnUgbGkgdWwgbGk6bGFzdC1jaGlsZCBhIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbmhlYWRlciAubmF2LW1lbnUgbGkgdWwgbGkgYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjYwM2M7XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMXB4IHNvbGlkO1xuICBmb250LXNpemU6IDE3cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuaGVhZGVyIC5uYXYtbWVudSBsaSB1bCBsaSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlM2EzOTtcbiAgY29sb3I6ICNmZmY7XG59XG5oZWFkZXIgLm5hdi1tZW51IGxpOmxhc3QtY2hpbGQge1xuICBtYXJnaW46IDAgMCAwIDIwcHg7XG59XG5oZWFkZXIgLm5hdi1tZW51IGxpOmxhc3QtY2hpbGQgYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjYwM2M7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5oZWFkZXIgLm5hdi1tZW51IGxpOmxhc3QtY2hpbGQgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZTNhMzk7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICMzZTNhMzk7XG59XG5oZWFkZXIgLm5hdi1tZW51IGxpOmhvdmVyIHVsIHtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBBbHBoYShvcGFjaXR5PTEpO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAtd2Via2l0LXZpc2liaWxpdHk6IHZpc2libGU7XG4gIC1tb3otdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgLW8tdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgLW1zLXZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5odW1iZXJnZXItbWVudSB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlcjogIzM1MTA1NSAycHggc29saWQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IDIyJTtcbiAgdG9wOiA2OXB4O1xuICBib3R0b206IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5odW1iZXJnZXItbWVudSBzcGFuIHtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTEwNTU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG59XG4uaHVtYmVyZ2VyLW1lbnUgc3BhbjpiZWZvcmUge1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1MTA1NTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogYXV0bztcbiAgdG9wOiAtNnB4O1xuICBib3R0b206IGF1dG87XG4gIG1hcmdpbjogYXV0bztcbiAgY29udGVudDogXCJcIjtcbn1cbi5odW1iZXJnZXItbWVudSBzcGFuOmFmdGVyIHtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTEwNTU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNnB4O1xuICBib3R0b206IGF1dG87XG4gIG1hcmdpbjogYXV0bztcbiAgY29udGVudDogXCJcIjtcbn1cblxuLmNyb3NzIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyOiAjMzUxMDU1IDJweCBzb2xpZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAxMDBweDtcbiAgYm90dG9tOiBhdXRvO1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBub25lO1xufVxuLmNyb3NzIHNwYW4ge1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1MTA1NTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gIC1vLXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gIHRyYW5zZm9ybS1zdHlsZTogZmxhdDtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XG4gIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBmbGF0O1xuICAtby10cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XG59XG4uY3Jvc3Mgc3BhbjpiZWZvcmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTEwNTU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAtby10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICB0cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBmbGF0O1xuICAtbW96LXRyYW5zZm9ybS1zdHlsZTogZmxhdDtcbiAgLW8tdHJhbnNmb3JtLXN0eWxlOiBmbGF0O1xuICBjb250ZW50OiBcIlwiO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkgYW5kIChtYXgtd2lkdGg6IDE4MDBweCkge1xuICBoZWFkZXIgLm5hdi1tZW51IHtcbiAgICBtYXJnaW46IDQ4cHggMCAwIDY1cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM2NnB4KSBhbmQgKG1heC13aWR0aDogMTc1MHB4KSB7XG4gIGhlYWRlciAubmF2LW1lbnUge1xuICAgIG1hcmdpbjogNDhweCAwIDAgNjVweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LXdpZHRoOiAxMzY1cHgpIHtcbiAgaGVhZGVyIC5oZWFkZXItY29udGVudCAubG9nbyB7XG4gICAgcGFkZGluZzogMTBweCAwIDAgMTdweDtcbiAgfVxuICBoZWFkZXIgLmhlYWRlci1jb250ZW50IC5sb2dvIGgxIHtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgbWFyZ2luOiAwIDAgMXB4IDA7XG4gIH1cbiAgaGVhZGVyIC5oZWFkZXItY29udGVudCAubG9nbyBoMiB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIHBhZGRpbmc6IDAgMCAwIDM5cHg7XG4gIH1cbiAgaGVhZGVyIC5oZWFkZXItY29udGVudCAubG9nbzpiZWZvcmUge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgfVxuICBoZWFkZXIgLmhlYWRlci1jb250ZW50IC5sb2dvOmFmdGVyIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDMwcHg7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgdG9wOiA0OHB4O1xuICAgIGJvdHRvbTogYXV0bztcbiAgfVxuICBoZWFkZXIgLm5hdi1tZW51IHtcbiAgICBtYXJnaW46IDMwcHggMCAwIDMwcHg7XG4gIH1cbiAgaGVhZGVyIC5uYXYtbWVudSBsaTpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW46IDAgMCAwIDEwcHg7XG4gIH1cbiAgaGVhZGVyIC5uYXYtbWVudSBsaTpsYXN0LWNoaWxkIGEge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG4gIGhlYWRlciAubmF2LW1lbnUgbGkgYSB7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgaGVhZGVyIC5oZWFkZXItY29udGVudCAubG9nbyB7XG4gICAgcGFkZGluZzogMTBweCAwIDAgMTdweDtcbiAgICBtYXJnaW46IDAgMCAwIDEwMHB4O1xuICB9XG4gIGhlYWRlciAuaGVhZGVyLWNvbnRlbnQgLmxvZ28gaDEge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBtYXJnaW46IDAgMCAxcHggMDtcbiAgfVxuICBoZWFkZXIgLmhlYWRlci1jb250ZW50IC5sb2dvIGgyIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgcGFkZGluZzogMCAwIDAgMzlweDtcbiAgfVxuICBoZWFkZXIgLmhlYWRlci1jb250ZW50IC5sb2dvOmJlZm9yZSB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmQyNGY7XG4gIH1cbiAgaGVhZGVyIC5oZWFkZXItY29udGVudCAubG9nbzphZnRlciB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAzMHB4O1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIHRvcDogNDhweDtcbiAgICBib3R0b206IGF1dG87XG4gIH1cbiAgaGVhZGVyIC5uYXYtbWVudSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIGhlYWRlciAubmF2LW1lbnUgbGkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIGhlYWRlciAubmF2LW1lbnUgbGkgYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDI1cHggMDtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgaGVhZGVyIC5uYXYtbWVudSBsaTpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIGhlYWRlciAubmF2LW1lbnUgbGk6bGFzdC1jaGlsZCBhIHtcbiAgICBwYWRkaW5nOiAwIDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZTc1NjtcbiAgICB3aWR0aDogYXV0bztcbiAgICBjb2xvcjogIzNlM2EzOTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgaGVhZGVyIC5uYXYtbWVudSBsaSB1bCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZmlsdGVyOiBBbHBoYShvcGFjaXR5PTEpO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgLXdlYmtpdC12aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIC1tb3otdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAtby12aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIC1tcy12aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBoZWFkZXIgLm5hdi1tZW51IGxpIHVsIGxpIGEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIH1cbiAgaGVhZGVyIC5tZW51LWNvdmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjAzYztcbiAgICB6LWluZGV4OiAxMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBmaWx0ZXI6IEFscGhhKG9wYWNpdHk9MCk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgdG9wOiAtMTAwJTtcbiAgICBib3R0b206IGF1dG87XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gIH1cbiAgaGVhZGVyIC5tZW51LWNvdmVyLm9wZW4ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZmlsdGVyOiBBbHBoYShvcGFjaXR5PTEpO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IGF1dG87XG4gIH1cbiAgaGVhZGVyIC5tZW51LWNvdmVyLmNsb3NlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGZpbHRlcjogQWxwaGEob3BhY2l0eT0wKTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDEwMCU7XG4gICAgYm90dG9tOiBhdXRvO1xuICB9XG4gIGhlYWRlciAuaHVtYmVyZ2VyLW1lbnUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIGhlYWRlciAuY3Jvc3Mge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSBhbmQgKG1heC13aWR0aDogNjM5cHgpIHtcbiAgaGVhZGVyIC5oZWFkZXItY29udGVudCAubG9nbyB7XG4gICAgbWFyZ2luOiAwIDAgMCA0NnB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM2MHB4KSBhbmQgKG1heC13aWR0aDogNDc5cHgpIHtcbiAgaGVhZGVyIC5oZWFkZXItY29udGVudCAubG9nbyB7XG4gICAgbWFyZ2luOiAwIDAgMCAtMXB4O1xuICB9XG4gIGhlYWRlciAuaHVtYmVyZ2VyLW1lbnUge1xuICAgIHJpZ2h0OiAxNSU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzU5cHgpIHtcbiAgaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIGhlYWRlciAuaGVhZGVyLWNvbnRlbnQgLmxvZ28ge1xuICAgIG1hcmdpbjogMCAwIDAgMDtcbiAgfVxuICBoZWFkZXIgLmh1bWJlcmdlci1tZW51IHtcbiAgICByaWdodDogMjBweDtcbiAgICB0b3A6IDQzcHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/about/about.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/home/about/about.component.ts ***!
    \***********************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppHomeAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 2,
      vars: 0,
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/hero/hero.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/hero/hero.component.ts ***!
    \*********************************************/

  /*! exports provided: HeroComponent */

  /***/
  function srcAppHomeHeroHeroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeroComponent", function () {
      return HeroComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var HeroComponent =
    /*#__PURE__*/
    function () {
      function HeroComponent() {
        _classCallCheck(this, HeroComponent);

        this.herospan = "Hi there,";
        this.herotitle = "I’m";
        this.herotitleRahul = "rahul";
        this.herosubtitle = "yadav";
        this.jobPositin = "Senior Front-end";
        this.herodrescription = "Developer @";
        this.companyname = "Codearts Solutions PVT. LTD";
        this.buttontext1 = "say hello";
        this.buttontext2 = "about me";
        this.buttontext1Url = "#";
        this.buttontext2Url = "#";
      }

      _createClass(HeroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeroComponent;
    }();

    HeroComponent.ɵfac = function HeroComponent_Factory(t) {
      return new (t || HeroComponent)();
    };

    HeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeroComponent,
      selectors: [["app-hero"]],
      decls: 52,
      vars: 15,
      consts: [[1, "hero-section"], [1, "icondetails-back"], [1, "icontop-group"], [1, "span1"], [1, "span2"], [1, "purple-iocn-group"], [1, "icontop-group2"], [1, "icontop-group3"], [1, "container"], [1, "hero-content-area"], [1, "image-back"], [1, "jobP"], [1, "comN"], [1, "clear"], [1, "custom-button-back"], [3, "href"]],
      template: function HeroComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "b", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.herospan);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.herotitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 11, ctx.herotitleRahul));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 13, ctx.herosubtitle));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.jobPositin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.herodrescription, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.companyname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.buttontext1Url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttontext1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.buttontext2Url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttontext2);
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"]],
      styles: [".hero-section[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  padding: 215px 0 0 0;\n  overflow: hidden;\n}\n.hero-section[_ngcontent-%COMP%]:after {\n  width: 30%;\n  height: 100%;\n  position: absolute;\n  left: auto;\n  right: 0;\n  top: 0;\n  bottom: auto;\n  background-color: #fde756;\n  border-radius: 0 0 0 80px;\n  content: \"\";\n}\n.hero-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  min-height: 602px;\n}\n.hero-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]::before {\n  width: 233px;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  right: auto;\n  top: 0;\n  bottom: auto;\n  background-color: #fde756;\n  border-radius: 80px 0 0 80px;\n  content: \"\";\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%] {\n  padding: 61px 0 0 128px;\n  position: relative;\n  z-index: 2;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Josefin Sans\", sans-serif;\n  font-size: 20px;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 110px;\n  line-height: 110px;\n  font-weight: 700;\n  text-shadow: rgba(147, 147, 147, 0.75) 1px 0 10px;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  letter-spacing: -14px;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: 42px;\n  color: #ff603c;\n  letter-spacing: 43.5px;\n  padding: 0 0 0 7px;\n  margin: -19px 0 0 0;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: 30px;\n  line-height: 39px;\n  margin: 15px 0 0 0;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   .jobP[_ngcontent-%COMP%] {\n  font-weight: normal;\n  color: #726408;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   .comN[_ngcontent-%COMP%] {\n  font-weight: normal;\n  color: #ff603c;\n  letter-spacing: 1px;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   .custom-button-back[_ngcontent-%COMP%] {\n  margin: 40px 0 0 0;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   .custom-button-back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 0 26px 0 0;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   .custom-button-back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child {\n  margin: 0;\n  background-color: #fff;\n  color: #3e3a39;\n  border-color: #3e3a39;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   .custom-button-back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #3e3a39;\n  color: #fff;\n  border-color: #3e3a39;\n}\n.hero-section[_ngcontent-%COMP%]   .image-back[_ngcontent-%COMP%] {\n  width: 410px;\n  height: 437px;\n  background-color: #ff603c;\n  border-radius: 80px 0 0 80px;\n  position: absolute;\n  left: auto;\n  right: 17px;\n  top: 0;\n  bottom: auto;\n  margin: auto;\n}\n.hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 30%;\n  height: 100%;\n  z-index: 1;\n  float: left;\n}\n.hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group[_ngcontent-%COMP%] {\n  position: absolute;\n  left: auto;\n  right: 46px;\n  top: 0;\n  bottom: auto;\n  width: 315px;\n  height: 227px;\n}\n.hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group[_ngcontent-%COMP%]   .span1[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: #ff603c 25px solid;\n  border-top: none;\n  float: left;\n}\n.hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group[_ngcontent-%COMP%]   .span2[_ngcontent-%COMP%] {\n  width: 122px;\n  height: 152px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: auto;\n  bottom: -76px;\n  margin: auto;\n  transform: rotate(44deg);\n  -webkit-transform: rotate(44deg);\n  -moz-transform: rotate(44deg);\n  -o-transform: rotate(44deg);\n  transform-origin: center center;\n  -webkit-transform-origin: center center;\n  -moz-transform-origin: center center;\n  -o-transform-origin: center center;\n  transform-style: flat;\n  -webkit-transform-style: flat;\n  -moz-transform-style: flat;\n  -o-transform-style: flat;\n}\n.hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group[_ngcontent-%COMP%]   .span2[_ngcontent-%COMP%]   .purple-iocn-group[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 51px;\n  position: relative;\n  float: left;\n  margin: 0 0 17px 0;\n}\n.hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group[_ngcontent-%COMP%]   .span2[_ngcontent-%COMP%]   .purple-iocn-group[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n  float: left;\n  background-color: #351055;\n  margin: 0 18px 0 0;\n  border-radius: 50%;\n  position: relative;\n}\n.hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group[_ngcontent-%COMP%]   .span2[_ngcontent-%COMP%]   .purple-iocn-group[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  margin: 0;\n}\n.hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group[_ngcontent-%COMP%]   .span2[_ngcontent-%COMP%]   .purple-iocn-group[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  width: 17px;\n  height: 17px;\n  float: left;\n  background-color: #351055;\n  margin: 0 18px 0 0;\n  border-radius: 50%;\n  content: \"\";\n  position: absolute;\n  top: 34px;\n  left: 0;\n}\n.hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group2[_ngcontent-%COMP%] {\n  position: absolute;\n  left: auto;\n  right: 46px;\n  top: 370px;\n  bottom: auto;\n  width: 342px;\n  height: 94px;\n}\n.hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group2[_ngcontent-%COMP%]   .span1[_ngcontent-%COMP%] {\n  width: 94px;\n  height: 94px;\n  float: left;\n  border: #351055 15px solid;\n  transform: rotate(44deg);\n  -webkit-transform: rotate(44deg);\n  -moz-transform: rotate(44deg);\n  -o-transform: rotate(44deg);\n  transform-origin: center center;\n  -webkit-transform-origin: center center;\n  -moz-transform-origin: center center;\n  -o-transform-origin: center center;\n  transform-style: flat;\n  -webkit-transform-style: flat;\n  -moz-transform-style: flat;\n  -o-transform-style: flat;\n  position: absolute;\n  left: 0;\n  right: auto;\n  top: 0;\n  bottom: auto;\n}\n.hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group2[_ngcontent-%COMP%]   .span2[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  border-top: 34px solid transparent;\n  border-bottom: 34px solid transparent;\n  border-right: 50px solid #ff603c;\n  position: absolute;\n  left: auto;\n  right: 61px;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n}\n.hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group2[_ngcontent-%COMP%]   .span2[_ngcontent-%COMP%]::after {\n  width: 0;\n  height: 0;\n  border-top: 34px solid transparent;\n  border-bottom: 34px solid transparent;\n  border-right: 50px solid #fff;\n  position: absolute;\n  left: 61px;\n  right: auto;\n  top: auto;\n  bottom: -34px;\n  content: \"\";\n}\n.hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group3[_ngcontent-%COMP%] {\n  position: absolute;\n  left: auto;\n  right: 105px;\n  top: auto;\n  bottom: 0;\n  width: 442px;\n  height: 257px;\n}\n.hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group3[_ngcontent-%COMP%]   .span1[_ngcontent-%COMP%] {\n  width: 39px;\n  height: 39px;\n  float: left;\n  position: absolute;\n  left: auto;\n  right: 0;\n  top: 0;\n  bottom: auto;\n  background-color: #351055;\n  border-radius: 100%;\n}\n.hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group3[_ngcontent-%COMP%]   .span2[_ngcontent-%COMP%] {\n  width: 375px;\n  height: 375px;\n  float: left;\n  position: absolute;\n  left: auto;\n  right: 0;\n  top: 167px;\n  bottom: auto;\n  border: #fff 25px solid;\n  border-radius: 100%;\n}\n@media only screen and (min-width: 1600px) and (max-width: 1800px) {\n  .hero-section[_ngcontent-%COMP%]   .image-back[_ngcontent-%COMP%] {\n    position: absolute;\n    left: auto;\n    right: 178px;\n    top: 0;\n    bottom: auto;\n  }\n}\n@media only screen and (min-width: 1366px) and (max-width: 1599px) {\n  .hero-section[_ngcontent-%COMP%]   .image-back[_ngcontent-%COMP%] {\n    position: absolute;\n    left: auto;\n    right: 300px;\n    top: 0;\n    bottom: auto;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group3[_ngcontent-%COMP%]   .span2[_ngcontent-%COMP%] {\n    position: absolute;\n    left: auto;\n    right: -94px;\n    top: 167px;\n    bottom: auto;\n  }\n}\n@media only screen and (min-width: 1024px) and (max-width: 1365px) {\n  .hero-section[_ngcontent-%COMP%]:after {\n    width: 36%;\n  }\n  .hero-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    min-height: 490px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]:before {\n    width: 144px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .image-back[_ngcontent-%COMP%] {\n    position: absolute;\n    left: auto;\n    right: 300px;\n    top: 0;\n    bottom: auto;\n    width: 300px;\n    height: 354px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%] {\n    padding: 61px 0 0 67px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 24px;\n    margin: 0;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 80px;\n    line-height: 80px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    letter-spacing: 17.5px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   .custom-button-back[_ngcontent-%COMP%] {\n    margin: 9px 0 0 0;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group[_ngcontent-%COMP%] {\n    width: 235px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group2[_ngcontent-%COMP%] {\n    width: 269px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group3[_ngcontent-%COMP%]   .span2[_ngcontent-%COMP%] {\n    position: absolute;\n    left: auto;\n    right: -94px;\n    top: 167px;\n    bottom: auto;\n  }\n}\n@media only screen and (max-width: 1023px) {\n  .hero-section[_ngcontent-%COMP%]:after {\n    width: 100%;\n    border-radius: 0;\n  }\n  .hero-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    min-height: 490px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]:before {\n    width: 144px;\n    display: none;\n  }\n  .hero-section[_ngcontent-%COMP%]   .image-back[_ngcontent-%COMP%] {\n    position: absolute;\n    left: auto;\n    right: 300px;\n    top: 0;\n    bottom: auto;\n    width: 200px;\n    height: 200px;\n    border-radius: 100%;\n    right: 0;\n    left: 0;\n    margin: auto;\n    top: -64px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%] {\n    padding: 61px 0 0 67px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 24px;\n    margin: 0;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 80px;\n    line-height: 80px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    letter-spacing: 17.5px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   .custom-button-back[_ngcontent-%COMP%] {\n    margin: 9px 0 0 0;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group[_ngcontent-%COMP%] {\n    width: 80%;\n    height: 270px;\n    right: 0;\n    left: 0;\n    margin: auto;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group[_ngcontent-%COMP%]   .span2[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group[_ngcontent-%COMP%]   .span1[_ngcontent-%COMP%] {\n    border-radius: 0 0 500px 500px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group2[_ngcontent-%COMP%] {\n    width: 269px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group3[_ngcontent-%COMP%]   .span2[_ngcontent-%COMP%] {\n    position: absolute;\n    left: auto;\n    right: -94px;\n    top: 167px;\n    bottom: auto;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group3[_ngcontent-%COMP%]   .span1[_ngcontent-%COMP%] {\n    top: 60px;\n  }\n}\n@media only screen and (max-width: 640px) {\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group3[_ngcontent-%COMP%]   .span2[_ngcontent-%COMP%] {\n    position: absolute;\n    left: auto;\n    right: -94px;\n    top: 196px;\n    bottom: auto;\n  }\n}\n@media only screen and (min-width: 480px) and (max-width: 639px) {\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group2[_ngcontent-%COMP%] {\n    position: absolute;\n    left: auto;\n    right: 0;\n    top: 370px;\n    bottom: auto;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group2[_ngcontent-%COMP%]   .span1[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 135px;\n    right: auto;\n    top: -90px;\n    bottom: auto;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group2[_ngcontent-%COMP%]   .span2[_ngcontent-%COMP%] {\n    transform: rotate(90deg);\n    -webkit-transform: rotate(90deg);\n    -moz-transform: rotate(90deg);\n    -o-transform: rotate(90deg);\n    transform-origin: center center;\n    -webkit-transform-origin: center center;\n    -moz-transform-origin: center center;\n    -o-transform-origin: center center;\n    transform-style: flat;\n    -webkit-transform-style: flat;\n    -moz-transform-style: flat;\n    -o-transform-style: flat;\n    position: absolute;\n    left: auto;\n    right: 61px;\n    top: 0;\n    bottom: 0;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group3[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: auto;\n    bottom: 0;\n    margin: auto;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group3[_ngcontent-%COMP%]   .span1[_ngcontent-%COMP%] {\n    position: absolute;\n    left: auto;\n    right: 0;\n    top: -74px;\n    bottom: auto;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group3[_ngcontent-%COMP%]   .span2[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 215px;\n    bottom: auto;\n    margin: auto;\n  }\n}\n@media only screen and (min-width: 360px) and (max-width: 479px) {\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%] {\n    padding: 61px 0 0 18px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group2[_ngcontent-%COMP%] {\n    position: absolute;\n    left: auto;\n    right: -12px;\n    top: 370px;\n    bottom: auto;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group2[_ngcontent-%COMP%]   .span1[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 135px;\n    right: auto;\n    top: -90px;\n    bottom: auto;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group2[_ngcontent-%COMP%]   .span2[_ngcontent-%COMP%] {\n    transform: rotate(90deg);\n    -webkit-transform: rotate(90deg);\n    -moz-transform: rotate(90deg);\n    -o-transform: rotate(90deg);\n    transform-origin: center center;\n    -webkit-transform-origin: center center;\n    -moz-transform-origin: center center;\n    -o-transform-origin: center center;\n    transform-style: flat;\n    -webkit-transform-style: flat;\n    -moz-transform-style: flat;\n    -o-transform-style: flat;\n    position: absolute;\n    left: auto;\n    right: 61px;\n    top: 0;\n    bottom: 0;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group3[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: auto;\n    bottom: 0;\n    margin: auto;\n    width: 100%;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group3[_ngcontent-%COMP%]   .span1[_ngcontent-%COMP%] {\n    position: absolute;\n    left: auto;\n    right: 14px;\n    top: -74px;\n    bottom: auto;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%]   .icontop-group3[_ngcontent-%COMP%]   .span2[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 215px;\n    bottom: auto;\n    margin: auto;\n  }\n  .hero-section[_ngcontent-%COMP%]   .image-back[_ngcontent-%COMP%] {\n    width: 150px;\n    height: 150px;\n  }\n}\n@media only screen and (max-width: 359px) {\n  .hero-section[_ngcontent-%COMP%] {\n    padding: 136px 0 0 0;\n    text-align: center;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 60px;\n    line-height: 60px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    letter-spacing: -9px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 20px;\n    padding: 0;\n    letter-spacing: 0;\n    text-align: center;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 30px;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   .custom-button-back[_ngcontent-%COMP%] {\n    margin: 9px 0 0 0;\n    width: 100%;\n    text-align: center;\n  }\n  .hero-section[_ngcontent-%COMP%]   .hero-content-area[_ngcontent-%COMP%]   .custom-button-back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: inline-block;\n    float: none;\n    padding: 0 20px;\n    margin: 0 15px 0 0;\n  }\n  .hero-section[_ngcontent-%COMP%]   .icondetails-back[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .hero-section[_ngcontent-%COMP%]   .image-back[_ngcontent-%COMP%] {\n    width: 150px;\n    height: 150px;\n    position: relative;\n    top: 0;\n    margin-bottom: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9oZXJvL0k6XFxBTkdVTEFSIFRVVE9SSUFMXFxSYWh1bFlhZGF2XFxSYWh1bC1ZYWRhdi9zcmNcXGFwcFxcaG9tZVxcaGVyb1xcaGVyby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9oZXJvL0k6XFxBTkdVTEFSIFRVVE9SSUFMXFxSYWh1bFlhZGF2XFxSYWh1bC1ZYWRhdi9zcmNcXGFzc2V0c1xcY3NzXFx2YXJpYWJsZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaGVyby9oZXJvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hlcm8vSTpcXEFOR1VMQVIgVFVUT1JJQUxcXFJhaHVsWWFkYXZcXFJhaHVsLVlhZGF2L3NyY1xcYXNzZXRzXFxjc3NcXG1peGlucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdDeUJVO0VEekJXLGtCQUFBO0VBQW9CLG9CQUFBO0VBQXNCLGdCQUFBO0FFRW5FO0FGREk7RUFDSSxVQUFBO0VBQVksWUFBQTtFR0poQixrQkhJZ0Q7RUdIaEQsVUhHeUQ7RUdGekQsUUhFOEQ7RUdEOUQsTUhDZ0U7RUdBaEUsWUFBQTtFSEF5RSx5QkNKNUQ7RURJK0YseUJBQUE7RUFBMkIsV0FBQTtBRVkzSTtBRlZJO0VBQ0ksa0JBQUE7RUFBb0IsVUFBQTtFQUFZLGlCQUFBO0FFY3hDO0FGYlE7RUFDSSxZQUFBO0VBQWMsWUFBQTtFR1R0QixrQkhTc0Q7RUdSdEQsT0hRK0Q7RUdQL0QsV0hPaUU7RUdOakUsTUhNc0U7RUdMdEUsWUhLd0U7RUFBTyx5QkNUbEU7RURTcUcsNEJBQUE7RUFBOEIsV0FBQTtBRXdCcEo7QUZyQkk7RUFDSSx1QkFBQTtFQUF5QixrQkFBQTtFQUFvQixVQUFBO0FFeUJyRDtBRnhCUTtFQUNJLHVDQ0xRO0VES3lCLGVBQUE7QUUyQjdDO0FGekJRO0VBQ0ksZ0JDa0JLO0VEbEJ1QixrQkFBQTtFQUFvQixnQkFBQTtFQUFrQixpREFBQTtBRThCOUU7QUY3Qlk7RUFBRSxxQkFBQTtBRWdDZDtBRjlCUTtFQUNLLG1CQUFBO0VBQXFCLGVDZ0J2QjtFRGhCNkMsY0N2QnpDO0VEdUJnRSxzQkFBQTtFQUF3QixrQkFBQTtFQUFvQixtQkFBQTtBRXFDM0g7QUZuQ1E7RUFDSSxtQkFBQTtFQUFxQixlQ2NuQjtFRGQ0QyxpQkFBQTtFQUFtQixrQkFBQTtBRXdDN0U7QUZ2Q1k7RUFDSSxtQkFBQTtFQUFxQixjQUFBO0FFMENyQztBRnhDWTtFQUNJLG1CQUFBO0VBQXFCLGNDL0J0QjtFRCtCNEMsbUJBQUE7QUU0QzNEO0FGekNRO0VBQ0ksa0JBQUE7QUUyQ1o7QUYxQ1k7RUFDSSxrQkFBQTtBRTRDaEI7QUYzQ2dCO0VBQ0ksU0FBQTtFQUFXLHNCQ2xDakI7RURrQ2lELGNDckNoRDtFRHFDc0UscUJDckN0RTtBQ3FGZjtBRjlDZ0I7RUFDSSx5QkN4Q0w7RUR3Q3NDLFdDckN2QztFRHFDNEQscUJDeEMzRDtBQzBGZjtBRjdDSTtFQUNJLFlBQUE7RUFBYyxhQUFBO0VBQWUseUJDaER0QjtFRGdEdUQsNEJBQUE7RUcvQ2xFLGtCSCtDa0g7RUc5Q2xILFVIOEMySDtFRzdDM0gsV0g2Q2dJO0VHNUNoSSxNSDRDcUk7RUczQ3JJLFlIMkN1STtFQUFPLFlBQUE7QUV3RGxKO0FGdERJO0VBQ0ksa0JBQUE7RUFBb0IsTUFBQTtFQUFRLFFBQUE7RUFBVSxVQUFBO0VBQVksWUFBQTtFQUFjLFVBQUE7RUFBWSxXQUFBO0FFOERwRjtBRjdEUTtFR25ESixrQkhvRDBCO0VHbkQxQixVSG1EbUM7RUdsRG5DLFdIa0R3QztFR2pEeEMsTUhpRDZDO0VHaEQ3QyxZSGdEK0M7RUFBTyxZQUFBO0VBQWMsYUFBQTtBRXFFeEU7QUZwRVk7RUFBUSxXQUFBO0VBQWEsWUFBQTtFQUFjLDBCQUFBO0VBQWtDLGdCQUFBO0VBQWtCLFdBQUE7QUUyRW5HO0FGMUVZO0VBQ0ksWUFBQTtFQUFjLGFBQUE7RUd2RDFCLGtCSHVEMkQ7RUd0RDNELE9Ic0RvRTtFR3JEcEUsUUhxRHNFO0VHcER0RSxTSG9Ed0U7RUduRHhFLGFIbUQ2RTtFQUFRLFlBQUE7RUdyQ3JGLHdCSHFDc0g7RUdwQ3RILGdDSG9Dc0g7RUduQ3RILDZCSG1Dc0g7RUdsQ3RILDJCSGtDc0g7RUdqQ3RILCtCSGlDb0k7RUdoQ3BJLHVDSGdDb0k7RUcvQnBJLG9DSCtCb0k7RUc5QnBJLGtDSDhCb0k7RUc3QnBJLHFCSDZCa0o7RUc1QmxKLDZCSDRCa0o7RUczQmxKLDBCSDJCa0o7RUcxQmxKLHdCSDBCa0o7QUUrRnRKO0FGOUZnQjtFQUNJLFdBQUE7RUFBYSxZQUFBO0VBQWMsa0JBQUE7RUFBb0IsV0FBQTtFQUFhLGtCQUFBO0FFb0doRjtBRm5Hb0I7RUFDSSxXQUFBO0VBQWEsWUFBQTtFQUFjLFdBQUE7RUFBYSx5QkNyRDdDO0VEcURrRixrQkFBQTtFQUFtQixrQkFBQTtFQUFvQixrQkFBQTtBRTJHNUk7QUYxR3dCO0VBQWUsU0FBQTtBRTZHdkM7QUY1R3dCO0VBQVUsV0FBQTtFQUFhLFlBQUE7RUFBYyxXQUFBO0VBQWEseUJDdkR2RDtFRHVENEYsa0JBQUE7RUFBbUIsa0JBQUE7RUFBb0IsV0FBQTtFQUFhLGtCQUFBO0VBQW9CLFNBQUE7RUFBVyxPQUFBO0FFd0hsTTtBRm5IUTtFR2xFSixrQkhtRTBCO0VHbEUxQixVSGtFbUM7RUdqRW5DLFdIaUV3QztFR2hFeEMsVUhnRTZDO0VHL0Q3QyxZSCtEbUQ7RUFBTyxZQUFBO0VBQWMsWUFBQTtBRTJINUU7QUYxSFk7RUFDSSxXQUFBO0VBQWEsWUFBQTtFQUFjLFdBQUE7RUFBYSwwQkFBQTtFR25EcEQsd0JIbUQ2RztFR2xEN0csZ0NIa0Q2RztFR2pEN0csNkJIaUQ2RztFR2hEN0csMkJIZ0Q2RztFRy9DN0csK0JIK0MySDtFRzlDM0gsdUNIOEMySDtFRzdDM0gsb0NINkMySDtFRzVDM0gsa0NINEMySDtFRzNDM0gscUJIMkN5STtFRzFDekksNkJIMEN5STtFR3pDekksMEJIeUN5STtFR3hDekksd0JId0N5STtFR3JFekksa0JIcUVrSztFR3BFbEssT0hvRTJLO0VHbkUzSyxXSG1FNks7RUdsRTdLLE1Ia0VrTDtFR2pFbEwsWUhpRW9MO0FFZ0p4TDtBRjlJWTtFQUNJLFFBQUE7RUFBVSxTQUFBO0VBQVcsa0NBQUE7RUFBbUMscUNBQUE7RUFBdUMsZ0NBQUE7RUd4RTNHLGtCSHdFb0s7RUd2RXBLLFVIdUU2SztFR3RFN0ssV0hzRWtMO0VHckVsTCxNSHFFdUw7RUdwRXZMLFNIb0V5TDtFQUFNLFlBQUE7QUUwSm5NO0FGekpnQjtFQUNJLFFBQUE7RUFBVSxTQUFBO0VBQVcsa0NBQUE7RUFBbUMscUNBQUE7RUFBdUMsNkJBQUE7RUcxRS9HLGtCSDBFdUs7RUd6RXZLLFVIeUVnTDtFR3hFaEwsV0h3RXFMO0VHdkVyTCxTSHVFMEw7RUd0RTFMLGFIc0UrTDtFQUFRLFdBQUE7QUVxSzNNO0FGaktRO0VHOUVKLGtCSCtFMEI7RUc5RTFCLFVIOEVtQztFRzdFbkMsWUg2RXdDO0VHNUV4QyxTSDRFOEM7RUczRTlDLFNIMkVtRDtFQUFJLFlBQUE7RUFBYyxhQUFBO0FFeUt6RTtBRnhLWTtFQUNJLFdBQUE7RUFBYSxZQUFBO0VBQWMsV0FBQTtFR2pGdkMsa0JIaUZzRTtFR2hGdEUsVUhnRitFO0VHL0UvRSxRSCtFb0Y7RUc5RXBGLE1IOEVzRjtFRzdFdEYsWUg2RXdGO0VBQU8seUJDM0VoRjtFRDJFcUgsbUJBQUE7QUVtTHhJO0FGakxZO0VBQ0ksWUFBQTtFQUFjLGFBQUE7RUFBZSxXQUFBO0VHcEZ6QyxrQkhvRndFO0VHbkZ4RSxVSG1GaUY7RUdsRmpGLFFIa0ZzRjtFR2pGdEYsVUhpRndGO0VHaEZ4RixZSGdGOEY7RUFBTyx1QkFBQTtFQUFnQyxtQkFBQTtBRTRMekk7QUZ0TEE7RUFFUTtJRzVGSixrQkg2RjBCO0lHNUYxQixVSDRGbUM7SUczRm5DLFlIMkZ3QztJRzFGeEMsTUgwRjhDO0lHekY5QyxZSHlGZ0Q7RUU0TGxEO0FBQ0Y7QUZ6TEE7RUFFUTtJR25HSixrQkhvRzBCO0lHbkcxQixVSG1HbUM7SUdsR25DLFlIa0d3QztJR2pHeEMsTUhpRzhDO0lHaEc5QyxZSGdHZ0Q7RUU4TGxEO0VGM0xVO0lBQ0ksZUFBQTtFRTZMZDtFRnhMYztJRzdHWixrQkg4R2tDO0lHN0dsQyxVSDZHMkM7SUc1RzNDLFlINEdnRDtJRzNHaEQsVUgyR3NEO0lHMUd0RCxZSDBHNEQ7RUU4TDlEO0FBQ0Y7QUZ2TEE7RUFFUTtJQUNJLFVBQUE7RUV3TFY7RUZ0TE07SUFDSSxpQkFBQTtFRXdMVjtFRnZMVTtJQUFVLFlBQUE7RUUwTHBCO0VGeExNO0lHL0hKLGtCSGdJMEI7SUcvSDFCLFVIK0htQztJRzlIbkMsWUg4SHdDO0lHN0h4QyxNSDZIOEM7SUc1SDlDLFlINEhnRDtJQUFPLFlBQUE7SUFBa0IsYUFBQTtFRWdNM0U7RUY5TE07SUFDSSxzQkFBQTtFRWdNVjtFRi9MVTtJQUNJLGVBQUE7SUFBaUIsU0FBQTtFRWtNL0I7RUZoTVU7SUFBSSxlQUFBO0lBQWlCLGlCQUFBO0VFb00vQjtFRm5NVTtJQUFJLHNCQUFBO0VFc01kO0VGck1VO0lBQ0ksaUJBQUE7RUV1TWQ7RUZuTVU7SUFDSSxZQUFBO0VFcU1kO0VGbk1VO0lBQ0ksWUFBQTtFRXFNZDtFRmxNYztJR3JKWixrQkhzSmtDO0lHckpsQyxVSHFKMkM7SUdwSjNDLFlIb0pnRDtJR25KaEQsVUhtSnNEO0lHbEp0RCxZSGtKNEQ7RUV3TTlEO0FBQ0Y7QUYvTEE7RUFFUTtJQUNJLFdBQUE7SUFBWSxnQkFBQTtFRWlNdEI7RUYvTE07SUFDSSxpQkFBQTtFRWlNVjtFRmhNVTtJQUFVLFlBQUE7SUFBYyxhQUFBO0VFb01sQztFRmxNTTtJR3pLSixrQkgwSzBCO0lHeksxQixVSHlLbUM7SUd4S25DLFlId0t3QztJR3ZLeEMsTUh1SzhDO0lHdEs5QyxZSHNLZ0Q7SUFBTyxZQUFBO0lBQWMsYUFBQTtJQUFlLG1CQUFBO0lBQXFCLFFBQUE7SUFBVSxPQUFBO0lBQVMsWUFBQTtJQUFjLFVBQUE7RUUrTTVJO0VGN01NO0lBQ0ksc0JBQUE7RUUrTVY7RUY5TVU7SUFDSSxlQUFBO0lBQWlCLFNBQUE7RUVpTi9CO0VGL01VO0lBQUksZUFBQTtJQUFpQixpQkFBQTtFRW1OL0I7RUZsTlU7SUFBSSxzQkFBQTtFRXFOZDtFRnBOVTtJQUNJLGlCQUFBO0VFc05kO0VGbk5NO0lBQ0ksV0FBQTtFRXFOVjtFRnBOVTtJQUNJLFVBQUE7SUFBWSxhQUFBO0lBQWUsUUFBQTtJQUFVLE9BQUE7SUFBUyxZQUFBO0VFME41RDtFRnpOYztJQUFRLGFBQUE7RUU0TnRCO0VGM05jO0lBQU8sOEJBQUE7RUU4TnJCO0VGNU5VO0lBQ0ksWUFBQTtFRThOZDtFRjNOYztJR2xNWixrQkhtTWtDO0lHbE1sQyxVSGtNMkM7SUdqTTNDLFlIaU1nRDtJR2hNaEQsVUhnTXNEO0lHL0x0RCxZSCtMNEQ7RUVpTzlEO0VGL05jO0lBQVEsU0FBQTtFRWtPdEI7QUFDRjtBRjdOQTtFQUlnQjtJRy9NWixrQkhnTmtDO0lHL01sQyxVSCtNMkM7SUc5TTNDLFlIOE1nRDtJRzdNaEQsVUg2TXNEO0lHNU10RCxZSDRNNEQ7RUVnTzlEO0FBQ0Y7QUZ6TkE7RUFHWTtJRzNOUixrQkg0TjhCO0lHM045QixVSDJOdUM7SUcxTnZDLFFIME40QztJR3pONUMsVUh5TjhDO0lHeE45QyxZSHdOb0Q7RUU2TnREO0VGNU5jO0lHN05aLGtCSDhOa0M7SUc3TmxDLFdINk4yQztJRzVOM0MsV0g0TmlEO0lHM05qRCxVSDJOc0Q7SUcxTnRELFlIME40RDtFRWtPOUQ7RUZoT2M7SUc5TVosd0JIK01tQztJRzlNbkMsZ0NIOE1tQztJRzdNbkMsNkJINk1tQztJRzVNbkMsMkJINE1tQztJRzNNbkMsK0JIMk1pRDtJRzFNakQsdUNIME1pRDtJR3pNakQsb0NIeU1pRDtJR3hNakQsa0NId01pRDtJR3ZNakQscUJIdU0rRDtJR3RNL0QsNkJIc00rRDtJR3JNL0QsMEJIcU0rRDtJR3BNL0Qsd0JIb00rRDtJR2pPL0Qsa0JIa09rQztJR2pPbEMsVUhpTzJDO0lHaE8zQyxXSGdPZ0Q7SUcvTmhELE1IK05xRDtJRzlOckQsU0g4TnVEO0VFaVB6RDtFRjlPVTtJR3JPUixrQkhzTzhCO0lHck85QixPSHFPdUM7SUdwT3ZDLFFIb095QztJR25PekMsU0htTzJDO0lHbE8zQyxTSGtPZ0Q7SUFBSSxZQUFBO0VFcVB0RDtFRnBQYztJR3ZPWixrQkh3T2tDO0lHdk9sQyxVSHVPMkM7SUd0TzNDLFFIc09nRDtJR3JPaEQsVUhxT2tEO0lHcE9sRCxZSG9Pd0Q7RUUwUDFEO0VGeFBjO0lHMU9aLGtCSDJPa0M7SUcxT2xDLE9IME8yQztJR3pPM0MsUUh5TzZDO0lHeE83QyxVSHdPK0M7SUd2Ty9DLFlIdU9xRDtJQUFPLFlBQUE7RUUrUDlEO0FBQ0Y7QUZ4UEE7RUFFUTtJQUNJLHNCQUFBO0VFeVBWO0VGdFBVO0lBQ0ksVUFBQTtFRXdQZDtFRnRQVTtJRzVQUixrQkg2UDhCO0lHNVA5QixVSDRQdUM7SUczUHZDLFlIMlA0QztJRzFQNUMsVUgwUGtEO0lHelBsRCxZSHlQd0Q7RUU0UDFEO0VGM1BjO0lHOVBaLGtCSCtQa0M7SUc5UGxDLFdIOFAyQztJRzdQM0MsV0g2UGlEO0lHNVBqRCxVSDRQc0Q7SUczUHRELFlIMlA0RDtFRWlROUQ7RUYvUGM7SUcvT1osd0JIZ1BtQztJRy9PbkMsZ0NIK09tQztJRzlPbkMsNkJIOE9tQztJRzdPbkMsMkJINk9tQztJRzVPbkMsK0JINE9pRDtJRzNPakQsdUNIMk9pRDtJRzFPakQsb0NIME9pRDtJR3pPakQsa0NIeU9pRDtJR3hPakQscUJId08rRDtJR3ZPL0QsNkJIdU8rRDtJR3RPL0QsMEJIc08rRDtJR3JPL0Qsd0JIcU8rRDtJR2xRL0Qsa0JIbVFrQztJR2xRbEMsVUhrUTJDO0lHalEzQyxXSGlRZ0Q7SUdoUWhELE1IZ1FxRDtJRy9QckQsU0grUHVEO0VFZ1J6RDtFRjdRVTtJR3RRUixrQkh1UThCO0lHdFE5QixPSHNRdUM7SUdyUXZDLFFIcVF5QztJR3BRekMsU0hvUTJDO0lHblEzQyxTSG1RZ0Q7SUFBSSxZQUFBO0lBQWMsV0FBQTtFRXFScEU7RUZwUmM7SUd4UVosa0JIeVFrQztJR3hRbEMsVUh3UTJDO0lHdlEzQyxXSHVRZ0Q7SUd0UWhELFVIc1FxRDtJR3JRckQsWUhxUTJEO0VFMFI3RDtFRnhSYztJRzNRWixrQkg0UWtDO0lHM1FsQyxPSDJRMkM7SUcxUTNDLFFIMFE2QztJR3pRN0MsVUh5UStDO0lHeFEvQyxZSHdRcUQ7SUFBTyxZQUFBO0VFK1I5RDtFRjNSTTtJQUNJLFlBQUE7SUFBYyxhQUFBO0VFOFJ4QjtBQUNGO0FGeFJBO0VBQ0k7SUFDSSxvQkFBQTtJQUFzQixrQkFBQTtFRTJSNUI7RUYxUk07SUFDSSxVQUFBO0VFNFJWO0VGM1JVO0lBQ0ksZUFBQTtJQUFpQixpQkFBQTtFRThSL0I7RUY3UmM7SUFBRyxvQkFBQTtFRWdTakI7RUY5UlU7SUFBSSxlQUFBO0lBQWlCLFVBQUE7SUFBWSxpQkFBQTtJQUFtQixrQkFBQTtFRW9TOUQ7RUZuU1U7SUFBSSxlQUFBO0lBQWlCLGlCQUFBO0VFdVMvQjtFRnRTVTtJQUNJLGlCQUFBO0lBQW1CLFdBQUE7SUFBYSxrQkFBQTtFRTBTOUM7RUZ6U2M7SUFBRyxxQkFBQTtJQUF1QixXQUFBO0lBQWEsZUFBQTtJQUFpQixrQkFBQTtFRStTdEU7RUY1U007SUFDSSxhQUFBO0VFOFNWO0VGNVNNO0lBQ0ksWUFBQTtJQUFjLGFBQUE7SUFBZSxrQkFBQTtJQUFvQixNQUFBO0lBQVEsbUJBQUE7RUVrVG5FO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hlcm8vaGVyby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvY3NzL3ZhcmlhYmxlcy5jb21wb25lbnQuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL2Nzcy9taXhpbnMuY29tcG9uZW50LnNjc3NcIjtcclxuLmhlcm8tc2VjdGlvbntcclxuICAgIHdpZHRoOiAkY29sZ3JpZC0xMDA7IHBvc2l0aW9uOiByZWxhdGl2ZTsgcGFkZGluZzogMjE1cHggMCAwIDA7IG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAmOmFmdGVye1xyXG4gICAgICAgIHdpZHRoOiAzMCU7IGhlaWdodDogMTAwJTsgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsYXV0bywwLDAsYXV0byk7IGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnlDb2xvcjsgYm9yZGVyLXJhZGl1czogMCAwIDAgODBweDsgY29udGVudDogXCJcIjtcclxuICAgIH1cclxuICAgIC5jb250YWluZXJ7IFxyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgei1pbmRleDogMTsgbWluLWhlaWdodDogNjAycHg7XHJcbiAgICAgICAgJjo6YmVmb3Jle1xyXG4gICAgICAgICAgICB3aWR0aDogMjMzcHg7IGhlaWdodDogMTAwJTsgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsMCxhdXRvLDAsYXV0byk7IGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnlDb2xvcjsgYm9yZGVyLXJhZGl1czogODBweCAwIDAgODBweDsgY29udGVudDogXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaGVyby1jb250ZW50LWFyZWF7XHJcbiAgICAgICAgcGFkZGluZzogNjFweCAwIDAgMTI4cHg7IHBvc2l0aW9uOiByZWxhdGl2ZTsgei1pbmRleDogMjtcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJHN1YmhlYWRpbmdGb250dXNlOyBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgICBmb250LXNpemU6ICRmb250LWJpZy1leHRyYTsgbGluZS1oZWlnaHQ6IDExMHB4OyBmb250LXdlaWdodDogNzAwOyB0ZXh0LXNoYWRvdzogcmdiYSgxNDcsMTQ3LDE0NywuNzUpIDFweCAwIDEwcHg7XHJcbiAgICAgICAgICAgIGJ7bGV0dGVyLXNwYWNpbmc6IC0xNHB4O31cclxuICAgICAgICB9XHJcbiAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsOyBmb250LXNpemU6ICRmb250LWJpZzsgY29sb3I6ICRwcmltYXJ5Q29sb3I7ICBsZXR0ZXItc3BhY2luZzogNDMuNXB4OyBwYWRkaW5nOiAwIDAgMCA3cHg7IG1hcmdpbjogLTE5cHggMCAwIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg0e1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsOyBmb250LXNpemU6ICRmb250LW1pZGl1bTsgbGluZS1oZWlnaHQ6IDM5cHg7IG1hcmdpbjogMTVweCAwIDAgMDtcclxuICAgICAgICAgICAgLmpvYlB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsOyBjb2xvcjogIzcyNjQwODtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29tTntcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7IGNvbG9yOiAkcHJpbWFyeUNvbG9yOyBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jdXN0b20tYnV0dG9uLWJhY2t7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNDBweCAwIDAgMDtcclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAyNnB4IDAgMDtcclxuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7IGJhY2tncm91bmQtY29sb3I6ICRjb21tb25Db2xvcjsgY29sb3I6ICRkZWZhdWx0Q29sb3I7IGJvcmRlci1jb2xvcjogJGRlZmF1bHRDb2xvcjsgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkZWZhdWx0Q29sb3I7IGNvbG9yOiAkY29tbW9uQ29sb3I7IGJvcmRlci1jb2xvcjogJGRlZmF1bHRDb2xvcjsgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW1hZ2UtYmFja3tcclxuICAgICAgICB3aWR0aDogNDEwcHg7IGhlaWdodDogNDM3cHg7IGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5Q29sb3I7IGJvcmRlci1yYWRpdXM6IDgwcHggMCAwIDgwcHg7IEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLGF1dG8sMTdweCwwLGF1dG8pOyBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbiAgICAuaWNvbmRldGFpbHMtYmFja3sgXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IHJpZ2h0OiAwOyB3aWR0aDogMzAlOyBoZWlnaHQ6IDEwMCU7IHotaW5kZXg6IDE7IGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIC5pY29udG9wLWdyb3Vwe1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSxhdXRvLDQ2cHgsMCxhdXRvKTsgd2lkdGg6IDMxNXB4OyBoZWlnaHQ6IDIyN3B4O1xyXG4gICAgICAgICAgICAuc3BhbjF7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IGJvcmRlcjogJHByaW1hcnlDb2xvciAyNXB4IHNvbGlkOyBib3JkZXItdG9wOiBub25lOyBmbG9hdDogbGVmdDt9XHJcbiAgICAgICAgICAgIC5zcGFuMnsgXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTIycHg7IGhlaWdodDogMTUycHg7IEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLDAsMCxhdXRvLC03NnB4KTsgbWFyZ2luOiBhdXRvOyBAaW5jbHVkZSB0cmFuc2Zvcm0ocm90YXRlKDQ0ZGVnKSxjZW50ZXIgY2VudGVyLGZsYXQpO1xyXG4gICAgICAgICAgICAgICAgLnB1cnBsZS1pb2NuLWdyb3VweyBcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgaGVpZ2h0OiA1MXB4OyBwb3NpdGlvbjogcmVsYXRpdmU7IGZsb2F0OiBsZWZ0OyBtYXJnaW46IDAgMCAxN3B4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE3cHg7IGhlaWdodDogMTdweDsgZmxvYXQ6IGxlZnQ7IGJhY2tncm91bmQtY29sb3I6ICRhZGRpdGlvbkNvbG9yVHdvOyBtYXJnaW46MCAxOHB4IDAgMDsgYm9yZGVyLXJhZGl1czogNTAlOyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZHsgIG1hcmdpbjogMDt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6OmFmdGVyeyB3aWR0aDogMTdweDsgaGVpZ2h0OiAxN3B4OyBmbG9hdDogbGVmdDsgYmFja2dyb3VuZC1jb2xvcjogJGFkZGl0aW9uQ29sb3JUd287IG1hcmdpbjowIDE4cHggMCAwOyBib3JkZXItcmFkaXVzOiA1MCU7IGNvbnRlbnQ6IFwiXCI7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAzNHB4OyBsZWZ0OiAwO31cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmljb250b3AtZ3JvdXAye1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSxhdXRvLDQ2cHgsMzcwcHgsYXV0byk7IHdpZHRoOiAzNDJweDsgaGVpZ2h0OiA5NHB4O1xyXG4gICAgICAgICAgICAuc3BhbjF7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTRweDsgaGVpZ2h0OiA5NHB4OyBmbG9hdDogbGVmdDsgYm9yZGVyOiAkYWRkaXRpb25Db2xvclR3byAxNXB4IHNvbGlkOyBAaW5jbHVkZSB0cmFuc2Zvcm0ocm90YXRlKDQ0ZGVnKSxjZW50ZXIgY2VudGVyLGZsYXQpOyBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSwwLGF1dG8sMCxhdXRvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc3BhbjJ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMDsgaGVpZ2h0OiAwOyBib3JkZXItdG9wOiAzNHB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1ib3R0b206IDM0cHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1yaWdodDo1MHB4IHNvbGlkICRwcmltYXJ5Q29sb3I7IEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLGF1dG8sNjFweCwwLDApOyAgIG1hcmdpbjogYXV0bzsgXHJcbiAgICAgICAgICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMDsgaGVpZ2h0OiAwOyBib3JkZXItdG9wOiAzNHB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1ib3R0b206IDM0cHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1yaWdodDo1MHB4IHNvbGlkICRjb21tb25Db2xvcjsgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsNjFweCxhdXRvLGF1dG8sLTM0cHgpOyBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pY29udG9wLWdyb3VwM3tcclxuICAgICAgICAgICAgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsYXV0bywxMDVweCxhdXRvLDApOyB3aWR0aDogNDQycHg7IGhlaWdodDogMjU3cHg7XHJcbiAgICAgICAgICAgIC5zcGFuMXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzOXB4OyBoZWlnaHQ6IDM5cHg7IGZsb2F0OiBsZWZ0OyBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSxhdXRvLDAsMCxhdXRvKTsgYmFja2dyb3VuZC1jb2xvcjogJGFkZGl0aW9uQ29sb3JUd287IGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNwYW4ye1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM3NXB4OyBoZWlnaHQ6IDM3NXB4OyBmbG9hdDogbGVmdDsgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsYXV0bywwLDE2N3B4LGF1dG8pOyBib3JkZXI6JGNvbW1vbkNvbG9yIDI1cHggc29saWQ7IGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxNjAwcHgpIGFuZCAobWF4LXdpZHRoOjE4MDBweCl7XHJcbiAgICAuaGVyby1zZWN0aW9ue1xyXG4gICAgICAgIC5pbWFnZS1iYWNre1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSxhdXRvLDE3OHB4LDAsYXV0byk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMzY2cHgpIGFuZCAobWF4LXdpZHRoOjE1OTlweCl7XHJcbiAgICAuaGVyby1zZWN0aW9ue1xyXG4gICAgICAgIC5pbWFnZS1iYWNre1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSxhdXRvLDMwMHB4LDAsYXV0byk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oZXJvLWNvbnRlbnQtYXJlYXtcclxuICAgICAgICAgICAgaDR7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmljb25kZXRhaWxzLWJhY2t7IFxyXG4gICAgICAgICAgICAuaWNvbnRvcC1ncm91cDN7XHJcbiAgICAgICAgICAgICAgICAuc3BhbjJ7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsYXV0bywtOTRweCwxNjdweCxhdXRvKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI0cHgpIGFuZCAobWF4LXdpZHRoOjEzNjVweCl7XHJcbiAgICAuaGVyby1zZWN0aW9ue1xyXG4gICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgIHdpZHRoOjM2JTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgICAgbWluLWhlaWdodDogNDkwcHg7XHJcbiAgICAgICAgICAgICY6YmVmb3JleyB3aWR0aDogMTQ0cHg7fVxyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1hZ2UtYmFja3tcclxuICAgICAgICAgICAgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsYXV0bywzMDBweCwwLGF1dG8pOyB3aWR0aDogMzAwcHg7ICAgICBoZWlnaHQ6IDM1NHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaGVyby1jb250ZW50LWFyZWF7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDYxcHggMCAwIDY3cHg7XHJcbiAgICAgICAgICAgIGg0e1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4OyBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDJ7IGZvbnQtc2l6ZTogODBweDsgbGluZS1oZWlnaHQ6IDgwcHh9XHJcbiAgICAgICAgICAgIGgzeyBsZXR0ZXItc3BhY2luZzogMTcuNXB4O31cclxuICAgICAgICAgICAgLmN1c3RvbS1idXR0b24tYmFja3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogOXB4IDAgMCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pY29uZGV0YWlscy1iYWNre1xyXG4gICAgICAgICAgICAuaWNvbnRvcC1ncm91cHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMzVweDtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgLmljb250b3AtZ3JvdXAye1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI2OXB4O1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAuaWNvbnRvcC1ncm91cDN7XHJcbiAgICAgICAgICAgICAgICAuc3BhbjJ7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsYXV0bywtOTRweCwxNjdweCxhdXRvKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMjNweCl7XHJcbiAgICAuaGVyby1zZWN0aW9ue1xyXG4gICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7IGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQ5MHB4O1xyXG4gICAgICAgICAgICAmOmJlZm9yZXsgd2lkdGg6IDE0NHB4OyBkaXNwbGF5OiBub25lO31cclxuICAgICAgICB9XHJcbiAgICAgICAgLmltYWdlLWJhY2t7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLGF1dG8sMzAwcHgsMCxhdXRvKTsgd2lkdGg6IDIwMHB4OyBoZWlnaHQ6IDIwMHB4OyBib3JkZXItcmFkaXVzOiAxMDAlOyByaWdodDogMDsgbGVmdDogMDsgbWFyZ2luOiBhdXRvOyB0b3A6IC02NHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaGVyby1jb250ZW50LWFyZWF7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDYxcHggMCAwIDY3cHg7XHJcbiAgICAgICAgICAgIGg0e1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4OyBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDJ7IGZvbnQtc2l6ZTogODBweDsgbGluZS1oZWlnaHQ6IDgwcHh9XHJcbiAgICAgICAgICAgIGgzeyBsZXR0ZXItc3BhY2luZzogMTcuNXB4O31cclxuICAgICAgICAgICAgLmN1c3RvbS1idXR0b24tYmFja3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogOXB4IDAgMCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pY29uZGV0YWlscy1iYWNre1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgLmljb250b3AtZ3JvdXB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlOyBoZWlnaHQ6IDI3MHB4OyByaWdodDogMDsgbGVmdDogMDsgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgLnNwYW4yeyBkaXNwbGF5OiBub25lO31cclxuICAgICAgICAgICAgICAgIC5zcGFuMXtib3JkZXItcmFkaXVzOiAwIDAgNTAwcHggNTAwcHg7fVxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAuaWNvbnRvcC1ncm91cDJ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjY5cHg7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIC5pY29udG9wLWdyb3VwM3tcclxuICAgICAgICAgICAgICAgIC5zcGFuMntcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSxhdXRvLC05NHB4LDE2N3B4LGF1dG8pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNwYW4xeyB0b3A6IDYwcHg7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjQwcHgpe1xyXG4gICAgLmhlcm8tc2VjdGlvbntcclxuICAgICAgICAuaWNvbmRldGFpbHMtYmFja3tcclxuICAgICAgICAgICAgLmljb250b3AtZ3JvdXAze1xyXG4gICAgICAgICAgICAgICAgLnNwYW4ye1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLGF1dG8sLTk0cHgsMTk2cHgsYXV0byk7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gICAgXHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NDgwcHgpIGFuZCAobWF4LXdpZHRoOjYzOXB4KXtcclxuICAgIC5oZXJvLXNlY3Rpb257XHJcbiAgICAgICAgLmljb25kZXRhaWxzLWJhY2t7XHJcbiAgICAgICAgICAgIC5pY29udG9wLWdyb3VwMntcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLGF1dG8sMCwzNzBweCxhdXRvKTtcclxuICAgICAgICAgICAgICAgIC5zcGFuMXtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSwxMzVweCxhdXRvLC05MHB4LGF1dG8pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNwYW4ye1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybShyb3RhdGUoOTBkZWcpLGNlbnRlciBjZW50ZXIsZmxhdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsYXV0byw2MXB4LDAsMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmljb250b3AtZ3JvdXAze1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsMCwwLGF1dG8sMCk7IG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIC5zcGFuMXtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSxhdXRvLDAsLTc0cHgsYXV0byk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc3BhbjJ7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsMCwwLDIxNXB4LGF1dG8pOyBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gICAgXHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MzYwcHgpIGFuZCAobWF4LXdpZHRoOjQ3OXB4KXtcclxuICAgIC5oZXJvLXNlY3Rpb257ICAgICAgICBcclxuICAgICAgICAuaGVyby1jb250ZW50LWFyZWF7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDYxcHggMCAwIDE4cHg7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgLmljb25kZXRhaWxzLWJhY2t7XHJcbiAgICAgICAgICAgIC5pY29udG9wLWdyb3Vwe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6OTAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pY29udG9wLWdyb3VwMntcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLGF1dG8sLTEycHgsMzcwcHgsYXV0byk7XHJcbiAgICAgICAgICAgICAgICAuc3BhbjF7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsMTM1cHgsYXV0bywtOTBweCxhdXRvKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zcGFuMntcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0ocm90YXRlKDkwZGVnKSxjZW50ZXIgY2VudGVyLGZsYXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLGF1dG8sNjFweCwwLDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pY29udG9wLWdyb3VwM3tcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLDAsMCxhdXRvLDApOyBtYXJnaW46IGF1dG87IHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgLnNwYW4xe1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLGF1dG8sMTRweCwtNzRweCxhdXRvKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zcGFuMntcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSwwLDAsMjE1cHgsYXV0byk7IG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWFnZS1iYWNre1xyXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7IGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfSAgICBcclxuXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzU5cHgpe1xyXG4gICAgLmhlcm8tc2VjdGlvbnsgICBcclxuICAgICAgICBwYWRkaW5nOiAxMzZweCAwIDAgMDsgdGV4dC1hbGlnbjogY2VudGVyOyAgICAgXHJcbiAgICAgICAgLmhlcm8tY29udGVudC1hcmVhe1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBoMnsgXHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDYwcHg7IGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgYnsgbGV0dGVyLXNwYWNpbmc6IC05cHg7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGgzeyBmb250LXNpemU6IDIwcHg7IHBhZGRpbmc6IDA7IGxldHRlci1zcGFjaW5nOiAwOyB0ZXh0LWFsaWduOiBjZW50ZXI7fVxyXG4gICAgICAgICAgICBoNHsgZm9udC1zaXplOiAxOHB4OyBsaW5lLWhlaWdodDogMzBweDt9XHJcbiAgICAgICAgICAgIC5jdXN0b20tYnV0dG9uLWJhY2t7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDlweCAwIDAgMDsgd2lkdGg6IDEwMCU7IHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGF7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgZmxvYXQ6IG5vbmU7IHBhZGRpbmc6IDAgMjBweDsgbWFyZ2luOiAwIDE1cHggMCAwO31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIC5pY29uZGV0YWlscy1iYWNre1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1hZ2UtYmFja3tcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4OyBoZWlnaHQ6IDE1MHB4OyBwb3NpdGlvbjogcmVsYXRpdmU7IHRvcDogMDsgbWFyZ2luLWJvdHRvbTogMjBweDsgXHJcbiAgICAgICAgfVxyXG4gICAgfSAgICBcclxuXHJcbn0iLCIkcHJpbWFyeUNvbG9yOiAjZmY2MDNjO1xyXG4kc2Vjb25kYXJ5Q29sb3I6ICNmZGU3NTY7XHJcbiRkZWZhdWx0Q29sb3I6ICMzZTNhMzk7XHJcbiRkZWZhdWx0Q29sb3J0d286ICMwNTA1MDU7XHJcbiRtYWluQ29udGFpbmVyOiAxMjAwcHg7XHJcbiRjb21tb25Db2xvcjogI2ZmZjtcclxuJGFkZGl0aW9uQ29sb3JPbmU6ICMxMDI2MzE7XHJcbiRhZGRpdGlvbkNvbG9yVHdvOiAjMzUxMDU1O1xyXG5cclxuXHJcbiRoZWFkaW5nRm9udHVzZTogJ1VidW50dScsIHNhbnMtc2VyaWY7XHJcbiRzdWJoZWFkaW5nRm9udHVzZTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiRkZXNjcmliZUZvbnR1c2U6ICdCZWxsb3RhIFRleHQnLCBjdXJzaXZlO1xyXG5cclxuXHJcbiRtYWluQ29udGFpbmVyOiAxMjAwcHg7XHJcblxyXG4kY29sZ3JpZC0xMDogMTAlO1xyXG4kY29sZ3JpZC0yMDogMjAlO1xyXG4kY29sZ3JpZC0yNTogMjUlO1xyXG4kY29sZ3JpZC0zMDogMzAlO1xyXG4kY29sZ3JpZC0zMzogMzMuMzMzMzMlO1xyXG4kY29sZ3JpZC00MDogNDAlO1xyXG4kY29sZ3JpZC01MDogNTAlO1xyXG4kY29sZ3JpZC02MDogNjAlO1xyXG4kY29sZ3JpZC03MDogNzAlO1xyXG4kY29sZ3JpZC04MDogODAlO1xyXG4kY29sZ3JpZC05MDogOTAlO1xyXG4kY29sZ3JpZC0xMDA6IDEwMCU7XHJcblxyXG4kUGFkZGluZ1RvcDogMTIzcHg7XHJcbiRQYWRkaW5nYm90dG9tOiAxMjNweDtcclxuXHJcbiRQYWRkaW5nVG9wMjogNDRweDtcclxuJFBhZGRpbmdib3R0b20yOiA0NHB4O1xyXG5cclxuJGRlZmF1bHQtZm9udHNpemU6IDE2cHg7XHJcbiRmb250LWJpZy1leHRyYTogMTEwcHg7XHJcbiRmb250LWJpZy11bHRyYTogNzBweDtcclxuJGZvbnQtYmlnOiA0MnB4O1xyXG4kZm9udC1taWRpdW06IDMwcHg7XHJcbiRmb250LXNtYWxsOiAyMHB4OyIsIi5oZXJvLXNlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAyMTVweCAwIDAgMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5oZXJvLXNlY3Rpb246YWZ0ZXIge1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRlNzU2O1xuICBib3JkZXItcmFkaXVzOiAwIDAgMCA4MHB4O1xuICBjb250ZW50OiBcIlwiO1xufVxuLmhlcm8tc2VjdGlvbiAuY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBtaW4taGVpZ2h0OiA2MDJweDtcbn1cbi5oZXJvLXNlY3Rpb24gLmNvbnRhaW5lcjo6YmVmb3JlIHtcbiAgd2lkdGg6IDIzM3B4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IGF1dG87XG4gIHRvcDogMDtcbiAgYm90dG9tOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRlNzU2O1xuICBib3JkZXItcmFkaXVzOiA4MHB4IDAgMCA4MHB4O1xuICBjb250ZW50OiBcIlwiO1xufVxuLmhlcm8tc2VjdGlvbiAuaGVyby1jb250ZW50LWFyZWEge1xuICBwYWRkaW5nOiA2MXB4IDAgMCAxMjhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xufVxuLmhlcm8tc2VjdGlvbiAuaGVyby1jb250ZW50LWFyZWEgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkpvc2VmaW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uaGVyby1zZWN0aW9uIC5oZXJvLWNvbnRlbnQtYXJlYSBoMiB7XG4gIGZvbnQtc2l6ZTogMTEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMTBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC1zaGFkb3c6IHJnYmEoMTQ3LCAxNDcsIDE0NywgMC43NSkgMXB4IDAgMTBweDtcbn1cbi5oZXJvLXNlY3Rpb24gLmhlcm8tY29udGVudC1hcmVhIGgyIGIge1xuICBsZXR0ZXItc3BhY2luZzogLTE0cHg7XG59XG4uaGVyby1zZWN0aW9uIC5oZXJvLWNvbnRlbnQtYXJlYSBoMyB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogNDJweDtcbiAgY29sb3I6ICNmZjYwM2M7XG4gIGxldHRlci1zcGFjaW5nOiA0My41cHg7XG4gIHBhZGRpbmc6IDAgMCAwIDdweDtcbiAgbWFyZ2luOiAtMTlweCAwIDAgMDtcbn1cbi5oZXJvLXNlY3Rpb24gLmhlcm8tY29udGVudC1hcmVhIGg0IHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzlweDtcbiAgbWFyZ2luOiAxNXB4IDAgMCAwO1xufVxuLmhlcm8tc2VjdGlvbiAuaGVyby1jb250ZW50LWFyZWEgaDQgLmpvYlAge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzcyNjQwODtcbn1cbi5oZXJvLXNlY3Rpb24gLmhlcm8tY29udGVudC1hcmVhIGg0IC5jb21OIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICNmZjYwM2M7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uaGVyby1zZWN0aW9uIC5oZXJvLWNvbnRlbnQtYXJlYSAuY3VzdG9tLWJ1dHRvbi1iYWNrIHtcbiAgbWFyZ2luOiA0MHB4IDAgMCAwO1xufVxuLmhlcm8tc2VjdGlvbiAuaGVyby1jb250ZW50LWFyZWEgLmN1c3RvbS1idXR0b24tYmFjayBhIHtcbiAgbWFyZ2luOiAwIDI2cHggMCAwO1xufVxuLmhlcm8tc2VjdGlvbiAuaGVyby1jb250ZW50LWFyZWEgLmN1c3RvbS1idXR0b24tYmFjayBhOmxhc3QtY2hpbGQge1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjM2UzYTM5O1xuICBib3JkZXItY29sb3I6ICMzZTNhMzk7XG59XG4uaGVyby1zZWN0aW9uIC5oZXJvLWNvbnRlbnQtYXJlYSAuY3VzdG9tLWJ1dHRvbi1iYWNrIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2UzYTM5O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjM2UzYTM5O1xufVxuLmhlcm8tc2VjdGlvbiAuaW1hZ2UtYmFjayB7XG4gIHdpZHRoOiA0MTBweDtcbiAgaGVpZ2h0OiA0MzdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjAzYztcbiAgYm9yZGVyLXJhZGl1czogODBweCAwIDAgODBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogMTdweDtcbiAgdG9wOiAwO1xuICBib3R0b206IGF1dG87XG4gIG1hcmdpbjogYXV0bztcbn1cbi5oZXJvLXNlY3Rpb24gLmljb25kZXRhaWxzLWJhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uaGVyby1zZWN0aW9uIC5pY29uZGV0YWlscy1iYWNrIC5pY29udG9wLWdyb3VwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogNDZweDtcbiAgdG9wOiAwO1xuICBib3R0b206IGF1dG87XG4gIHdpZHRoOiAzMTVweDtcbiAgaGVpZ2h0OiAyMjdweDtcbn1cbi5oZXJvLXNlY3Rpb24gLmljb25kZXRhaWxzLWJhY2sgLmljb250b3AtZ3JvdXAgLnNwYW4xIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiAjZmY2MDNjIDI1cHggc29saWQ7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLmhlcm8tc2VjdGlvbiAuaWNvbmRldGFpbHMtYmFjayAuaWNvbnRvcC1ncm91cCAuc3BhbjIge1xuICB3aWR0aDogMTIycHg7XG4gIGhlaWdodDogMTUycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogYXV0bztcbiAgYm90dG9tOiAtNzZweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NGRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDRkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ0ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNDRkZWcpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgLW8tdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgdHJhbnNmb3JtLXN0eWxlOiBmbGF0O1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogZmxhdDtcbiAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XG4gIC1vLXRyYW5zZm9ybS1zdHlsZTogZmxhdDtcbn1cbi5oZXJvLXNlY3Rpb24gLmljb25kZXRhaWxzLWJhY2sgLmljb250b3AtZ3JvdXAgLnNwYW4yIC5wdXJwbGUtaW9jbi1ncm91cCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUxcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCAwIDE3cHggMDtcbn1cbi5oZXJvLXNlY3Rpb24gLmljb25kZXRhaWxzLWJhY2sgLmljb250b3AtZ3JvdXAgLnNwYW4yIC5wdXJwbGUtaW9jbi1ncm91cCBzcGFuIHtcbiAgd2lkdGg6IDE3cHg7XG4gIGhlaWdodDogMTdweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTEwNTU7XG4gIG1hcmdpbjogMCAxOHB4IDAgMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaGVyby1zZWN0aW9uIC5pY29uZGV0YWlscy1iYWNrIC5pY29udG9wLWdyb3VwIC5zcGFuMiAucHVycGxlLWlvY24tZ3JvdXAgc3BhbjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luOiAwO1xufVxuLmhlcm8tc2VjdGlvbiAuaWNvbmRldGFpbHMtYmFjayAuaWNvbnRvcC1ncm91cCAuc3BhbjIgLnB1cnBsZS1pb2NuLWdyb3VwIHNwYW46OmFmdGVyIHtcbiAgd2lkdGg6IDE3cHg7XG4gIGhlaWdodDogMTdweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTEwNTU7XG4gIG1hcmdpbjogMCAxOHB4IDAgMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzRweDtcbiAgbGVmdDogMDtcbn1cbi5oZXJvLXNlY3Rpb24gLmljb25kZXRhaWxzLWJhY2sgLmljb250b3AtZ3JvdXAyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogNDZweDtcbiAgdG9wOiAzNzBweDtcbiAgYm90dG9tOiBhdXRvO1xuICB3aWR0aDogMzQycHg7XG4gIGhlaWdodDogOTRweDtcbn1cbi5oZXJvLXNlY3Rpb24gLmljb25kZXRhaWxzLWJhY2sgLmljb250b3AtZ3JvdXAyIC5zcGFuMSB7XG4gIHdpZHRoOiA5NHB4O1xuICBoZWlnaHQ6IDk0cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXI6ICMzNTEwNTUgMTVweCBzb2xpZDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDRkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ0ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NGRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDQ0ZGVnKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gIC1vLXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gIHRyYW5zZm9ybS1zdHlsZTogZmxhdDtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XG4gIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBmbGF0O1xuICAtby10cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IGF1dG87XG4gIHRvcDogMDtcbiAgYm90dG9tOiBhdXRvO1xufVxuLmhlcm8tc2VjdGlvbiAuaWNvbmRldGFpbHMtYmFjayAuaWNvbnRvcC1ncm91cDIgLnNwYW4yIHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXRvcDogMzRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMzRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA1MHB4IHNvbGlkICNmZjYwM2M7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IDYxcHg7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG59XG4uaGVyby1zZWN0aW9uIC5pY29uZGV0YWlscy1iYWNrIC5pY29udG9wLWdyb3VwMiAuc3BhbjI6OmFmdGVyIHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXRvcDogMzRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMzRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA1MHB4IHNvbGlkICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNjFweDtcbiAgcmlnaHQ6IGF1dG87XG4gIHRvcDogYXV0bztcbiAgYm90dG9tOiAtMzRweDtcbiAgY29udGVudDogXCJcIjtcbn1cbi5oZXJvLXNlY3Rpb24gLmljb25kZXRhaWxzLWJhY2sgLmljb250b3AtZ3JvdXAzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogMTA1cHg7XG4gIHRvcDogYXV0bztcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogNDQycHg7XG4gIGhlaWdodDogMjU3cHg7XG59XG4uaGVyby1zZWN0aW9uIC5pY29uZGV0YWlscy1iYWNrIC5pY29udG9wLWdyb3VwMyAuc3BhbjEge1xuICB3aWR0aDogMzlweDtcbiAgaGVpZ2h0OiAzOXB4O1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTEwNTU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4uaGVyby1zZWN0aW9uIC5pY29uZGV0YWlscy1iYWNrIC5pY29udG9wLWdyb3VwMyAuc3BhbjIge1xuICB3aWR0aDogMzc1cHg7XG4gIGhlaWdodDogMzc1cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDE2N3B4O1xuICBib3R0b206IGF1dG87XG4gIGJvcmRlcjogI2ZmZiAyNXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkgYW5kIChtYXgtd2lkdGg6IDE4MDBweCkge1xuICAuaGVyby1zZWN0aW9uIC5pbWFnZS1iYWNrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogMTc4cHg7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogYXV0bztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzY2cHgpIGFuZCAobWF4LXdpZHRoOiAxNTk5cHgpIHtcbiAgLmhlcm8tc2VjdGlvbiAuaW1hZ2UtYmFjayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IGF1dG87XG4gICAgcmlnaHQ6IDMwMHB4O1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IGF1dG87XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuaGVyby1jb250ZW50LWFyZWEgaDQge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgfVxuICAuaGVyby1zZWN0aW9uIC5pY29uZGV0YWlscy1iYWNrIC5pY29udG9wLWdyb3VwMyAuc3BhbjIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiAtOTRweDtcbiAgICB0b3A6IDE2N3B4O1xuICAgIGJvdHRvbTogYXV0bztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LXdpZHRoOiAxMzY1cHgpIHtcbiAgLmhlcm8tc2VjdGlvbjphZnRlciB7XG4gICAgd2lkdGg6IDM2JTtcbiAgfVxuICAuaGVyby1zZWN0aW9uIC5jb250YWluZXIge1xuICAgIG1pbi1oZWlnaHQ6IDQ5MHB4O1xuICB9XG4gIC5oZXJvLXNlY3Rpb24gLmNvbnRhaW5lcjpiZWZvcmUge1xuICAgIHdpZHRoOiAxNDRweDtcbiAgfVxuICAuaGVyby1zZWN0aW9uIC5pbWFnZS1iYWNrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogMzAwcHg7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogYXV0bztcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAzNTRweDtcbiAgfVxuICAuaGVyby1zZWN0aW9uIC5oZXJvLWNvbnRlbnQtYXJlYSB7XG4gICAgcGFkZGluZzogNjFweCAwIDAgNjdweDtcbiAgfVxuICAuaGVyby1zZWN0aW9uIC5oZXJvLWNvbnRlbnQtYXJlYSBoNCB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAuaGVyby1zZWN0aW9uIC5oZXJvLWNvbnRlbnQtYXJlYSBoMiB7XG4gICAgZm9udC1zaXplOiA4MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICB9XG4gIC5oZXJvLXNlY3Rpb24gLmhlcm8tY29udGVudC1hcmVhIGgzIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMTcuNXB4O1xuICB9XG4gIC5oZXJvLXNlY3Rpb24gLmhlcm8tY29udGVudC1hcmVhIC5jdXN0b20tYnV0dG9uLWJhY2sge1xuICAgIG1hcmdpbjogOXB4IDAgMCAwO1xuICB9XG4gIC5oZXJvLXNlY3Rpb24gLmljb25kZXRhaWxzLWJhY2sgLmljb250b3AtZ3JvdXAge1xuICAgIHdpZHRoOiAyMzVweDtcbiAgfVxuICAuaGVyby1zZWN0aW9uIC5pY29uZGV0YWlscy1iYWNrIC5pY29udG9wLWdyb3VwMiB7XG4gICAgd2lkdGg6IDI2OXB4O1xuICB9XG4gIC5oZXJvLXNlY3Rpb24gLmljb25kZXRhaWxzLWJhY2sgLmljb250b3AtZ3JvdXAzIC5zcGFuMiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IGF1dG87XG4gICAgcmlnaHQ6IC05NHB4O1xuICAgIHRvcDogMTY3cHg7XG4gICAgYm90dG9tOiBhdXRvO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAuaGVyby1zZWN0aW9uOmFmdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG4gIC5oZXJvLXNlY3Rpb24gLmNvbnRhaW5lciB7XG4gICAgbWluLWhlaWdodDogNDkwcHg7XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuY29udGFpbmVyOmJlZm9yZSB7XG4gICAgd2lkdGg6IDE0NHB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuaW1hZ2UtYmFjayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IGF1dG87XG4gICAgcmlnaHQ6IDMwMHB4O1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IGF1dG87XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0b3A6IC02NHB4O1xuICB9XG4gIC5oZXJvLXNlY3Rpb24gLmhlcm8tY29udGVudC1hcmVhIHtcbiAgICBwYWRkaW5nOiA2MXB4IDAgMCA2N3B4O1xuICB9XG4gIC5oZXJvLXNlY3Rpb24gLmhlcm8tY29udGVudC1hcmVhIGg0IHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5oZXJvLXNlY3Rpb24gLmhlcm8tY29udGVudC1hcmVhIGgyIHtcbiAgICBmb250LXNpemU6IDgwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDgwcHg7XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuaGVyby1jb250ZW50LWFyZWEgaDMge1xuICAgIGxldHRlci1zcGFjaW5nOiAxNy41cHg7XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuaGVyby1jb250ZW50LWFyZWEgLmN1c3RvbS1idXR0b24tYmFjayB7XG4gICAgbWFyZ2luOiA5cHggMCAwIDA7XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuaWNvbmRldGFpbHMtYmFjayB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuaWNvbmRldGFpbHMtYmFjayAuaWNvbnRvcC1ncm91cCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDI3MHB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG4gIC5oZXJvLXNlY3Rpb24gLmljb25kZXRhaWxzLWJhY2sgLmljb250b3AtZ3JvdXAgLnNwYW4yIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5oZXJvLXNlY3Rpb24gLmljb25kZXRhaWxzLWJhY2sgLmljb250b3AtZ3JvdXAgLnNwYW4xIHtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgNTAwcHggNTAwcHg7XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuaWNvbmRldGFpbHMtYmFjayAuaWNvbnRvcC1ncm91cDIge1xuICAgIHdpZHRoOiAyNjlweDtcbiAgfVxuICAuaGVyby1zZWN0aW9uIC5pY29uZGV0YWlscy1iYWNrIC5pY29udG9wLWdyb3VwMyAuc3BhbjIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiAtOTRweDtcbiAgICB0b3A6IDE2N3B4O1xuICAgIGJvdHRvbTogYXV0bztcbiAgfVxuICAuaGVyby1zZWN0aW9uIC5pY29uZGV0YWlscy1iYWNrIC5pY29udG9wLWdyb3VwMyAuc3BhbjEge1xuICAgIHRvcDogNjBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAuaGVyby1zZWN0aW9uIC5pY29uZGV0YWlscy1iYWNrIC5pY29udG9wLWdyb3VwMyAuc3BhbjIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiAtOTRweDtcbiAgICB0b3A6IDE5NnB4O1xuICAgIGJvdHRvbTogYXV0bztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkgYW5kIChtYXgtd2lkdGg6IDYzOXB4KSB7XG4gIC5oZXJvLXNlY3Rpb24gLmljb25kZXRhaWxzLWJhY2sgLmljb250b3AtZ3JvdXAyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDM3MHB4O1xuICAgIGJvdHRvbTogYXV0bztcbiAgfVxuICAuaGVyby1zZWN0aW9uIC5pY29uZGV0YWlscy1iYWNrIC5pY29udG9wLWdyb3VwMiAuc3BhbjEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMzVweDtcbiAgICByaWdodDogYXV0bztcbiAgICB0b3A6IC05MHB4O1xuICAgIGJvdHRvbTogYXV0bztcbiAgfVxuICAuaGVyby1zZWN0aW9uIC5pY29uZGV0YWlscy1iYWNrIC5pY29udG9wLWdyb3VwMiAuc3BhbjIge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAgIC1vLXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBmbGF0O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBmbGF0O1xuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBmbGF0O1xuICAgIC1vLXRyYW5zZm9ybS1zdHlsZTogZmxhdDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogNjFweDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICB9XG4gIC5oZXJvLXNlY3Rpb24gLmljb25kZXRhaWxzLWJhY2sgLmljb250b3AtZ3JvdXAzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IGF1dG87XG4gICAgYm90dG9tOiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuICAuaGVyby1zZWN0aW9uIC5pY29uZGV0YWlscy1iYWNrIC5pY29udG9wLWdyb3VwMyAuc3BhbjEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogLTc0cHg7XG4gICAgYm90dG9tOiBhdXRvO1xuICB9XG4gIC5oZXJvLXNlY3Rpb24gLmljb25kZXRhaWxzLWJhY2sgLmljb250b3AtZ3JvdXAzIC5zcGFuMiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAyMTVweDtcbiAgICBib3R0b206IGF1dG87XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM2MHB4KSBhbmQgKG1heC13aWR0aDogNDc5cHgpIHtcbiAgLmhlcm8tc2VjdGlvbiAuaGVyby1jb250ZW50LWFyZWEge1xuICAgIHBhZGRpbmc6IDYxcHggMCAwIDE4cHg7XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuaWNvbmRldGFpbHMtYmFjayAuaWNvbnRvcC1ncm91cCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuICAuaGVyby1zZWN0aW9uIC5pY29uZGV0YWlscy1iYWNrIC5pY29udG9wLWdyb3VwMiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IGF1dG87XG4gICAgcmlnaHQ6IC0xMnB4O1xuICAgIHRvcDogMzcwcHg7XG4gICAgYm90dG9tOiBhdXRvO1xuICB9XG4gIC5oZXJvLXNlY3Rpb24gLmljb25kZXRhaWxzLWJhY2sgLmljb250b3AtZ3JvdXAyIC5zcGFuMSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEzNXB4O1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIHRvcDogLTkwcHg7XG4gICAgYm90dG9tOiBhdXRvO1xuICB9XG4gIC5oZXJvLXNlY3Rpb24gLmljb25kZXRhaWxzLWJhY2sgLmljb250b3AtZ3JvdXAyIC5zcGFuMiB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gICAgLW8tdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XG4gICAgLW8tdHJhbnNmb3JtLXN0eWxlOiBmbGF0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiA2MXB4O1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuaWNvbmRldGFpbHMtYmFjayAuaWNvbnRvcC1ncm91cDMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogYXV0bztcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5oZXJvLXNlY3Rpb24gLmljb25kZXRhaWxzLWJhY2sgLmljb250b3AtZ3JvdXAzIC5zcGFuMSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IGF1dG87XG4gICAgcmlnaHQ6IDE0cHg7XG4gICAgdG9wOiAtNzRweDtcbiAgICBib3R0b206IGF1dG87XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuaWNvbmRldGFpbHMtYmFjayAuaWNvbnRvcC1ncm91cDMgLnNwYW4yIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDIxNXB4O1xuICAgIGJvdHRvbTogYXV0bztcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuaW1hZ2UtYmFjayB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzU5cHgpIHtcbiAgLmhlcm8tc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMTM2cHggMCAwIDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5oZXJvLXNlY3Rpb24gLmhlcm8tY29udGVudC1hcmVhIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIC5oZXJvLXNlY3Rpb24gLmhlcm8tY29udGVudC1hcmVhIGgyIHtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuaGVyby1jb250ZW50LWFyZWEgaDIgYiB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC05cHg7XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuaGVyby1jb250ZW50LWFyZWEgaDMge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuaGVyby1zZWN0aW9uIC5oZXJvLWNvbnRlbnQtYXJlYSBoNCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB9XG4gIC5oZXJvLXNlY3Rpb24gLmhlcm8tY29udGVudC1hcmVhIC5jdXN0b20tYnV0dG9uLWJhY2sge1xuICAgIG1hcmdpbjogOXB4IDAgMCAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuaGVyby1zZWN0aW9uIC5oZXJvLWNvbnRlbnQtYXJlYSAuY3VzdG9tLWJ1dHRvbi1iYWNrIGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmbG9hdDogbm9uZTtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgbWFyZ2luOiAwIDE1cHggMCAwO1xuICB9XG4gIC5oZXJvLXNlY3Rpb24gLmljb25kZXRhaWxzLWJhY2sge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmhlcm8tc2VjdGlvbiAuaW1hZ2UtYmFjayB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59IiwiQG1peGluIHBvc2l0aW9uKCRwb3NpdGlvbiwkbGVmdCwkcmlnaHQsJHRvcCwkYm90dG9tKXtcclxuICAgIHBvc2l0aW9uOiAkcG9zaXRpb247XHJcbiAgICBsZWZ0OiAkbGVmdDtcclxuICAgIHJpZ2h0OiAkcmlnaHQ7XHJcbiAgICB0b3A6ICR0b3A7XHJcbiAgICBib3R0b206ICRib3R0b207XHJcbn1cclxuXHJcbkBtaXhpbiB2aXNpYmxpdHkoJHZhbHVlKXtcclxuICAgIHZpc2liaWxpdHk6ICR2YWx1ZTtcclxuICAgIC13ZWJraXQtdmlzaWJpbGl0eTogJHZhbHVlO1xyXG4gICAgLW1vei12aXNpYmlsaXR5OiAkdmFsdWU7XHJcbiAgICAtby12aXNpYmlsaXR5OiAkdmFsdWU7XHJcbiAgICAtbXMtdmlzaWJpbGl0eTogJHZhbHVlO1xyXG59XHJcblxyXG5cclxuXHJcbkBtaXhpbiB0cmFuc2Zvcm0oJHZhbHVlLXR5cGUsJG9yaWdpbiwkc3R5bGUpe1xyXG4gICAgdHJhbnNmb3JtOiAkdmFsdWUtdHlwZTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiAkdmFsdWUtdHlwZTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiAkdmFsdWUtdHlwZTtcclxuICAgIC1vLXRyYW5zZm9ybTogJHZhbHVlLXR5cGU7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkb3JpZ2luO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAkb3JpZ2luO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAkb3JpZ2luO1xyXG4gICAgLW8tdHJhbnNmb3JtLW9yaWdpbjogJG9yaWdpbjtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogJHN0eWxlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6ICRzdHlsZTtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiAkc3R5bGU7XHJcbiAgICAtby10cmFuc2Zvcm0tc3R5bGU6ICRzdHlsZTtcclxufVxyXG5AbWl4aW4gdHJhbnNpdGlvbigkdHJhbnNpdGlvbiwkZHVyYXRpb24sJGJlaGF2aW91cil7XHJcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbiAkZHVyYXRpb24gJGJlaGF2aW91cjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJHRyYW5zaXRpb24gJGR1cmF0aW9uICRiZWhhdmlvdXI7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uICRkdXJhdGlvbiAkYmVoYXZpb3VyO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogJHRyYW5zaXRpb24gJGR1cmF0aW9uICRiZWhhdmlvdXI7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogJHRyYW5zaXRpb24gJGR1cmF0aW9uICRiZWhhdmlvdXI7XHJcbn1cclxuQG1peGluIGZpbHRlcigkdmFsdWUpe1xyXG4gICAgZmlsdGVyOiAkdmFsdWU7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogJHZhbHVlO1xyXG4gICAgLW1vei1maWx0ZXI6ICR2YWx1ZTtcclxuICAgIC1vLWZpbHRlcjogJHZhbHVlO1xyXG59XHJcblxyXG5AbWl4aW4gZmxleCgkdmFsdWUpe1xyXG4gICAgZmxleDogJHZhbHVlO1xyXG4gICAgLXdlYmtpdC1mbGV4OiAkdmFsdWU7XHJcbiAgICAtbW96LWZsZXg6ICR2YWx1ZTtcclxuICAgIC1vLWZsZXg6ICR2YWx1ZTtcclxuICAgIC1tcy1mbGV4OiAkdmFsdWU7XHJcbn1cclxuQG1peGluIG9wYWNpdHkoJHZhbHVlKXtcclxuICAgIG9wYWNpdHk6ICR2YWx1ZTtcclxuICAgIGZpbHRlcjogQWxwaGEob3BhY2l0eT0kdmFsdWUpO1xyXG59XHJcbkBtaXhpbiBhbmltYXRpb24oJG5hbWUsJHRpbWUsJGZpbGxtb2RlKXtcclxuICAgIGFuaW1hdGlvbjogJG5hbWUgJHRpbWUgJGZpbGxtb2RlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246ICRuYW1lICR0aW1lICRmaWxsbW9kZTtcclxuICAgIC1tb3otYW5pbWF0aW9uOiAkbmFtZSAkdGltZSAkZmlsbG1vZGU7XHJcbiAgICAtby1hbmltYXRpb246ICRuYW1lICR0aW1lICRmaWxsbW9kZTtcclxuICAgIC1tcy1hbmltYXRpb246ICRuYW1lICR0aW1lICRmaWxsbW9kZTsgXHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-hero',
          templateUrl: './hero.component.html',
          styleUrls: ['./hero.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _hero_hero_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./hero/hero.component */
    "./src/app/home/hero/hero.component.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 1,
      vars: 0,
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-hero");
        }
      },
      directives: [_hero_hero_component__WEBPACK_IMPORTED_MODULE_1__["HeroComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/passion/passion.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/home/passion/passion.component.ts ***!
    \***************************************************/

  /*! exports provided: PassionComponent */

  /***/
  function srcAppHomePassionPassionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PassionComponent", function () {
      return PassionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PassionComponent =
    /*#__PURE__*/
    function () {
      function PassionComponent() {
        _classCallCheck(this, PassionComponent);
      }

      _createClass(PassionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PassionComponent;
    }();

    PassionComponent.ɵfac = function PassionComponent_Factory(t) {
      return new (t || PassionComponent)();
    };

    PassionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PassionComponent,
      selectors: [["app-passion"]],
      decls: 2,
      vars: 0,
      template: function PassionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "passion works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcGFzc2lvbi9wYXNzaW9uLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PassionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-passion',
          templateUrl: './passion.component.html',
          styleUrls: ['./passion.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/work-process/work-process.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/home/work-process/work-process.component.ts ***!
    \*************************************************************/

  /*! exports provided: WorkProcessComponent */

  /***/
  function srcAppHomeWorkProcessWorkProcessComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkProcessComponent", function () {
      return WorkProcessComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var WorkProcessComponent =
    /*#__PURE__*/
    function () {
      function WorkProcessComponent() {
        _classCallCheck(this, WorkProcessComponent);
      }

      _createClass(WorkProcessComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WorkProcessComponent;
    }();

    WorkProcessComponent.ɵfac = function WorkProcessComponent_Factory(t) {
      return new (t || WorkProcessComponent)();
    };

    WorkProcessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WorkProcessComponent,
      selectors: [["app-work-process"]],
      decls: 2,
      vars: 0,
      template: function WorkProcessComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "work-process works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvd29yay1wcm9jZXNzL3dvcmstcHJvY2Vzcy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkProcessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-work-process',
          templateUrl: './work-process.component.html',
          styleUrls: ['./work-process.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! I:\ANGULAR TUTORIAL\RahulYadav\Rahul-Yadav\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map