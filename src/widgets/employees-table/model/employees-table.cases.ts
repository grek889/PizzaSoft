import React from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store';
import {
  selectEmployeesData,
  selectEmployeesLoading,
  setEmployeesData
} from '@/app/store/slices/employees';
import {
  DEFAULT_FILTER_VALUE,
  Employee,
  FilterMenuItem,
  Order,
  routes
} from '@/shared/constants';

import data from '@/shared/employees.json';
import { useCustomNavigate } from '@/shared/hooks/use-custom-navigate';

export const useEmployeesTableCase = () => {
  const [order, setOrder] = React.useState<Order>(Order.Asc);
  const [orderBy, setOrderBy] = React.useState<keyof Employee>('name');
  const employeesData = useAppSelector(selectEmployeesData);
  const isLoading = useAppSelector(selectEmployeesLoading);

  const navigate = useCustomNavigate();
  const dispatch = useAppDispatch();

  const compareDate = (a: string, b: string, order: Order): number => {
    const dateA = new Date(a.split('.').reverse().join('-'));
    const dateB = new Date(b.split('.').reverse().join('-'));
    if (order === Order.Desc) {
      return dateB.getTime() - dateA.getTime();
    }
    return dateA.getTime() - dateB.getTime();
  };

  const sortEmployees = () => {
    return (
      employeesData?.slice().sort((a, b) => {
        if (orderBy === 'birthday') {
          return compareDate(a.birthday, b.birthday, order);
        }
        if (order === Order.Desc) {
          return b[orderBy] < a[orderBy] ? -1 : 1;
        }
        return a[orderBy] < b[orderBy] ? -1 : 1;
      }) ?? []
    );
  };

  const updateStore = () => {
    dispatch(setEmployeesData(sortEmployees()));
  };

  const handleRequestSort = (
    _event: React.MouseEvent<unknown>,
    property: keyof Employee
  ) => {
    const isAsc = orderBy === property && order === Order.Asc;
    setOrder(isAsc ? Order.Desc : Order.Asc);
    setOrderBy(property);
  };

  const handleRowClick = (employee: Employee) => {
    navigate(routes.edit, { id: employee.id });
  };

  const handleMenuItemClick = (item: FilterMenuItem) => {
    if (item.value === DEFAULT_FILTER_VALUE) {
      return dispatch(setEmployeesData(data as Employee[]));
    }
    const newData = data.filter(employee => employee.role === item.value);
    dispatch(setEmployeesData(newData as Employee[]));
  };

  const handleInArchiveClick = (checked: boolean) => {
    const newData = data.filter(employee => employee.isArchive === checked);
    dispatch(setEmployeesData(newData as Employee[]));
  };

  return {
    employeesData,
    isLoading,
    handleRequestSort,
    handleRowClick,
    updateStore,
    order,
    orderBy,
    handleMenuItemClick,
    handleInArchiveClick
  };
};
