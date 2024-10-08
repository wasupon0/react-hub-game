import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

export default function CriticScore({ score }: Props) {
  let color = score > 80 ? "green" : score > 70 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize={"14px"} paddingX={2} borderRadius={2}>
      {score}
    </Badge>
  );
}
