// ** MUI Imports
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { styled, useTheme } from "@mui/material/styles";
import Image from "next/image";

// Styled component for the triangle shaped background image
const TriangleImg = styled("img")({
  right: 0,
  bottom: 0,
  height: 170,
  position: "absolute",
  zIndex: -10,
});

// Styled component for the trophy image
const TrophyImg = styled("img")({
  right: 10,
  bottom: 20,
  height: 120,
  width: 250,
  position: "",
});

const Trophy = () => {
  // ** Hook
  const theme = useTheme();
  const imageSrc =
    theme.palette.mode === "light" ? "triangle-light.png" : "triangle-dark.png";

  function getTimeOfDay() {
    const currentHour = new Date().getHours();

    if (currentHour >= 4 && currentHour < 12) {
      return "Morning "; //
    } else if (currentHour >= 12 && currentHour < 17) {
      return "Afternoon "; // Use a sun with clouds emoji for afternoon
    } else if (currentHour >= 17 && currentHour < 20) {
      return "Evening "; // Use a cityscape at twilight emoji for evening
    } else {
      return "Night "; // Use a night sky with stars emoji for night
    }
  }

  function getTimeOfDayIcon() {
    const currentHour = new Date().getHours();

    if (currentHour >= 4 && currentHour < 12) {
      return "🌅"; //
    } else if (currentHour >= 12 && currentHour < 17) {
      return "🌞"; // Use a sun with clouds emoji for afternoon
    } else if (currentHour >= 17 && currentHour < 20) {
      return "🌞"; // Use a cityscape at twilight emoji for evening
    } else {
      return "🌅"; // Use a night sky with stars emoji for night
    }
  }

  return (
    <Card sx={{ position: "relative" }}>
      <CardContent>
        <Typography variant="h6" className="text-[16px]">
          Good {getTimeOfDay()} Charles mwaniki! {getTimeOfDayIcon()}
        </Typography>
        <Typography variant="body2" sx={{ letterSpacing: "0.25px" }}>
          Current occupant in F6.
        </Typography>
        <div className="flex">
          <div className="flex flex-col space-y-2 mt-3 z-20">
            <div className="flex items-center space-x-2">
              <h2 className="font-semibold">Total Amount Due:</h2>
              <h2 className="text-primary">Ksh 5200</h2>
            </div>
            <div className="flex items-center space-x-2">
              <h2 className="font-semibold">Rent:</h2>
              <h2 className="text-primary">Ksh 5000</h2>
            </div>
            <div className="flex items-center space-x-2">
              <h2 className="font-semibold">Water:</h2>
              <h2 className="text-primary">Ksh 200</h2>
            </div>
          </div>
          <div className="w-[100px] overflow-hidden">
            <Image
              alt="trophy"
              src="/lottie/landlord.gif"
              width={200}
              height={200}
              className="object-contain absolute right-[-10px] top-[100px]"
            />
          </div>
        </div>

        <Button
          size="small"
          variant="contained"
          className="bg-green-600 relative top-2"
          color="success"
        >
          Pay Now
        </Button>
        <TriangleImg
          alt="triangle background"
          src={`/images/misc/${imageSrc}`}
        />
      </CardContent>
    </Card>
  );
};

export default Trophy;
