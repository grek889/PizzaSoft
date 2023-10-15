import React from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store';
import {
  selectEmployeesData,
  setEmployeesData
} from '@/app/store/slices/employees';
import { Employee, EmployeeRole } from '@/shared/constants';
import dayjs, { Dayjs } from 'dayjs';
import { SelectChangeEvent } from '@mui/material/Select';

export const useEmployeesEditFormCases = () => {
  const [employee, setEmployee] = React.useState<Employee | null>(null);

  const employeesData = useAppSelector(selectEmployeesData);
  const dispatch = useAppDispatch();

  const handlePhoneChange = (value: string) => {
    if (!employee) return;
    setEmployee({ ...employee, phone: value });
  };

  const converDateValue = (value: string) => {
    return dayjs(new Date(value.split('.').reverse().join('-')));
  };

  const handleDateChange = (value: Dayjs) => {
    const newValue = dayjs(value).format('DD.MM.YYYY');

    if (!employee) return;
    setEmployee({
      ...employee,
      birthday: newValue === 'Invalid Date' ? '' : newValue
    });
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    if (!employee) return;
    setEmployee({
      ...employee,
      role: event.target.value as EmployeeRole
    });
  };

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!employee) return;
    setEmployee({
      ...employee,
      isArchive: event.target.checked
    });
  };

  const updateStore = (employee: Employee) => {
    const newEmployeesData =
      employeesData?.map(item => {
        if (item.id === employee.id) {
          return employee;
        }
        return item;
      }) ?? null;

    dispatch(setEmployeesData(newEmployeesData));
  };

  return {
    employee,
    setEmployee,
    employeesData,
    handlePhoneChange,
    converDateValue,
    handleDateChange,
    handleSelectChange,
    handleChangeCheckbox,
    updateStore
  };
};
