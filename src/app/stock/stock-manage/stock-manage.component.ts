import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockService, Stock } from '../stock.service';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {
  private stocks: Array<Stock>;
  constructor(public router: Router, private stockService: StockService) { }
  // 組件初始化會调用這個方法
  ngOnInit() {
    this.stocks = this.stockService.getStocks()
  }

  // 创建的表单的方法
  create() {
    this.router.navigateByUrl('/stock/0');
    // console.log(1111111)
  }

  // 修改的表单的方法
  update(stock: Stock) {
    this.router.navigateByUrl('/stock/' + stock.id)

  }

}


