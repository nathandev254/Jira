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
  return (
    <div
      className={`relative p-7 min-w-[240px] flex flex-col flex-1 justify-between rounded-xl shadow-sm  overflow-hidden ${bgColor} ${shadowColor}`}
    >
      <div className="absolute top-2 right-2 flex items-center gap-2 ">
        <div className={`p-2 rounded-lg top-4 right-4 ${iconBg}`}>{icon}</div>
        <div
          className={`absolute top-[-2] right-[-2] w-15 h-15 rounded-bl-[100%] opacity-10 ${textColor} bg-current`}
        ></div>
      </div>
      <div className="z-10 mt-2">
        <h4 className={`text-sm font-medium ${textColor}`}>{title}</h4>
        <p className={`text-2xl font-bold ${textColor}`}>{value}</p>
        <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
      </div>
    </div>
  );
}

export default Summarycard;
