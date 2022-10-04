import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { ModalStatus } from './modal-status';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private readonly _display = new BehaviorSubject<ModalStatus>(ModalStatus.CLOSE);

  watch(): Observable<ModalStatus> {
    return this._display.asObservable();
  }

  open() {
    this._display.next(ModalStatus.OPEN);
  }

  close() {
    this._display.next(ModalStatus.CLOSE);
  }
}
