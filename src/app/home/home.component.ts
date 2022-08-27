import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  modalRef: BsModalRef | any;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }
  openToDo(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
