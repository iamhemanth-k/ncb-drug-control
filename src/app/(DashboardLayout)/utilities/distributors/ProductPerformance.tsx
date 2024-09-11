import DashboardCard from "@/app/(DashboardLayout)//components/shared/DashboardCard";
import {
  Box,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { IconCurrencyRupee } from "@tabler/icons-react";

const products = [
  {
    id: "1",
    name: "Hemanth Pharmaceuticals",
    post: "Opium Manufacturer",
    pname: "23ffs-sfe34-dgfh6-1346f",
    priority: "Low",
    pbg: "primary.main",
    budget: "56.4L",
  },
  {
    id: "2",
    name: "J&M Co",
    post: "",
    pname: "467ff-5sdf6-dsf54-fh65",
    priority: "Medium",
    pbg: "secondary.main",
    budget: "24.5L",
  },
  {
    id: "3",
    name: "Sri Pharmaceuticals",
    post: "",
    pname: "789ff-sdf6-dsf54-fh65",
    priority: "High",
    pbg: "error.main",
    budget: "120.8L",
  },
  {
    id: "4",
    name: "Nirav & Co",
    post: "",
    pname: "99843-5sdf6-dsf54-fh65",
    priority: "Critical",
    pbg: "success.main",
    budget: "2.4C",
  },
];

const ProductPerformance = () => {
  return (
    <DashboardCard title="Distributors">
      <Box sx={{ overflow: "auto", width: { xs: "280px", sm: "auto" } }}>
        <Table
          aria-label="simple table"
          sx={{
            whiteSpace: "nowrap",
            mt: 2,
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Id
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Manufacturer Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  License Number
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Priority
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="subtitle2" fontWeight={600}>
                  Total Spending
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.name}>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    {product.id}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography variant="subtitle2" fontWeight={600}>
                        {product.name}
                      </Typography>
                      <Typography
                        color="textSecondary"
                        sx={{
                          fontSize: "13px",
                        }}
                      >
                        {product.post}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography
                    color="textSecondary"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    {product.pname}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    sx={{
                      px: "4px",
                      backgroundColor: product.pbg,
                      color: "#fff",
                    }}
                    size="small"
                    label={product.priority}
                  ></Chip>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">₹{product.budget}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </DashboardCard>
  );
};

export default ProductPerformance;
