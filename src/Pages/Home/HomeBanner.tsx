import { Box, Grid, Stack, Typography } from "@mui/material";
import background from "../../Assets/Images/background.png";
import { useTypewriter } from "react-simple-typewriter";

const HomeBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Interaction",
      "Communication",
      "Subscriptions",
      "Payments",
      "CMS",
      "Advanced Analytics",
    ],
    loop: 100,
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  return (
    <>
      <Stack>
        <Box
          sx={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            height: { xs: "110vh", md: "100vh" },
            pt: 25,
            pb: 10,
            mt: -12,
          }}
        >
          <Grid container sx={{ ml: 3, mr: 3 }}>
            <Stack>
              <Grid
                container
                justifyContent={"center"}
                alignContent={"center"}
                alignItems={"center"}
                display={"flex"}
                spacing={5}
              >
                <Grid item xs={12} md={5}>
                  <Stack sx={{ pt: 6, pb: 6 }}>
                    <Typography
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      sx={{
                        color: "#2952A2",
                        fontFamily: "Montserrat",
                        fontSize: { xs: "20px", md: "30px" },
                        fontWeight: "bold",
                        textTransform: "capitalize",
                        textAlign: { xs: "center", md: "left" },
                      }}
                    >
                      "Automate Community Management with AI-Powered <br></br>
                      <Box
                        component="span"
                        sx={{
                          fontSize: { xs: "18px", md: "28px" },
                          color: "#3B9B7F",
                          fontWeight: "bold",
                          fontFamily: "Montserrat",
                          textTransform: "capitalize",
                        }}
                      >
                        {text}
                      </Box>
                      &nbsp; Effortlessly"
                    </Typography>
                    <Typography
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      sx={{
                        fontFamily: "Montserrat",
                        color: "#1A2D4C",
                        textAlign: { xs: "center", md: "justify" },
                        fontSize: "15px",
                        lineHeight: "30px",
                        mt: 2,
                        display: { xs: "none", md: "block" },
                      }}
                    >
                      Our AI-powered platform enhances community management with
                      tools for user data management, interaction,
                      communication, subscription and payment processing,
                      content management, and advanced analytics
                    </Typography>
                    <Stack
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      display={"flex"}
                      flexDirection={"row"}
                      mt={3}
                      sx={{
                        justifyContent: { xs: "center", md: "flex-start" },
                      }}
                    >
                      <Box
                        component={"a"}
                        href="https://play.google.com/store/apps/details?id=com.communn_mobile_app"
                        sx={{
                          width: "35%",
                          pr: 2,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          component={"img"}
                          src={require("../../Assets/Images/Home/Playstore.png")}
                          alt=""
                          sx={{ width: "93%" }}
                        />
                      </Box>
                      <Box
                        component={"a"}
                        href="https://apps.apple.com/us/app/onecommunn/id6499468652"
                        sx={{
                          width: "35%",
                          pr: 2,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >

                        <Box
                          data-aos="fade-up"
                          data-aos-duration="1000"
                          component={"img"}
                          src={require("../../Assets/Images/Home/Appstore.png")}
                          alt=""
                          sx={{ width: "120%", pl: 2 }}
                        />

                      </Box>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Box
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    component={"img"}
                    src={require("../../Assets/Images/Home/HomeMobile.png")}
                    alt=""
                    sx={{ width: "100%" }}
                  />
                </Grid>
              </Grid>
            </Stack>
          </Grid>
        </Box>
      </Stack>
    </>
  );
};
export default HomeBanner;
