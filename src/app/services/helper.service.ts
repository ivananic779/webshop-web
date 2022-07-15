import { Injectable } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ROUTES_ADMIN, ROUTES_USER } from '../variables/routes';
import { StorageService } from './storage.service';
import { DatePipe, DecimalPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(
    private storageService: StorageService,
    private datePipe: DatePipe,
    private decimalPipe: DecimalPipe,
  ) { }

  public ArrayToSelectItemArray($data: Array<DynamicObject>, $label: string, $value: string): SelectItem[] {
    let arr: SelectItem[] = [];

    $data.forEach(element => {
      let row: SelectItem = {
        label: element[$label],
        value: element[$value],
      };

      arr.push(row);
    });

    return arr;
  }

  public deepCopy($obj: any): any {
    var copy: any;

    // Handle the 3 simple types, and null or undefined
    if (null == $obj || "object" != typeof $obj) return $obj;

    // Handle Date
    if ($obj instanceof Date) {
      copy = new Date();
      copy.setTime($obj.getTime());
      return copy;
    }

    // Handle Array
    if ($obj instanceof Array) {
      copy = [];
      for (var i = 0, len = $obj.length; i < len; i++) {
        copy[i] = this.deepCopy($obj[i]);
      }
      return copy;
    }

    // Handle Object
    if ($obj instanceof Object) {
      copy = {};
      for (var attr in $obj) {
        if ($obj.hasOwnProperty(attr)) copy[attr] = this.deepCopy($obj[attr]);
      }
      return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
  }

  public filterRoutesBasedOnUserType(): any[] {
    let user_type = this.storageService.getUserType();

    let menuItems: any[] = [];

    if (user_type == "Admin") {
      menuItems = ROUTES_ADMIN.filter(menuItem => menuItem);
    } else if (user_type == "User") {
      menuItems = ROUTES_USER.filter(menuItem => menuItem)
    }

    return menuItems;
  }

  public pipeValue($value: any, $type: string): any {
    if ($type == 'string') {
      return $value;
    } else if ($type == 'date') {
      return this.datePipe.transform($value, 'dd.MM.YYYY.');
    } else if ($type == 'decimal') {
      return this.decimalPipe.transform($value, '1.2-2');
    }
  }

  public containsObject(obj: any, list: any[]) {
    var i: number;
    for (i = 0; i < list.length; i++) {
      if (list[i] === obj) {
        return true;
      }
    }

    return false;
  }
}
