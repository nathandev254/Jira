import { ReactNode } from "react";

interface SummaryCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: ReactNode;
  bgColor?: string;
  textColor?: string;
  iconBg?: string;
  shadowColor?: string;
}

function Summarycard({
  title,
  value,
  subtitle,
  icon,
  bgColor,
  textColor,
  iconBg,
  shadowColor,
}: SummaryCardProps) {
 
}

export default Summarycard;
