(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout class=\"container\">\n  <nz-header>\n    <div class=\"logo\"></div>\n  </nz-header>\n  <nz-content>\n    <div class=\"inner-content\">\n    <ng-container *ngIf=\"!uploadExcel\">\n\n      <!-- INSERT STORE BY TEXT INPUT -->\n      <nz-spin nzTip=\"Categorize Store...\" [nzSpinning]=\"isCategorized\">\n        <nz-form-item>\n          <nz-input-group nzSearch nzSize=\"large\" [nzAddOnAfter]=\"suffixButton\">\n            <input type=\"text\" nz-input placeholder=\"input store's name\" [(ngModel)]=\"store\"/>\n          </nz-input-group>\n          <ng-template #suffixButton>\n            <button nz-button nzType=\"primary\" nzSize=\"large\" nzSearch (click)=\"categorizeStore()\">Insert</button>\n          </ng-template>\n        </nz-form-item>\n  \n        <ng-container *ngIf=\"hasSearched && !isCategorized && !categoryNotFound\">\n            <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\">Category 1</nz-form-label>\n            <nz-mention [nzSuggestions]=\"category1SuggestionsData\">\n              <input nzMentionTrigger nz-input readOnly [(ngModel)]=\"selectedSubCategory1\" />\n            </nz-mention>\n    \n            <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\">Category 2 </nz-form-label>\n            <nz-mention [nzSuggestions]=\"category2SuggestionsData\">\n              <input nzMentionTrigger nz-input readOnly [(ngModel)]=\"selectedSubCategory2\" />\n            </nz-mention>\n        </ng-container>\n      </nz-spin>\n      <!-- INSERT STORE BY TEXT INPUT - END -->\n\n      <!-- NOT FOUND CATEGORY SUGGESTION -->\n      <ng-container *ngIf=\"categoryNotFound\">\n        <nz-empty\n          [nzNotFoundContent]=\"contentTpl\"\n          [nzNotFoundFooter]=\"footerTpl\"\n          *ngIf=\"!createManual\"\n        >\n          <ng-template #contentTpl>\n            <span> {{categoryNotFoundErrorMessage}} </span>\n          </ng-template>\n          <ng-template #footerTpl>\n            <button nz-button nzType=\"primary\" (click)=\"createManualStore()\">Create Manual Now</button>\n          </ng-template>\n        </nz-empty>\n        <form nz-form [formGroup]=\"validateForm\" (ngSubmit)=\"submitForm()\" *ngIf=\"createManual\">\n            <nz-form-item>\n                <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired nzFor=\"name\">Store</nz-form-label>\n                <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" nzErrorTip=\"Please input your store!\">\n                    <input nz-input formControlName=\"name\" id=\"name\" />\n                </nz-form-control>\n            </nz-form-item>\n            <nz-form-item>\n                <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired nzFor=\"product\">Sub Category 1</nz-form-label>\n                <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" nzErrorTip=\"Please input your sub category 1!\">\n                    <nz-select formControlName=\"subCategory1\"\n                    nzPlaceHolder=\"Select Sub Category 1\"\n                    nzAllowClear\n                    >\n                        <nz-option *ngFor=\"let category1 of subCategory1Data\" [nzValue]=\"category1.value\" [nzLabel]=\"category1.label\"></nz-option>\n                    </nz-select>\n                </nz-form-control>\n            </nz-form-item>\n            <nz-form-item>\n              <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired nzFor=\"product\">Sub Category 2</nz-form-label>\n              <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" nzErrorTip=\"Please input your sub category 2!\">\n                  <nz-select formControlName=\"subCategory2\"\n                  nzPlaceHolder=\"Select Sub Category 2\"\n                  nzAllowClear\n                  >\n                    <nz-option *ngFor=\"let category2 of subCategory2Data\" [nzValue]=\"category2.value\" [nzLabel]=\"category2.label\"></nz-option>\n                  </nz-select>\n              </nz-form-control>\n            </nz-form-item>\n            <nz-form-item nz-row class=\"creation-area\">\n              <nz-form-control [nzSpan]=\"14\" [nzOffset]=\"6\">\n                  <button nz-button [nzType]=\"'primary'\" [disabled]=\"!validateForm.valid\">Create</button>\n              </nz-form-control>\n            </nz-form-item>\n        </form>\n      </ng-container>\n      <!-- NOT FOUND CATEGORY SUGGESTION - END -->\n    </ng-container>\n\n    <!--SWITCHER -->\n      <div style=\"padding-bottom: 10px; padding-top: 10px;\">\n        Upload Excel: <nz-switch [(ngModel)]=\"uploadExcel\" [nzDisabled]=\"isDisabledSwitcher\"></nz-switch>\n      </div>\n    <!-- SWITCHER - END -->\n\n    <!-- UPLOAD EXCEL FORM -->\n      <ng-container *ngIf=\"uploadExcel\">\n        <nz-spin nzTip=\"Loading...\" [nzSpinning]=\"isUploading\">\n          <nz-upload\n            nzType=\"drag\"\n            [nzMultiple]=\"false\"\n            nzAction=\"https://www.mocky.io/v2/5cc8019d300000980a055e76\"\n            (nzChange)=\"handleChange($event)\"\n            [nzShowUploadList]=\"false\"\n          >\n            <p class=\"ant-upload-drag-icon\">\n              <i nz-icon nzType=\"inbox\"></i>\n            </p>\n            <p class=\"ant-upload-text\">Click or drag file to this area to upload</p>\n            <p class=\"ant-upload-hint\">\n              Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files\n            </p>\n          </nz-upload>\n\n          <div *ngIf=\"!isUploading && isDone\" style=\"overflow: scroll; height: 500px;\">\n            <nz-table #basicTable [nzData]=\"data\">\n              <thead>\n                <tr>\n                  <th *ngFor=\"let headValue of headData\">\n                    {{headValue}}\n                  </th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let data of basicTable.data\">\n                  <td *ngFor=\"let val of headData; let i =index\">\n                    {{data[i] || ' '}}\n                  </td>\n                </tr>\n              </tbody>\n            </nz-table>\n          </div>\n        </nz-spin>\n      </ng-container>\n      <!-- UPLOAD EXCEL FORM - END -->\n    </div>\n  </nz-content>\n  <nz-footer>AI-Mall ©2021 All Rights Reserved</nz-footer>\n</nz-layout>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/layout */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-layout.js");
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/upload */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-upload.js");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/table */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-table.js");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/spin */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-spin.js");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/input */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-input.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/select */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/switch */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-switch.js");
/* harmony import */ var ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/mention */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-mention.js");
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/empty */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-empty.js");













