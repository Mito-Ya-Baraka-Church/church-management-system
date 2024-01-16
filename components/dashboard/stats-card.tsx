import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  icon: React.ReactNode;
  value: string;
  description: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  icon,
  value,
  description,
}: StatsCardProps) => {
  return (
    <Card className="flex min-w-[280px]  flex-col rounded-lg border border-gray-200 bg-background shadow-md dark:border-gray-700 dark:bg-gray-800">
      <CardHeader className="flex flex-row  items-baseline justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-bold text-foreground">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
