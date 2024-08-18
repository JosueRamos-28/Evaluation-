import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pokemon } from '../models/pokemon.model'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-pokemon-detail-dialog',
  templateUrl: './pokemon-detail-dialog.component.html',
  styleUrls: ['./pokemon-detail-dialog.component.css']
})
export class PokemonDetailDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<PokemonDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Pokemon
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}



