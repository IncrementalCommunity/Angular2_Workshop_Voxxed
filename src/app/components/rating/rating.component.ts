import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit, OnChanges {
  @Input() rating;
  @Output() onChangeRating = new EventEmitter();
  ratings = [
    {colored: false},
    {colored: true},
    {colored: false},
    {colored: false},
    {colored: false}
  ];

  constructor() { }

  ngOnInit() {
    this.updateRating();
  }

  ngOnChanges(changes) {
    this.updateRating();
  }

  updateRating() {
      this.ratings = this.ratings.map((r, i) => ({colored: i <= this.rating}));
  }

  changeRating(index) {
    this.onChangeRating.emit(index);
  }
}
