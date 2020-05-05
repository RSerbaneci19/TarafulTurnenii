import {AfterViewInit, Component, HostListener} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ConnectionService} from "../connection.service";
import {AlertService} from "../_alert";

@Component({
  selector: 'app-events-form',
  templateUrl: './events-form.component.html',
  styleUrls: ['./events-form.component.scss']
})
export class EventsFormComponent implements AfterViewInit {

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
      'contactFormMainDropdown': ['', Validators.required],
      'contactFormLocationType': ['', Validators.required],
      'contactFormPhone': ['', Validators.required],
      'contactFormAddress': ['', Validators.required],
      'contactFormDate': ['', Validators.required],
      'contactFormFromTime': ['', Validators.required],
      'contactFormToTime': ['', Validators.required],
      'contactFormMessage': ['', !Validators],
    });
  }

  ngAfterViewInit() {
    this.alertService.warn("Bine ați venit! Vă rugăm să completați câmpurile de mai jos, apoi apăsați butonul 'TRIMITE'. Dacă datele dumneavoastră sunt valide, veți primii o notificare de succes. Ulterior, un membru al Tarafului Turnenii vă va contacta in cel mai scurt timp posibil. Vă mulțumim!")
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

