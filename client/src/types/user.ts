export interface TContacts {
  id: number;
  contactName: string;
  numberPhone: string;
}

export interface TUser {
  id: number;
  name: string;
  contacts: TContacts[] | [];
}
