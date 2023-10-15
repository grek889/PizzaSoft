import React from 'react';
import { Table } from '@mui/material';
import { useEmployeesTableCase } from './model/employees-table.cases';
import Skeleton from '@mui/material/Skeleton';

import { headCells, menuItems } from '@/shared/constants';
import { TBody, TableHeader, TableToolbar } from '@/shared/ui';

export const EmployeesTable = () => {
  const {
    order,
    orderBy,
    employeesData,
    handleRequestSort,
    updateStore,
    handleRowClick,
    handleMenuItemClick,
    handleInArchiveClick,
    isLoading
  } = useEmployeesTableCase();

  React.useEffect(() => {
    updateStore();
  }, [order, orderBy]);

  return (
    <>
      <TableToolbar
        menuItems={menuItems}
        title="Сотрудники"
        handleItemClick={handleMenuItemClick}
        handleCheckboxClick={handleInArchiveClick}
      />
      {isLoading ? (
        <Skeleton variant="rounded" height={60} />
      ) : (
        <Table>
          <TableHeader
            headCells={headCells}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
          {employeesData && (
            <TBody employees={employeesData} onRowClick={handleRowClick} />
          )}
        </Table>
      )}
    </>
  );
};
