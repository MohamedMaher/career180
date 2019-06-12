import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cfooter',
  templateUrl: './cfooter.component.html',
  styleUrls: ['./cfooter.component.css']
})
export class CfooterComponent implements OnInit {

  constructor(private imgModal:NgbModal) { }

  ngOnInit() {
  }

  open(content) {
    this.imgModal.open(content);
  }
  imgClick(imgMod){
    this.imgModal.open(imgMod);
  }
}
