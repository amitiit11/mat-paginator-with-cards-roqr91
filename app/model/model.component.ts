import { Component, OnInit, ViewChild, ElementRef,Input } from '@angular/core';
import { Card } from '../app.component';

@Component({
  selector: 'app-model',
  template: `
    <div #myModal class="container">
    <div class="content popup">
      
      <p>Title:{{currentCard.title}}</p>
      <p>Subtitle:{{currentCard.subtitle}}</p>
      <p>POC:{{currentCard.poc}}</p>
      <p>Technology:{{currentCard.technology}}</p>
      <p>About:{{currentCard.text}}</p>
      <button (click)="close()">Close</button>
    </div>
    </div>
  `,
  styleUrls: ['./model.component.css'],
})
export class ModelComponent {
  @ViewChild('myModal') modal: ElementRef;
  @Input() currentCard:Card;
  open() {
    console.log(this.currentCard);
    this.modal.nativeElement.style.display = 'block';
  }

  close() {
    this.modal.nativeElement.style.display = 'none';
  }
}
