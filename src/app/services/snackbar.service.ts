import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private _snackBar: MatSnackBar) {}

  createSnackbar(type: string, message: string, duration: number = 4000) {
    this._snackBar.open(message, '', {
      duration: duration,
      panelClass: type
    });
  }
}
