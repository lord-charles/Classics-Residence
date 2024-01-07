// ** MUI Imports
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

// ** Icons Imports
import TrendingUp from "mdi-material-ui/TrendingUp";
import CurrencyUsd from "mdi-material-ui/CurrencyUsd";
import DotsVertical from "mdi-material-ui/DotsVertical";
import CellphoneLink from "mdi-material-ui/CellphoneLink";
import AccountOutline from "mdi-material-ui/AccountOutline";
import {
  CurrencyBitcoin,
  CurrencyExchangeSharp,
  Money,
  MoneyOff,
  TrendingUpOutlined,
} from "@mui/icons-material";
import {
  Billboard,
  Cash,
  ChevronDoubleDown,
  ChevronDown,
  ChevronDownBox,
  ChevronUp,
  CurrencySign,
  MonitorEye,
  WaterAlert,
  WaterBoilerOff,
  WaterCheckOutline,
  WaterCircle,
} from "mdi-material-ui";

const salesData = [
  {
    stats: "Ksh 200",
    title: "Current water bill",
    color: "success",

    icon: <WaterCircle sx={{ fontSize: "1.75rem" }} />,
    avatarColor: "success",
    trendNumber: "5.2%",
    trend: <ChevronUp sx={{ color: "success.main", fontWeight: 600 }} />,
    trend2: <ChevronDown sx={{ color: "success.main", fontWeight: 600 }} />,
  },
  {
    stats: "Ksh 250",
    title: "Previous water bill",
    color: "primary",
    icon: <WaterCheckOutline sx={{ fontSize: "1.75rem" }} />,
    trendNumber: "2.2%",
    trend2: <ChevronUp sx={{ color: "error.main", fontWeight: 600 }} />,
    trend: <ChevronDown sx={{ color: "error.main", fontWeight: 600 }} />,
  },
  {
    stats: "ksh 5,000",
    color: "success",
    title: "Current Rent",
    icon: <CurrencyBitcoin sx={{ fontSize: "1.75rem" }} />,
    trendNumber: "0.0%",
    trend2: <ChevronUp sx={{ color: "success.main", fontWeight: 600 }} />,
  },
  {
    stats: "ksh 5,000",
    color: "primary",
    title: "Previous Rent",

    icon: <CurrencyBitcoin sx={{ fontSize: "1.75rem" }} />,
    trendNumber: "0.0%",
    trend2: <ChevronUp sx={{ color: "success.main", fontWeight: 600 }} />,
  },
];

const renderStats = () => {
  return salesData.map((item, index) => (
    <Grid item xs={12} sm={3} key={index}>
      <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          variant="rounded"
          sx={{
            mr: 3,
            width: 40,
            height: 40,
            boxShadow: 3,
            color: "common.white",
            backgroundColor: `${item.color}.main`,
          }}
        >
          {item.icon}
        </Avatar>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="caption">{item.title}</Typography>
          <Typography variant="h6">{item.stats}</Typography>
        </Box>
        <Box className="relative lg:right-1 xxxs:-right-5 xl:right-1 xxl:right-1 flex space-x-1 items-center">
          <div>{item.trend2}</div>
          <div className="text-green-600 text-[11px]">{item.trendNumber}</div>
        </Box>
      </Box>
    </Grid>
  ));
};

const StatisticsCard = () => {
  return (
    <Card>
      <CardHeader
        title="Statistics"
        action={
          <IconButton
            size="small"
            aria-label="settings"
            className="card-more-options"
            sx={{ color: "text.secondary" }}
          >
            <DotsVertical />
          </IconButton>
        }
        subheader={
          <Typography variant="body2">
            <Box
              component="span"
              sx={{ fontWeight: 600, color: "text.primary" }}
            >
              Bill Overview
            </Box>{" "}
            – Past 2 Months
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: "2rem !important",
            letterSpacing: "0.15px !important",
          },
        }}
      />
      <CardContent sx={{ pt: (theme) => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[5, 0]}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default StatisticsCard;
