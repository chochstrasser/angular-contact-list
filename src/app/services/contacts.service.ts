import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contact } from '../models/Contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private contactsSource = new BehaviorSubject<Contact[]>(this.getContacts());
  currentContacts = this.contactsSource.asObservable();

  private currentContactSource = new BehaviorSubject<Contact>({
    id: null,
    name: '',
    address: '',
    email: '',
    phone: null,
  });
  currentContact = this.currentContactSource.asObservable();

  constructor() {}

  add(data) {
    const currentValue = this.contactsSource.value;
    const id =
      Math.max.apply(
        Math,
        currentValue.map((contact) => {
          return contact.id;
        })
      ) + 1;
    const updatedValue = [...currentValue, { ...data, id }];
    this.contactsSource.next(updatedValue);
  }

  edit(data) {
    const currentValue = this.contactsSource.value;
    const updateValue = currentValue.map((contact) => {
      if (contact.id === data.id) return data;
      return contact;
    });
    this.contactsSource.next(updateValue);
  }

  delete(data) {
    const currentValue = this.contactsSource.value;
    const updateValue = currentValue.filter(
      (contact) => contact.id !== data.id
    );
    this.contactsSource.next(updateValue);
  }

  updateContact(data) {
    this.currentContactSource.next(data);
  }

  getContacts() {
    return [
      {
        id: 1,
        name: 'John Doe',
        address: '15 Roosevelt Avenue Lawrence Township, NJ 08648',
        email: 'john.doe@nhmicrosoft.org',
        phone: 18065432234,
      },
      {
        id: 2,
        name: 'Mary James',
        address: '783 Hill Street Bangor, ME 04401',
        email: '4dante@chanmelon.com',
        phone: 13107821058,
      },
      {
        id: 3,
        name: 'Ethan Dakota',
        address: '7227 Main Court Reisterstown, MD 21136',
        email: 'wramziorton19@trustedchest.site',
        phone: 18065432234,
      },
    ];
  }
}
