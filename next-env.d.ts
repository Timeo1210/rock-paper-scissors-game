/// <reference types="next" />
/// <reference types="next/types/global" />
type ItemTypes = "rock" | "paper" | "scissors";
interface TransitionProps {
  inProps: boolean;
  onExited?: () => void;
}