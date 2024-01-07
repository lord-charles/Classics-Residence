// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";

const rows = [
  {
    age: 27,
    status: "current",
    date: "09/27/2018",
    dateleft: "residing",
    name: "charles mwaniki",
    phone: "076473674",
  },
  {
    age: 61,
    date: "09/23/2016",
    status: "past",
    name: "Margaret Bowers",
    phone: "016743774",
    dateleft: "09/23/2022",
  },
];

const statusObj = {
  applied: { color: "info" },
  rejected: { color: "error" },
  current: { color: "success" },
  past: { color: "warning" },
  professional: { color: "success" },
};

const DashboardTable = () => {
  return (
    <Card>
      <div>
        <h2 className="text-black text-center p-4 font-semibold text-[19px]">
          Current & previos occupants in F6
        </h2>
      </div>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label="table in dashboard">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Date Joined</TableCell>
              <TableCell>Date left</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                hover
                key={row.name}
                sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
              >
                <TableCell
                  sx={{ py: (theme) => `${theme.spacing(0.5)} !important` }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                      sx={{ fontWeight: 500, fontSize: "0.875rem !important" }}
                    >
                      {row.name}
                    </Typography>
                    <Typography variant="caption">{row.designation}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.dateleft}</TableCell>

                <TableCell>
                  <Chip
                    label={row.status}
                    color={statusObj[row.status].color}
                    sx={{
                      height: 24,
                      fontSize: "0.75rem",
                      textTransform: "capitalize",
                      "& .MuiChip-label": { fontWeight: 500 },
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default DashboardTable;
