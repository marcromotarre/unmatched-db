import { Box, Typography } from "@mui/material";
import { Character } from "@/interfaces/Character";
import { COLOR_MELEE, COLOR_RANGED } from "@/consts/colors";

import MELEE_IMAGE from "../images/melee-white.svg";
import RANGED_IMAGE from "../images/ranged-white.svg";
import Image from "next/image";

const CharacterBadge = ({ name, hp, attack_type }: Character) => {
  const color = attack_type === "melee" ? COLOR_MELEE : COLOR_RANGED;
  const attack_image = attack_type === "melee" ? MELEE_IMAGE : RANGED_IMAGE;

  return (
    <>
      <Box
        sx={{
          backgroundColor: color,
          borderRadius: "5px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 1,
          color: "white",
          height: "29px"
        }}
      >
        <Box>
          <Typography sx={{ textTransform: "uppercase" }}>{name}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
        }}
        >
          <Image
            priority
            src={attack_image}
            height={15}
            width={15}
            alt="Follow us on Twitter"
          />
          <Typography>{hp}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default CharacterBadge;
