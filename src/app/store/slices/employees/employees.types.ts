import { Employee } from '@/shared/constants';

export interface EmployeesState {
  data: Employee[] | null;
  isLoading: boolean;
}

export type SetEmployeesDataPayload = EmployeesState['data'];
