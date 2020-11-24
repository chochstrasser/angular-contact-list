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
  order: string;
  fillColor: string;

  constructor(
    private router: Router,
    private contactsService: ContactsService
  ) {}

  ngOnInit(): void {
    this.headers = ['Name', 'Address', 'Email', 'Phone'];
    this.contactsService.currentContacts.subscribe(
      (contact) => (this.contacts = contact)
    );
    this.order = 'desc';
    this.fillColor = 'rgb(255,255,255)';
  }

  onSort(item) {
    if (item === 'Name') {
      this.contacts.sort(compareValues(item.toLowerCase(), this.order));
      this.order = this.order === 'desc' ? 'asc' : 'desc';
    }
  }

  onSelected(item) {
    this.contactsService.updateContact(item);
    this.router.navigate(['/edit'], { skipLocationChange: true });
  }
}

const compareValues = (key, order = 'asc') => {
  const innerSort = (a, b) => {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === 'desc' ? comparison * -1 : comparison;
  };
  return innerSort;
};
