"use client";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { Box, Grid, Paper } from "@mui/material";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import ProductPerformance from "./ProductPerformance";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

const Shadow = () => {
  return (
    <PageContainer title="Distributors">
      <Grid container>
        <Grid item xs={12}>
          <ProductPerformance />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Shadow;
