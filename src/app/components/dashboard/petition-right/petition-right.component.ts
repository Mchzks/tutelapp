import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PetitionRightsDefinitionComponent } from '../../modals/petition-rights-definition/petition-rights-definition.component';
import { PetitionRightsProtectionsComponent } from '../../modals/petition-rights-protections/petition-rights-protections.component';

@Component({
  selector: 'app-petition-right',
  templateUrl: './petition-right.component.html',
  styleUrls: ['./petition-right.component.css']
})
export class PetitionRightComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog1(): void {
    const dialogRef = this.dialog.open(PetitionRightsDefinitionComponent, {
      width: '660px',
      height: '600px'
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(PetitionRightsProtectionsComponent, {
      width: '660px',
      height: '600px'
    });
  }

}
