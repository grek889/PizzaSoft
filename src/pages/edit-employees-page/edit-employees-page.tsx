import React from 'react';
import { EmployeesEditForm } from '@/widgets';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';
import { routes } from '@/shared/constants';

export const EditEmployeesPage = () => {
  return (
    <div className="m-6 flex flex-col gap-8">
      <div>
        <Link to={routes.employees}>
          <Button variant="outlined" startIcon={<KeyboardBackspaceIcon />}>
            Назад
          </Button>
        </Link>
      </div>
      <div className="flex flex-col justify-center  items-center">
        <Typography variant="h6">Редактирование сотрудника</Typography>
        <EmployeesEditForm />
      </div>
    </div>
  );
};
