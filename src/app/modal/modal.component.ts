import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../models/card';
import { BsModalRef } from 'ngx-bootstrap/modal/';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() card: Card;
  @Output() output = new EventEmitter();

  bookTitle: string;
  bookSeries: string;
  bookAuthor: string;
  done: boolean;
  board: {};
  edit: boolean;

  constructor(public modalRef: BsModalRef) {}

  ngOnInit() {
    this.board = JSON.parse(localStorage.getItem("bbt_board"));
    this.bookTitle = this.board['card'+this.card.id].bookTitle;
    this.bookSeries = this.board['card'+this.card.id].bookSeries;
    this.bookAuthor = this.board['card'+this.card.id].bookAuthor;
    this.done = this.board['card'+this.card.id].done;
  }

  registerBook(id){
    this.bookTitle = (<HTMLInputElement>document.getElementById("book-title")).value;
    this.bookSeries = (<HTMLInputElement>document.getElementById("book-series")).value;
    this.bookAuthor = (<HTMLInputElement>document.getElementById("book-author")).value;
    
    // Legge inn data i local storage
    
    this.board['card'+id].bookTitle = this.bookTitle;
    this.board['card'+id].bookSeries = this.bookSeries;
    this.board['card'+id].bookAuthor = this.bookAuthor;

    localStorage.setItem("bbt_board" ,JSON.stringify(this.board));
    this.output.emit(this.board);
  }

  setDone(id){
    if (this.done){
      this.done = false;
    }
    else{
      this.done = true;
    }
    this.board['card'+id].done = this.done;
    localStorage.setItem("bbt_board" ,JSON.stringify(this.board));
    this.output.emit(this.board);
  }

  editBook(id){
    this.edit = true;
  }
  removeBook(id){
    this.board['card'+id] = {
      done: false,
      bookTitle: null,
      bookSeries: null,
      bookAuthor: null
    };
    localStorage.setItem("bbt_board" ,JSON.stringify(this.board));
    this.output.emit(this.board);
  }
}
