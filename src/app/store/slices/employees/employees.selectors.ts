import { type RootState } from '@/app/store';

export const selectEmployeesData = (state: RootState) => state.employees.data;
export const selectEmployeesLoading = (state: RootState) =>
  state.employees.isLoading;
