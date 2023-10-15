export enum EmployeeRole {
  Driver = 'driver',
  Cook = 'cook',
  Waiter = 'waiter'
}

export interface Employee {
  id: number;
  name: string;
  isArchive: boolean;
  role: EmployeeRole;
  phone: string;
  birthday: string;
}

export interface FilterMenuItem {
  text: string;
  value: string;
}

export enum Order {
  Asc = 'asc',
  Desc = 'desc'
}

export type HeadCell = {
  id: keyof Employee;
  label: string;
};
