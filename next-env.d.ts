/// <reference types="next" />
/// <reference types="next/types/global" />
type ItemTypes = "rock" | "paper" | "scissors";
type WhoWin = "user" | "house" | "none";
interface TransitionProps {
  inProps: boolean;
  onExited?: () => void;
}
