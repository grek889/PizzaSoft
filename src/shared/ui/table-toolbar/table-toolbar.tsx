import React from 'react';
import {
  Checkbox,
  FormControlLabel,
  IconButton,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FilterListIcon from '@mui/icons-material/FilterList';
import { FilterMenuItem } from '../../constants';

interface Props {
  menuItems: FilterMenuItem[];
  title?: string;
  handleItemClick: (item: FilterMenuItem) => void;
  handleCheckboxClick: (checked: boolean) => void;
}

export const TableToolbar: React.FC<Props> = ({
  menuItems,
  title,
  handleItemClick,
  handleCheckboxClick
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [checked, setChecked] = React.useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    handleCheckboxClick(event.target.checked);
  };

  return (
    <Toolbar className="flex justify-between">
      <Typography variant="h6" id="tableTitle" component="div">
        {title}
      </Typography>
      <div>
        <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={handleChangeCheckbox} />
          }
          label="В Архиве"
        />
        <Tooltip title="Filter list">
          <>
            <IconButton onClick={handleClick}>
              <FilterListIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              {menuItems.map(item => (
                <MenuItem key={item.text} onClick={() => handleItemClick(item)}>
                  {item.text}
                </MenuItem>
              ))}
            </Menu>
          </>
        </Tooltip>
      </div>
    </Toolbar>
  );
};
