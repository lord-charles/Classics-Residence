// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import MuiDivider from "@mui/material/Divider";

const depositData = [
  {
    logoWidth: 56,
    logoHeight: 29,
    amount: "+ksh112,650",
    subtitle: "Paybill",
    title: "Mpesa Account",
    logo: "/images/misc/mpesa.png",
  },
  {
    logoWidth: 56,
    logoHeight: 38,
    amount: "+ksh22,705",
    title: "Equity Bank",
    subtitle: "Bank transfer",
    logo: "/images/misc/equity.png",
  },
  {
    logoWidth: 56,
    logoHeight: 38,
    amount: "+ksh92,705",
    title: "Co-operative Bank",
    subtitle: "Bank transfer",
    logo: "/images/cop.png",
  },
  {
    logoWidth: 56,
    logoHeight: 38,
    amount: "+ksh42,705",
    title: "KCB Bank",
    subtitle: "Bank transfer",
    logo: "/images/kcb.svg",
  },
  {
    logoWidth: 56,
    logoHeight: 42,
    amount: "+ksh52,957",
    title: "Mastercard",
    subtitle: "Bank Transfer",
    logo: "/images/logos/mastercard-label.png",
  },
];

const DepositWithdraw = () => {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: ["column", "column", "row"],
      }}
      className="lg:p-3 xl:p-0 xxl:p-7"
    >
      <Box sx={{ width: "100%" }}>
        <CardHeader
          title="Deposit"
          sx={{
            pt: 0.5,
            alignItems: "center",
            "& .MuiCardHeader-action": { mt: 0 },
          }}
          action={<Typography variant="caption">View All</Typography>}
          titleTypographyProps={{
            variant: "h6",
            sx: {
              lineHeight: "1.6 !important",
              letterSpacing: "0.15px !important",
            },
          }}
        />
        <CardContent sx={{ pb: (theme) => `${theme.spacing(0)} !important` }}>
          {depositData.map((item, index) => {
            return (
              <Box
                key={item.title}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: index !== depositData.length - 1 ? 4 : 0,
                }}
              >
                <Box
                  sx={{
                    minWidth: 88,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={item.logo}
                    alt={item.title}
                    width={item.logoWidth}
                    height={item.logoHeight}
                  />
                </Box>
                <Box
                  sx={{
                    ml: 4,
                    width: "100%",
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      marginRight: 2,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography sx={{ fontWeight: 600, fontSize: "0.875rem" }}>
                      {item.title}
                    </Typography>
                    <Typography variant="caption">{item.subtitle}</Typography>
                  </Box>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 600, color: "success.main" }}
                  >
                    {item.amount}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </CardContent>
      </Box>
    </Card>
  );
};

export default DepositWithdraw;
