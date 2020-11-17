import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'starter-template-form',
    templateUrl: './starterTemplateForm.component.html'
})
export class StarterTemplateFormComponent implements OnInit {
    customer: any;
    message: string;
    submitted : boolean = false;

    constructor() { }

    ngOnInit() { 
        this.customer = {
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            province: '',
            country: '',
            postalCode: '',
            phoneNumber: '',
            email: '',
        };
    }

    onSubmit() {
        // this.message = 'You typed: ' + this.customer.firstName;
        this.submitted = true;
    }

}