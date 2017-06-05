import { Router } from '@angular/router';
import { Location } from '@angular/common';
// import { HttpHelper } from './HttpHelpers';
/**
 * 通用类
 * 
 * @export
 * @class Utility
 */
export class Utility {
  private static __TempContent = {};
  // static __Instance: Utility;

  // private _TempSaveContent: Object;
  constructor() {
    // this._TempSaveContent = {};
  }

  /**
   * 实例
   * @returns {*}
   */
  // static instance() {
  //   if (this.__Instance === null || typeof this.__Instance === 'undefined') {
  //     this.__Instance = new this();
  //   }
  //   return this.__Instance;
  // }

  /**
   * 常量
   * 
   * @static
   * 
   * @memberOf Utility
   */
  static $ConstItem = {
    Route: 'XTN_Router',
    Location: 'XTN_Location',
    AppIsGoBack: 'XTN_APP_IS_GO_BACK',
    BrowerTitle: 'XTN_BrowerTitle',
    Events: {
      HttpStatus: {}
    },
    UrlItem: {
      GoBack: 'XTN_GOBACK',
    }
  };

  static $LoadingHide() {

  }
  static $emit(name, args) {

  }
  static $actionSheet(msg) {

  }
  
  /**
   * 保存内容
   * 
   * @static
   * @param {string} key
   * @param {*} Content
   * @param {boolean} IsSaveLocalStore
   * @returns
   * 
   * @memberOf Utility
   */
  static $SetContent(key: string, Content: any, IsSaveLocalStore: boolean) {
    if (!key) {
      return;
    }
    this.__TempContent[key] = Content;
    if (!!IsSaveLocalStore) {
      window.localStorage.setItem(key, JSON.stringify(Content));
    }
  }

  static $GetContent(key: string) {
    if (!key) {
      return null;
    }

    let __value = this.__TempContent[key];
    if (__value) {
      return __value;
    }
    __value = window.localStorage.getItem(key);
    if (__value) {
      __value = JSON.parse(__value);
      this.__TempContent[key] = __value;
      return __value;
    }
    return null;
  }

  static $RemoveContent(key: string, IsSaveLocalStore: boolean) {
    if (!key) {
      return;
    }
    delete this.__TempContent[key];
    if (!!IsSaveLocalStore) {
      window.localStorage.removeItem(key);
    }
  }


  /**
   * go to page
   * 
   * @static
   * @param {string} url 
   * @param {*} params 
   * @returns 
   * 
   * @memberof Utility
   */
  static $ToPage(url: string, params: any) {
    const __Route: Router = this.$GetContent(this.$ConstItem.Route);
    if (!__Route) {
      return;
    }
    if (this.$ConstItem.UrlItem.GoBack === url) {
      const __Location: Location = this.$GetContent(this.$ConstItem.Location);
      if (__Location) {
        console.log('go back~~~');
        __Location.back();
      }
      setTimeout(() => {
        this.$RemoveContent(this.$ConstItem.AppIsGoBack, false);
      }, 650);
      return;
    }

    // __Route.navigate(['/' + url, { key: 1234, qq: 'qq1234' }], { queryParams: { a: 1111, b: 'adsfa', c: 'queryString' } });
    // Navigate to /results?page=1
    // this.router.navigate(['/results'], { queryParams: { page: 1 } });
    const __params = Object.assign(params || {}, { __timestamp: new Date().getTime() });
    __Route.navigate(['/' + url], { queryParams: __params });
  }

  static $GoBack() {
    this.$SetContent(this.$ConstItem.AppIsGoBack, true, false);
    this.$ToPage(this.$ConstItem.UrlItem.GoBack, {});
  }
}
