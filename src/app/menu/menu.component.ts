import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }
  menus: Array<Menu>;
  currentMenuId: number;
  ngOnInit() {
    this.menus = [
      // tslint:disable-next-line: no-use-before-declare
      new Menu(1, '首页', 'dashboard'),
      // tslint:disable-next-line: no-use-before-declare
      new Menu(2, '股票管理', 'stock'),
    ]
  }
  nav(menu: Menu) {
    this.router.navigateByUrl(menu.link);
    this.currentMenuId = menu.id;
  }
}

export class Menu {
  constructor(
    public id: number,
    public name: string,
    public link: string
  ) {

  }
}
