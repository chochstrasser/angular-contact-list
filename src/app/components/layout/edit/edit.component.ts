import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  contactForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(),
  });

  constructor(
    private router: Router,
    private contactsService: ContactsService
  ) {}

  ngOnInit(): void {
    this.contactsService.currentContact.subscribe((contact) =>
      this.contactForm.patchValue(contact)
    );
  }

  onCancel() {
    this.router.navigate([''], { skipLocationChange: true });
  }

  onDelete() {
    this.contactsService.delete(this.contactForm.value);
    this.router.navigate([''], { skipLocationChange: true });
  }

  onSave() {
    this.contactsService.edit(this.contactForm.value);
    this.router.navigate([''], { skipLocationChange: true });
  }
}
