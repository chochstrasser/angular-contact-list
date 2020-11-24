import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  contactForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
  });

  constructor(
    private router: Router,
    private contactsService: ContactsService
  ) {}

  ngOnInit(): void {}

  onCancel() {
    this.router.navigate([''], { skipLocationChange: true });
  }

  onSave() {
    this.contactsService.add(this.contactForm.value);
    this.router.navigate([''], { skipLocationChange: true });
  }
}
