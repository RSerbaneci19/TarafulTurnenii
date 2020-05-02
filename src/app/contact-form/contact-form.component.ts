import {Component, HostListener} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ConnectionService} from "../connection.service";
import {AlertService} from "../_alert";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  options = {
    autoClose: true,
    keepAfterRouteChange: false
  };

  constructor(private fb: FormBuilder, private connectionService: ConnectionService, public alertService: AlertService) {

    this.contactForm = fb.group({
      'contactFormName': ['', Validators.required],
      'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
      'contactFormSubjects': ['', Validators.required],
      'contactFormMessage': ['', Validators.required],
      'contactFormPhone': ['', Validators.required],
    });
  }

  @HostListener('input') oninput() {

    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  onSubmit() {
    this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
      this.alertService.success('Multumim! Am primit mesajul dumneavoastra!', this.options.autoClose);
      this.contactForm.reset();
      this.disabledSubmitButton = true;
    }, error => {
      this.alertService.error('Ne pare rau, a aparut o eroare! Va rugam incercati mai tarziu!')
      console.log('Error', error);
    });
  }
}

