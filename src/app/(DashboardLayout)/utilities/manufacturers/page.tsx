"use client";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import BlankCard from "@/app/(DashboardLayout)/components/shared/BlankCard";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { CardContent, Grid, Typography } from "@mui/material";
import ProductPerformance from "./ProductPerformance";

const TypographyPage = () => {
  return (
    <PageContainer title="Typography" description="this is Typography">
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
              <ProductPerformance />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default TypographyPage;
