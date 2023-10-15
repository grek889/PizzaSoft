import { EmployeeRole, HeadCell } from '.';

export const headCells: HeadCell[] = [
  { id: 'name', label: 'ФИО' },
  { id: 'birthday', label: 'Дата рождения' },
  { id: 'role', label: 'Должность' },
  { id: 'phone', label: 'Телефон' }
];

export const DEFAULT_FILTER_VALUE = 'all';

export const menuItems = [
  {
    text: 'Все',
    value: DEFAULT_FILTER_VALUE
  },
  {
    text: 'Повар',
    value: EmployeeRole.Cook
  },
  {
    text: 'Водитель',
    value: EmployeeRole.Driver
  },
  {
    text: 'Официант',
    value: EmployeeRole.Waiter
  }
];

export const roleItems = [
  {
    label: 'Повар',
    value: EmployeeRole.Cook
  },
  {
    label: 'Водитель',
    value: EmployeeRole.Driver
  },
  {
    label: 'Официант',
    value: EmployeeRole.Waiter
  }
];

export const ROLE_LABEL_MAP: Record<EmployeeRole, string> = {
  [EmployeeRole.Driver]: 'Водитель',
  [EmployeeRole.Waiter]: 'Официант',
  [EmployeeRole.Cook]: 'Повар'
};
