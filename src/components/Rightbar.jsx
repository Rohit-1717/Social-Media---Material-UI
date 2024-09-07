import { Box, Divider, ImageList, ImageListItem, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import React from "react";

function Rightbar() {
  return (
    <Box
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position={"fixed"} width={280}>
        <Typography variant="h6" fontWeight={200} mt={2} mb={2}>
          Online Friends
        </Typography>
        <AvatarGroup max={6}>
          <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1526574535041-ef5547111eb8?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Avatar alt="Travis Howard" src="https://plus.unsplash.com/premium_photo-1679415150878-b81dd4fb0233?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Avatar alt="Cindy Baker" src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Avatar alt="Agnes Walker" src="https://plus.unsplash.com/premium_photo-1664533227571-cb18551cac82?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1508908324153-d1a219719814?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={200} mt={2} mb={2}>
          Latest Photos
        </Typography>

        <ImageList
          cols={3}
          rowHeight={100}
          gap={10}
          sx={{
            overflow: "hidden", // Hide scrollbar
            margin: 0, // Remove extra margin around the ImageList
          }}
        >
          {[
            "https://images.unsplash.com/photo-1725555610696-723ad3e0ab88?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1660234396487-95718dd89764?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1725474189699-eed5435b8864?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1725565175662-3618048d8be2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1725113114015-7d65ebd4f2bb?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1721332154373-17e78d19b4a4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ].map((image, index) => (
            <ImageListItem key={index}>
              <img
                src={image}
                alt={`Photo ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "5px",
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>

        <Typography variant="h6" fontWeight={200} mt={4} mb={2}>
          Latest Conversations
        </Typography>

        <List
          sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
            overflowY: 'auto',
            maxHeight: '300px', // Set a max height for scrolling
            '&::-webkit-scrollbar': {
              width: '0px', // Hide scrollbar
            },
            paddingTop: "8px",
          }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: 'text.primary', display: 'inline' }}
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: 'text.primary', display: 'inline' }}
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1542206395-9feb3edaa68e" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: 'text.primary', display: 'inline' }}
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1502865776148-fb717fa5c87f" />
            </ListItemAvatar>
            <ListItemText
              primary="Winter Escape"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: 'text.primary', display: 'inline' }}
                  >
                    James Smith
                  </Typography>
                  {' — I’m looking forward to our winter escape to…'}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1583856746075-e96b7e1cc009" />
            </ListItemAvatar>
            <ListItemText
              primary="Project Updates"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: 'text.primary', display: 'inline' }}
                  >
                    Olivia Parker
                  </Typography>
                  {' — The project updates are complete, please check…'}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Emily Johnson" src="https://images.unsplash.com/photo-1598494177901-40f65b25e85c" />
            </ListItemAvatar>
            <ListItemText
              primary="Dinner Plans"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: 'text.primary', display: 'inline' }}
                  >
                    Emily Johnson
                  </Typography>
                  {' — Are we still on for dinner tonight?'}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Sophia Brown" src="https://images.unsplash.com/photo-1607520637027-6d0b09d8c7d1" />
            </ListItemAvatar>
            <ListItemText
              primary="Vacation Plans"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: 'text.primary', display: 'inline' }}
                  >
                    Sophia Brown
                  </Typography>
                  {' — Can you confirm our vacation plans for next…'}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Matthew Lee" src="https://images.unsplash.com/photo-1506648741940-e9df14d4d9d3" />
            </ListItemAvatar>
            <ListItemText
              primary="Meeting Reschedule"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: 'text.primary', display: 'inline' }}
                  >
                    Matthew Lee
                  </Typography>
                  {' — We need to reschedule our meeting for tomorrow…'}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Alice Cooper" src="https://images.unsplash.com/photo-1563972002-451fb0d99a41" />
            </ListItemAvatar>
            <ListItemText
              primary="New Project"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: 'text.primary', display: 'inline' }}
                  >
                    Alice Cooper
                  </Typography>
                  {' — I have a new project idea, let’s discuss it soon.'}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Daniel Kim" src="https://images.unsplash.com/photo-1509306133713-cd8cc057184d" />
            </ListItemAvatar>
            <ListItemText
              primary="Work From Home"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: 'text.primary', display: 'inline' }}
                  >
                    Daniel Kim
                  </Typography>
                  {' — I’ll be working from home tomorrow, any changes…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Rightbar;
