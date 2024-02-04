"use client";

import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser-client";
import { DbError } from "@/types/general";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/db_types";

interface StatsCardProps {
  title: string;
  icon: React.ReactNode;
  value: number | null | DbError;
  description: string;
  table?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  icon,
  value,
  description,
  table,
}: StatsCardProps) => {
  // const supabase = createSupabaseBrowserClient();
  const supabase = createClientComponentClient<Database>();
  const [realTimeValues, setRealTimeValues] = useState<any>(null);
  const [realTimeValuesCount, setRealTimeValuesCount] = useState<number | null>(
    null
  );

  useEffect(() => {
    console.log("realTimeValues", realTimeValues);
    console.log("realTimeValuesCount", realTimeValuesCount);

    if (typeof value === "number" && table) {
      setRealTimeValuesCount(value);
    }
  }, [value, table]);

  useEffect(() => {
    if (!table) return;
    const channel = supabase
      .channel("*")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "events" },
        (payload) => setRealTimeValues((prev: any) => [...prev, payload.new])
      )
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: `${table}` },
        (payload) => setRealTimeValues((prev: any) => [...prev, payload.new])
      )
      .on(
        "postgres_changes",
        { event: "DELETE", schema: "public", table: `${table}` },
        (payload) => setRealTimeValues((prev: any) => [...prev, payload.old])
      )
      .subscribe();

    setRealTimeValuesCount(realTimeValues?.length);

    console.log("realTimeValues", realTimeValues);
    console.log("realTimeValuesCount", realTimeValuesCount);
    console.log("channel", channel);

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, realTimeValues]);

  return (
    <Card className="flex min-w-[280px]  flex-col rounded-lg border border-gray-200 bg-background shadow-md dark:border-gray-700 dark:bg-gray-800">
      <CardHeader className="flex flex-row  items-baseline justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-bold text-foreground">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        {value === null && (
          <div className="text-2xl font-bold text-muted-foreground">N/A</div>
        )}
        {(table && realTimeValuesCount && (
          <div className="text-2xl font-bold">
            {typeof realTimeValuesCount === "number" ? realTimeValuesCount : 0}
          </div>
        )) || (
          <div className="text-2xl font-bold">
            {typeof value === "number" ? value : 0}
          </div>
        )}

        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
