import { Component, OnInit } from '@angular/core';
import { UnitsService} from '../../services/units.service'

@Component({
  selector: 'app-units-list',
  templateUrl: './units-list.component.html',
  styleUrls: ['./units-list.component.css']
})
export class UnitsListComponent implements OnInit {

  units: any = [];

  constructor(private unitService: UnitsService) { }

  ngOnInit() {
    this.unitService.getUnits().subscribe(
      res => {
        this.units = res[0];
      },
      err => console.log(err)

    );
  }

}