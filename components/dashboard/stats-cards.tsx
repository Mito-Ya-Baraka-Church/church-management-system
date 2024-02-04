import StatsCard from "@/components/dashboard/stats-card";
import { getCardsValue } from "@/lib/db/cards";
import {
  CalendarIcon,
  DollarSignIcon,
  GroupIcon,
  UsersIcon,
} from "lucide-react";

export default async function DashboardCards({
  userRole,
}: {
  userRole: string;
}) {
  const statsCards = [
    {
      title: "Total Members",
      icon: <UsersIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />,
      // value: await getCardsValue("members"),
      value: 100,
      description: "+10 from last week",
    },
    {
      title: "Attendance",
      icon: <GroupIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />,
      // value: await getCardsValue("attendance"),
      value: 100,
      description: "+10 from last week",
    },
    {
      title: "Events",
      icon: (
        <CalendarIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
      ),
      value: await getCardsValue("events"),
      description: "+4 from last week",
      table: "events",
    },
    {
      title: "Visitors",
      icon: (
        <DollarSignIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
      ),
      // value: await getCardsValue("visitors"),
      value: 100,
      description: "+2 from last week",
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
            table={card.table}
          />
        </div>
      ))}
    </div>
  );
}
