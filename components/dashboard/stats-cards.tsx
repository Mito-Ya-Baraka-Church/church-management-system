import React from "react";
import StatsCard from "@/components/dashboard/stats-card";
import {
  CalendarIcon,
  DollarSignIcon,
  GroupIcon,
  UsersIcon,
} from "lucide-react";

export default function DashboardCards({ userRole }: { userRole: string }) {
  const statsCards = [
    {
      title: "Total Members",
      icon: <UsersIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />,
      value: "500",
      description: "+10 from last week",
    },
    {
      title: "Attendance",
      icon: <GroupIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />,
      value: "100",
      description: "+10 from last week",
    },
    {
      title: "Events",
      icon: (
        <CalendarIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
      ),
      value: "60",
      description: "+4 from last week",
    },
    {
      title: "Finance",
      icon: (
        <DollarSignIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
      ),
      value: "$10,000",
      description: "+$1,000 from last week",
    },
  ];
  return (
    <div className="flex flex-wrap justify-between gap-4">
      {statsCards.map((card, index) => (
        <div className=" grow " key={card.title}>
          <StatsCard
            title={card.title}
            icon={card.icon}
            value={card.value}
            description={card.description}
          />
        </div>
      ))}
    </div>
  );
}
