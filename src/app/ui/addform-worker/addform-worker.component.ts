import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css']
})
export class AddformWorkerComponent implements OnInit {

  id: number;
  name = '';
  surname = '';
  type = 0;
  myWorkerType = MyWorkerType;

  @Output() addWorker = new EventEmitter();
  @Output() editWorker = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onAddWorker() {
    let worker: MyWorker = {
      name: this.name,
      surname: this.surname,
      type: this.type,
    };
    if(worker.name.trim() != '' && worker.surname.trim() != '') {
      this.addWorker.emit(worker);
    } else { alert("Fill in all fields"); }
  }

  onEditdWorker() {
    let worker: MyWorker = {
      id: this.id,
      name: this.name,
      surname: this.surname,
      type: this.type,
    }
    this.editWorker.emit(worker);
  }
}
