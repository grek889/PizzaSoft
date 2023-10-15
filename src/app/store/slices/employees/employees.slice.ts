import { createSlice, type Draft, type PayloadAction } from '@reduxjs/toolkit';

import { employeesInitialState } from './employees.constants';
import { EmployeesState, SetEmployeesDataPayload } from './employees.types';

const employeesSlice = createSlice({
  name: 'auth',
  initialState: employeesInitialState,
  reducers: {
    setEmployeesData: (
      state: Draft<EmployeesState>,
      action: PayloadAction<SetEmployeesDataPayload>
    ) => {
      state.data = action.payload;
    },
    setLoading: (
      state: Draft<EmployeesState>,
      action: PayloadAction<boolean>
    ) => {
      state.isLoading = action.payload;
    }
  }
});

export const { setEmployeesData, setLoading } = employeesSlice.actions;

export default employeesSlice.reducer;
