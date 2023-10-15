import { routes } from '@/shared/constants';
import { Navigate, Route, Routes } from 'react-router-dom';
import { EditEmployeesPage, EmployeesPage } from '.';

export const Routing = () => {
  return (
    <Routes>
      <Route index element={<Navigate to={routes.employees} />} />
      <Route path={routes.employees} element={<EmployeesPage />} />
      <Route path={routes.edit} element={<EditEmployeesPage />} />

      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};
