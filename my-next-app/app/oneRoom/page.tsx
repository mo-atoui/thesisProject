"use client"
import React, { useState } from "react";
import axios from 'axios';
import {
  Container,
  Grid,
  Box,
  Typography,
  CardMedia,
  Divider,
  Avatar,
  Button,
  TextField,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WifiIcon from "@mui/icons-material/Wifi";
import KitchenIcon from "@mui/icons-material/Kitchen";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import StarIcon from "@mui/icons-material/Star";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import Map from "./map";
import Weather from "./weather";

const property = {
  title: "Bordeaux Getaway",
  location: "Bordeaux, France",
  images: [
    "https://via.placeholder.com/800x400",
    "https://via.placeholder.com/800x400",
    "https://via.placeholder.com/800x400",
  ],
  details: {
    guests: "4-6 guests",
    type: "Entire Home",
    beds: "5 Beds",
    baths: "3 Baths",
    amenities: ["Wifi", "Kitchen", "Free Parking"],
  },
  price: 325,
  rating: 5.0,
  reviews: [
    {
      user: "John Doe",
      date: "March 2023",
      comment: "Great place to stay, very clean and close to everything.",
      avatar: "https://via.placeholder.com/40",
    },
    {
      user: "Jane Smith",
      date: "April 2023",
      comment: "Lovely home with all the amenities we needed.",
      avatar: "https://via.placeholder.com/40",
    },
  ],
};

const Page: React.FC = () => {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [comments, setComments] = useState(property.reviews);
  const [newComment, setNewComment] = useState('');

  const handleDateChange = (newDateRange: [Date | null, Date | null]) => {
    setDateRange(newDateRange);
  };

  const handleCommentSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const newReview = {
      user: "Anonymous",
      date: new Date().toLocaleDateString(),
      comment: newComment,
      avatar: "https://via.placeholder.com/40", 
    };

    try {
 
      const postResponse = await axios.post(`http://localhost:8080/commentaires/${roomId}/${userId}`, newReview);
      
      if (postResponse.status === 200) {
     
        const getResponse = await axios.get(`http://localhost:8080/commentaires/room/${roomId}`);
        if (getResponse.status === 200) {
          setComments(getResponse.data);
          setNewComment('');
        }
      }
    } catch (error) {
      console.error("There was an error submitting the comment:", error);
    }
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          {property.title}
        </Typography>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          display="flex"
          alignItems="center"
          gutterBottom
        >
          <LocationOnIcon style={{ color: "#FF5733" }} /> {property.location}
        </Typography>

        <Grid container spacing={2} my={2}>
          {property.images.map((image, index) => (
            <Grid item xs={12} md={4} key={index}>
              <CardMedia component="img" height="200" image={image} alt={`Image ${index + 1}`} />
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={2} my={2}>
          <Grid item xs={12} md={8}>
            <Box my={2}>
              <Typography variant="h6" gutterBottom>
                Entire rental unit
              </Typography>
              <Typography variant="body1" gutterBottom>
                {property.details.guests} · {property.details.beds} · {property.details.baths}
              </Typography>
            </Box>

            <Box my={2}>
              <Typography variant="h6" gutterBottom>
                Additional Information
              </Typography>
              <Typography gutterBottom>
                This property is located in the heart of Bordeaux, offering convenient access to
                local attractions and public transportation.
              </Typography>
              <Typography gutterBottom>
                Check-in and check-out times are flexible upon request, subject to availability.
              </Typography>
              <Typography gutterBottom>
                For any inquiries or special requests, please contact us directly.
              </Typography>
            </Box>

            <Box my={2}>
              <Typography variant="h6" gutterBottom>
                What this place offers
              </Typography>
              <Grid container spacing={2}>
                {property.details.amenities.map((amenity, index) => (
                  <Grid item xs={12} sm={4} key={index}>
                    <Box display="flex" alignItems="center">
                      {amenity === "Wifi" && <WifiIcon style={{ color: "#3F51B5" }} />}
                      {amenity === "Kitchen" && <KitchenIcon style={{ color: "#4CAF50" }} />}
                      {amenity === "Free Parking" && (
                        <LocalParkingIcon style={{ color: "#FFC107" }} />
                      )}
                      <Typography variant="body1" ml={1}>
                        {amenity}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Box my={2}>
              <Typography variant="h6" gutterBottom>
                Things to know
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <Typography variant="subtitle1" gutterBottom>
                    House Rules
                  </Typography>
                  <Typography gutterBottom>Check-in: After 3:00 PM</Typography>
                  <Typography gutterBottom>Checkout: 11:00 AM</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="subtitle1" gutterBottom>
                    Health & Safety
                  </Typography>
                  <Typography gutterBottom>Enhanced cleaning process</Typography>
                  <Typography gutterBottom>Social distancing enforced</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="subtitle1" gutterBottom>
                    Cancellation policy
                  </Typography>
                  <Typography gutterBottom>Free cancellation for 48 hours</Typography>
                  <Typography gutterBottom>Partial refund before check-in</Typography>
                </Grid>
              </Grid>
            </Box>

            <Box my={2}>
              <Typography variant="h6" gutterBottom>
                Date Range
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateRangeCalendar value={dateRange} onChange={handleDateChange} />
              </LocalizationProvider>
            </Box>

            <Box my={2}>
              <Typography variant="h6" gutterBottom>
                5.0 <StarIcon fontSize="small" style={{ color: "#FFC107" }} /> • 7 reviews
              </Typography>
              {comments.map((review, index) => (
                <Box key={index} my={2}>
                  <Grid container alignItems="center">
                    <Grid item>
                      <Avatar src={review.avatar} />
                    </Grid>
                    <Grid item xs>
                      <Typography variant="subtitle2">{review.user}</Typography>
                      <Typography variant="caption" color="textSecondary">
                        {review.date}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography gutterBottom>{review.comment}</Typography>
                  <Divider />
                </Box>
              ))}
            </Box>

            <Box my={2}>
              <Typography variant="h6" gutterBottom>
                Add a Comment
              </Typography>
              <form onSubmit={handleCommentSubmit}>
                <TextField
                  fullWidth
                  label="Comment"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  margin="normal"
                  multiline
                  rows={4}
                />
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </form>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box my={2}>
              <Typography variant="h6" gutterBottom>
                Booking
              </Typography>
              <TextField
                fullWidth
                label="Guests"
                margin="normal"
                type="number"
                InputLabelProps={{ shrink: true }}
              />
              <Button variant="contained" color="primary" fullWidth>
                Rent
              </Button>
              <Box my={2}>
                <Typography variant="body1">Price: ${property.price} per night</Typography>
                <Typography variant="body2" color="textSecondary">
                  Taxes and fees are included
                </Typography>
              </Box>
            </Box>

            <Box my={2}>
              <Typography variant="h6" gutterBottom>
                Location
              </Typography>
              <Map location={property.location} />
            </Box>

            <Box my={2}>
              <Typography variant="h6" gutterBottom>
                Weather
              </Typography>
              <Weather location={property.location} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Page;
