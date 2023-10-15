export enum RoutesMap {
  Employees = 'employees',
  Edit = 'edit'
}

export const routes = {
  // Работники
  employees: `/${RoutesMap.Employees}`,

  // Редактирование
  edit: `/${RoutesMap.Employees}/${RoutesMap.Edit}/:id`
};
