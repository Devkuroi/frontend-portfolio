import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { EmailDTO } from '../../core/models/email-dto';
import { EmailServiceService } from '../../core/service/email-service.service';

@Component({
  selector: 'app-contactme',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contactme.component.html',
  styleUrl: './contactme.component.css'
})
export class ContactmeComponent {

  contactForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.nullValidator]),
    email: new FormControl("", [Validators.required, Validators.email, Validators.nullValidator]),
    message: new FormControl("", [Validators.required, Validators.nullValidator])
  })

  constructor(private emailService: EmailServiceService ) {}

  emailDTO: EmailDTO = {
    name: this.contactForm.value.name ?? "",
    email: this.contactForm.value.email ?? "",
    message: this.contactForm.value.message ?? ""
  }

  submitForm() {
    this.emailService.submitForm(this.emailDTO);
  }

}
