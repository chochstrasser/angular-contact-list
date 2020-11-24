import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  tempData = {
    id: 4,
    name: 'first last',
    address: 'address',
    email: 'email',
    phone: 99990003333,
  };

  constructor(
    private router: Router,
    private contactsService: ContactsService
  ) {}

  ngOnInit(): void {}

  onAdd() {
    this.contactsService.add(this.tempData);
    this.router.navigate(['/add'], { skipLocationChange: true });
  }
}
