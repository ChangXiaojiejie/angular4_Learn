import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {
  private stocks: Array<Stock>;
  constructor(public router: Router) { }
  // 組件初始化會调用這個方法
  ngOnInit() {
    this.stocks = [
      new Stock(1, '第一只股票', 1.99, 3.5, '这是一只很好的股票1', [
        '互联网',
        'IT'
      ]),
      new Stock(2, '第二只股票', 2.99, 1.5, '这是一只很好的股票2', [
        '互联网',
        'IT'
      ]),
      new Stock(3, '第三只股票', 3.99, 4.5, '这是一只很好的股票3', [
        '互联网',
        'IT'
      ]),
      new Stock(4, '第四只股票', 4.99, 2.5, '这是一只很好的股票4', [
        '互联网',
        'IT'
      ])
    ]
  }

  // 创建的表单的方法
  create() {
    this.router.navigateByUrl('/stock/0');
  }

  // 修改的表单的方法
  update(stock: Stock) {
    this.router.navigateByUrl('/stock/' + stock.id)

  }

}

/**
 * id： 股票的id
 * name： 股票的名稱
 * price： 股票的價格
 * rating： 股票的股票的評級
 * desc： 股票的描述
 * categories： 股票的類別
 */

export class Stock {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) { }
}
