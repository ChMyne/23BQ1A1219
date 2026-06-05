import { MenuItem, Select } from "@mui/material";

function FilterBar({ value, onChange }) {
  return (
    <Select
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <MenuItem value="All">All</MenuItem>
      <MenuItem value="Placement">Placement</MenuItem>
      <MenuItem value="Result">Result</MenuItem>
      <MenuItem value="Event">Event</MenuItem>
    </Select>
  );
}

export default FilterBar;