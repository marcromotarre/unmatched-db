import { Box } from "@mui/material";
import { useState } from "react";
import CHARACTER_TRY from "../../data/decks/luke-cage";
import { Character } from "@/interfaces/Character";
import CharacterBadge from "@/components/CharacterBadge";
import CardTypeBadge from "@/components/CardTypeBadge";

const UnmatchedCharacter = () => {
  const [heroes, setHeroes] = useState<Array<Character>>(CHARACTER_TRY.heroes);
  const [sidekicks, setSidekicks] = useState<Array<Character>>(
    CHARACTER_TRY.sidekicks
  );
  const [deck, setDeck] = useState(null);
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "auto 200px",
        height: "60px",
        columnGap: "10px",

      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "100%",
          rowGap: "2px",
        }}
      >
        <CharacterBadge {...heroes[0]} />
        <CharacterBadge {...sidekicks[0]} />
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "60px 60px 60px",
          columnGap: "5px",
        }}
      >
        <CardTypeBadge></CardTypeBadge>
        <CardTypeBadge></CardTypeBadge>
        <CardTypeBadge></CardTypeBadge>
      </Box>
    </Box>
  );
};

export default UnmatchedCharacter;
