import React from 'react';
import { Routing } from '@/pages/routing';
import { useAppDispatch } from './store';
import { setEmployeesData, setLoading } from './store/slices/employees';

import data from '@/shared/employees.json';
import { Employee } from '@/shared/constants';

export const App = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(setEmployeesData(data as Employee[]));
    dispatch(setLoading(false));
  }, []);

  return <Routing />;
};
