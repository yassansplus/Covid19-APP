import {Component} from '@angular/core';
import {ApiCovidService} from '../service/api-covid.service';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    constructor(private apiCovid: ApiCovidService) {
    }

    private info: any;

    ngOnInit() {
        this.apiCovid.getGeneralCase().subscribe((data) => {

            this.info = data;
        });
    }
}
