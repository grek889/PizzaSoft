import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import dayjs from 'dayjs';

import { roleItems, routes } from '@/shared/constants';
import { PhoneInput } from '@/shared/ui/phone-input';
import { useEmployeesEditFormCases } from './model/employees-edit-form.cases';

import { TextField, InputLabel } from '@mui/material';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';

export const EmployeesEditForm = () => {
  const {
    employee,
    setEmployee,
    employeesData,
    handlePhoneChange,
    converDateValue,
    handleDateChange,
    handleSelectChange,
    handleChangeCheckbox,
    updateStore
  } = useEmployeesEditFormCases();

  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    const newEmployee = employeesData?.find(item => item.id === Number(id));
    if (newEmployee) {
      setEmployee(newEmployee);
    }
  }, [employeesData]);

  console.log(employee);
  return (
    employee && (
      <div className="m-4 max-w-max flex flex-col gap-3">
        <div>
          <InputLabel className="mb-2">ФИО</InputLabel>
          <TextField
            className="w-full"
            value={employee.name}
            onChange={e => setEmployee({ ...employee, name: e.target.value })}
          />
        </div>
        <div>
          <InputLabel className="mb-2">Телефон</InputLabel>
          <PhoneInput
            className="w-full"
            onChangeValue={handlePhoneChange}
            defaultValue={employee.phone}
          />
        </div>
        <div>
          <InputLabel className="mb-2">Дата рождения</InputLabel>
          <LocalizationProvider
            adapterLocale={dayjs.locale('ru')}
            dateAdapter={AdapterDayjs}
          >
            <DatePicker
              className="w-full"
              format="DD.MM.YYYY"
              value={converDateValue(employee.birthday)}
              onChange={newValue => newValue && handleDateChange(newValue)}
            />
          </LocalizationProvider>
        </div>
        <div>
          <InputLabel className="mb-2">Должность</InputLabel>
          <Select
            className="w-full"
            value={employee.role}
            onChange={handleSelectChange}
          >
            {roleItems.map(item => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div>
          <FormControlLabel
            control={
              <Checkbox
                checked={employee.isArchive}
                onChange={handleChangeCheckbox}
              />
            }
            label="В Архиве"
          />
        </div>
        <Button
          variant="contained"
          onClick={() => {
            updateStore(employee ?? {});
            navigate(routes.employees);
          }}
        >
          Сохранить
        </Button>
      </div>
    )
  );
};
