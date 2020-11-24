import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/Contact';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  headers: String[];
  contacts: Contact[];

  constructor(
    private router: Router,
    private contactsService: ContactsService
  ) {}

  ngOnInit(): void {
    this.headers = ['Name', 'Address', 'Email', 'Phone'];
    this.contactsService.currentContacts.subscribe(
      (contact) => (this.contacts = contact)
    );
  }

  onSelected(item) {
    console.log(item);
    this.router.navigate(['/edit'], { skipLocationChange: true });
  }
}
