import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FundamentalRightsDefinitionComponent } from '../../modals/fundamental-rights-definition/fundamental-rights-definition.component';
import { FundamentalRightsVulnerationsComponent } from '../../modals/fundamental-rights-vulnerations/fundamental-rights-vulnerations.component';
import { PoliticalConstitutionComponent } from '../../modals/political-constitution/political-constitution.component';

@Component({
  selector: 'app-fundamental-rights',
  templateUrl: './fundamental-rights.component.html',
  styleUrls: ['./fundamental-rights.component.css']
})
export class FundamentalRightsComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog1(): void {
    const dialogRef = this.dialog.open(FundamentalRightsDefinitionComponent, {
      width: '660px',
      height: '600px'
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(PoliticalConstitutionComponent, {
      width: '660px',
      height: '600px'
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(FundamentalRightsVulnerationsComponent, {
      width: '660px',
      height: '600px'
    });
  }
}
