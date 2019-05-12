import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../models/card';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  board: {};
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  ngOnInit() {
    this.board = JSON.parse(localStorage.getItem('bbt_board'));
  }

  openModal(card) {
    
    this.modalRef = this.modalService.show(
      ModalComponent,
      {
        initialState: {
          card: card
        },
        class: 'modal-lg modal-dialog-centered',
      }
    );
    this.modalRef.content.closeBtnName = 'Close';
    this.modalRef.content.output.subscribe((value) => {
      this.board = value // here you will get the value
      });
  }

}
