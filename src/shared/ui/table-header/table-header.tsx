import React from 'react';
import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { Employee, Order, HeadCell } from '@/shared/constants';

import classes from './table-header.module.scss';

interface Props {
  headCells: HeadCell[];
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Employee
  ) => void;
  order: Order;
  orderBy: string;
}

export const TableHeader: React.FC<Props> = ({
  headCells,
  order,
  orderBy,
  onRequestSort
}) => {
  const createSortHandler =
    (property: keyof Employee) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell key={headCell.id}>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
