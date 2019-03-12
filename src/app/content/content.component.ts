import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  pageTitle: string = '';
  pageDesc: string = '';
  constructor(public router: Router) {
    router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // 做判断处理
        if (event.url === '/dashboard') {
          this.pageTitle = '这里是首页'
          this.pageDesc = '欢迎来到首页'
        } else if (event.url === '/stock') {
          this.pageTitle = '股票信息管理'
          this.pageDesc = '进行股票的基本操作'
        }
      })
  }

  ngOnInit() {
    this.router
  }

}
