<<<<<<< HEAD
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/material";

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: "1px solid",
    padding: "0 4px",
  },
}));

export default function CartWidget() {
  return (
    <Box sx={{ mx: 3, display: { xs: "none", sm: "flex" } }}>
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={4} color="info">
          <LocalMallIcon color="base" fontSize="medium" />
        </StyledBadge>
      </IconButton>
    </Box>
  );
}
=======
export const CartWidget = () => {
  return (
    <>
      🛒
      <div>5</div>
    </>
  );
};
>>>>>>> 581330815b6ad0306f6bd40700fa542065e9289a
