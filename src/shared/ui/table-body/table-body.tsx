import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Employee, ROLE_LABEL_MAP } from '../../constants';

interface Props {
  employees: Employee[];
  onRowClick: (employee: Employee) => void;
}

export const TBody: React.FC<Props> = ({ employees, onRowClick }) => {
  return (
    <TableBody>
      {employees.map(employee => (
        <TableRow
          hover
          key={employee.id}
          className="cursor-pointer"
          onClick={() => onRowClick(employee)}
        >
          <TableCell component="th" scope="row">
            {employee.name}
          </TableCell>
          <TableCell>{employee.birthday}</TableCell>
          <TableCell>{ROLE_LABEL_MAP[employee.role]}</TableCell>
          <TableCell>{employee.phone}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