const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
            ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__["NzLayoutModule"],
            ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_4__["NzUploadModule"],
            ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTableModule"],
            ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_6__["NzSpinModule"],
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__["NzInputModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonModule"],
            ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__["NzSelectModule"],
            ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_10__["NzSwitchModule"],
            ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_11__["NzMentionModule"],
            ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_12__["NzEmptyModule"]
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n    width: 120px;\n    height: 31px;\n    background: rgba(255, 255, 255, 0.2);\n    margin: 16px 24px 16px 0;\n    float: left;\n  }\n\n  [nz-menu] {\n    line-height: 64px;\n  }\n\n  nz-breadcrumb {\n    margin: 16px 0;\n  }\n\n  nz-content {\n    padding: 10px 50px;\n  }\n\n  nz-footer {\n    text-align: center;\n  }\n\n  .inner-content {\n    background: #fff;\n    padding: 24px;\n    min-height: 700px;\n  }\n\n  .container {\n      height: 100%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG9DQUFvQztJQUNwQyx3QkFBd0I7SUFDeEIsV0FBVztFQUNiOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsaUJBQWlCO0VBQ25COztFQUVBO01BQ0ksWUFBWTtFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDMxcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgIG1hcmdpbjogMTZweCAyNHB4IDE2cHggMDtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuXG4gIFtuei1tZW51XSB7XG4gICAgbGluZS1oZWlnaHQ6IDY0cHg7XG4gIH1cblxuICBuei1icmVhZGNydW1iIHtcbiAgICBtYXJnaW46IDE2cHggMDtcbiAgfVxuXG4gIG56LWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDEwcHggNTBweDtcbiAgfVxuXG4gIG56LWZvb3RlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmlubmVyLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMjRweDtcbiAgICBtaW4taGVpZ2h0OiA3MDBweDtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/message */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-message.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let AppComponent = class AppComponent {
    constructor(msg, fb) {
        this.msg = msg;
        this.fb = fb;
        this.subCategory1Data = [
            {
                value: 1,
                label: 'Retail Store'
            },
            {
                value: 2,
                label: 'Dept. Store'
            },
            {
                value: 3,
                label: 'ECOMMERCE FASHION'
            },
            {
                value: 4,
                label: 'Boutique'
            }
        ];
        this.subCategory2Data = [
            {
                value: 1,
                label: 'Casual Wear'
            },
            {
                value: 2,
                label: 'Kids and Baby Wear'
            },
            {
                value: 3,
                label: 'Islamic Clothing'
            },
            {
                value: 4,
                label: 'Foot Wear'
            },
            {
                value: 5,
                label: 'Formal Wear'
            }
        ];
        this.category1SuggestionsData = [];
        this.category2SuggestionsData = [];
        this.title = 'AI-mall';
        this.listOfData = [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park'
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park'
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park'
            }
        ];
        this.isUploading = false;
        this.isDone = false;
        this.uploadExcel = false;
        this.isCategorized = false;
        this.hasSearched = false;
        this.store = '';
        this.categoryNotFound = false;
        this.categoryNotFoundErrorMessage = '';
        this.createManual = false;
        this.isDisabledSwitcher = false;
        this._index = 1;
    }
    ngOnInit() {
        this.mappingCategories();
        this.validateForm = this.fb.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            subCategory1: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            subCategory2: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    }
    mappingCategories() {
        this.category1SuggestionsData = this.subCategory1Data.map((data) => data.label);
        this.category2SuggestionsData = this.subCategory2Data.map((data) => data.label);
    }
    submitForm() {
        for (const i in this.validateForm.controls) {
            if (this.validateForm.controls[i]) {
                this.validateForm.controls[i].markAsDirty();
                this.validateForm.controls[i].updateValueAndValidity();
            }
        }
        // category submission here ..
    }
    categorizeStore() {
        this._resetForm();
        this.isCategorized = true;
        this.isDisabledSwitcher = true;
        this._shuffle(this.category1SuggestionsData);
        this._shuffle(this.category2SuggestionsData);
        const intervalHandle = setInterval(() => {
            const category1 = this._index++ % this.category1SuggestionsData.length;
            this.selectedSubCategory1 = this.category1SuggestionsData[category1];
            const category2 = this._index++ % this.category2SuggestionsData.length;
            this.selectedSubCategory2 = this.category2SuggestionsData[category2];
        }, 50);
        setTimeout(() => {
            clearInterval(intervalHandle);
            if (this.store.includes('warung')) {
                this.categoryNotFound = true;
                this.categoryNotFoundErrorMessage =
                    'Oops! your Store does not have any suggestion category yet. Please input your store info manually first';
            }
            this.isCategorized = false;
            this.hasSearched = true;
            this.isDisabledSwitcher = false;
        }, 3000);
    }
    _resetForm() {
        this.hasSearched = false;
        this.categoryNotFound = false;
        this.categoryNotFoundErrorMessage = '';
        this.createManual = false;
    }
    _shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    createManualStore() {
        this.createManual = true;
        this.validateForm.controls['name'].setValue(this.store);
    }
    handleChange(info) {
        const status = info.file.status;
        this.isUploading = true;
        this.isDisabledSwitcher = true;
        if (status !== 'uploading') {
            this.isUploading = false;
        }
        if (status === 'done') {
            this.isUploading = false;
            this.isDone = true;
            this.isDisabledSwitcher = false;
            this._getFileBuffer(info.file.originFileObj, (file) => {
                this.handleExcel(file);
            });
            this.msg.success(`${info.file.name} file uploaded successfully.`);
        }
        if (status === 'error') {
            this.isUploading = false;
            this.isDone = true;
            this.isDisabledSwitcher = false;
            this.msg.error(`${info.file.name} file upload failed.`);
        }
    }
    _getFileBuffer(file, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsArrayBuffer(file);
    }
    handleExcel(bstr) {
        const buffer = new Uint8Array(bstr);
        const wb = xlsx__WEBPACK_IMPORTED_MODULE_3__["read"](buffer, { type: 'array' });
        /* grab first sheet */
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        /* save data */
        this.data = (xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].sheet_to_json(ws, { header: 1 }));
        this.headData = this.data[0];
        this.data = this.data.slice(1); // remove first header record
        const ws2 = wb.Sheets[wb.SheetNames[1]];
        this.readDataSheet(ws2, 10);
    }
    readDataSheet(ws, startRow) {
        /* save data */
        let datas = (xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].sheet_to_json(ws, { header: 1, raw: false, range: startRow }));
        let headDatas = datas[0];
        datas = datas.slice(1); // remove first header record
        for (let i = 0; i < this.data.length; i++) {
            this.data[i][this.headData.length] = datas.filter(x => x[12] == this.data[i][0]);
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/locales/en */ "./node_modules/@angular/common/locales/en.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/form */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-form.js");













Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10___default.a);
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__["NzFormModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ],
        providers: [{ provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["en_US"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dimas/projects/machine-learning/AI-mall/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map