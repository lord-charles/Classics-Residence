"use client";

import React from "react";

// ** MUI Imports
import Grid from "@mui/material/Grid";

// ** Icons Imports
import Poll from "mdi-material-ui/Poll";
import CurrencyUsd from "mdi-material-ui/CurrencyUsd";
import HelpCircleOutline from "mdi-material-ui/HelpCircleOutline";
import BriefcaseVariantOutline from "mdi-material-ui/BriefcaseVariantOutline";

// ** Custom Components Imports
import CardStatisticsVerticalComponent from "../components/card-statistics/card-stats-vertical";

// ** Styled Component Import
import ApexChartWrapper from "../components/react-apexcharts";

// ** Demo Components Imports
import Table from "../components/dashboard/Table";
import Trophy from "../components/dashboard/Trophy";
import TotalEarning from "../components/dashboard/TotalEarning";
import StatisticsCard from "../components/dashboard/StatisticsCard";

import DepositWithdraw from "../components/dashboard/DepositWithdraw";

const Account = () => {
  return (
    <div className=" bg-lightkblue  overflow-x-hidden flex justify-center pb-5">
      <div className="lg:mx-[100px] xl:mx-[40px] xxl:mx-[300px] md:mx-[10px] xxxs:px-[15px] w-full h-fit lg:mt-[130px] md:mt-[130px] xxxs:mt-[90px]">
        {/* part 1  */}
        <ApexChartWrapper>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Trophy />
            </Grid>
            <Grid item xs={12} md={8}>
              <StatisticsCard />
            </Grid>
            {/* <Grid item xs={12} md={6} lg={4}>
              <WeeklyOverview />
            </Grid> */}
            <Grid item xs={12} md={6} lg={4}>
              <TotalEarning />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <CardStatisticsVerticalComponent
                    stats="ksh765"
                    icon={<CurrencyUsd />}
                    color="success"
                    trendNumber="+2.8%"
                    title="Internet expense"
                    subtitle="Current month"
                  />
                </Grid>
                <Grid item xs={6}>
                  <CardStatisticsVerticalComponent
                    stats="ksh670"
                    title="Internet expense"
                    trend="negative"
                    color="secondary"
                    trendNumber="-1%"
                    subtitle="last Month"
                    icon={<CurrencyUsd />}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CardStatisticsVerticalComponent
                    stats="ksh86,278"
                    trend="positive"
                    trendNumber="-1.5%"
                    title="This Year's Total Bills"
                    subtitle="Current Year"
                    icon={<Poll />}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CardStatisticsVerticalComponent
                    stats="ksh82,278"
                    color="warning"
                    trend="negative"
                    trendNumber="-1%"
                    subtitle="Last Year"
                    title="last Year's Total Bills"
                    icon={<Poll />}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={0} md={0} lg={0}>
              <DepositWithdraw />
            </Grid>

            <Grid item xs={12}>
              <Table />
            </Grid>
          </Grid>
        </ApexChartWrapper>
      </div>
    </div>
  );
};

export default Account;
