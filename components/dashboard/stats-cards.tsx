"use client";
import React from "react";
import StatsCard from "@/components/dashboard/stats-card";
import {
  CalendarIcon,
  DollarSignIcon,
  GroupIcon,
  UsersIcon,
} from "lucide-react";
import { useRealtime } from "react-supabase";

export function useEvents() {
  const [{ data, error }] = useRealtime("events", {
    select: {
      columns: "id,type",
    },
  });

  console.log("data", data ? data : "no data");
  console.log("error", error ? error : "no error");

  return data;
}

// export function useMembers() {
//   const [{ data, error }] = useRealtime('members', {
//     select: {
//       columns: 'id,name',
//     },
//   })

//   return data
// }

// export function useAttendance() {
//   const [{ data, error }] = useRealtime('attendance', {
//     select: {
//       columns: 'id,member_id',
//     },
//   })

//   return data
// }

// export function useVisitors() {
//   const [{ data, error }] = useRealtime('visitors', {
//     select: {
//       columns: 'id,name',
//     },
//   })

//   return data
// }

export default function DashboardCards({ userRole }: { userRole: string }) {
  const eventsCount = useEvents();
  console.log(eventsCount);
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
      title: "Visitors",
      icon: (
        <DollarSignIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
      ),
      value: "50",
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
          />
        </div>
      ))}
    </div>
  );
}
