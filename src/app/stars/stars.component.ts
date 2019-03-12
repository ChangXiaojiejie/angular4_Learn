import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  stars: boolean[]
  @Input()
  num: number = 0
  starss: boolean[]
  constructor() { }

  ngOnInit() {
    // console.log(this.num)
    this.starss = []
    for (let i = 1; i <= 5; i++) {
      this.starss.push(i > this.num)
    }
    // console.log(this.starss)
  }
}
