import { Box, Typography } from "@mui/material";
import { Character } from "@/interfaces/Character";
import { COLOR_ATTACK, COLOR_MELEE, COLOR_RANGED } from "@/consts/colors";

import ATTACK_IMAGE from "../images/attack.svg";
import Image from "next/image";

const CardTypeBadge = () => {
  return (
      <Box
        sx={{
          border: `1px solid ${COLOR_ATTACK}`,
          backgroundColor: "white",
          borderRadius: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 1,
          color: "white",
          height: "60px"
        }}
      >
        <Image
          priority
          src={ATTACK_IMAGE}
          height={32}
          width={32}
          alt="Follow us on Twitter"
        />
      </Box>
  );
};

export default CardTypeBadge;
