"use server";

import { DbError } from "@/types/general";
import { CardValue } from "@/types/cards";
import {
  createSupabaseServerClient,
  createSupabaseServerComponentClient,
} from "../supabase/server-client";
import { getCurrentUserSession } from "@/actions/auth";

/*
    Get the value of the cards
    returns the value of the cards
*/
export async function getCardsValue(
  table: string
): Promise<CardValue | DbError> {
  try {
    const supabase = createSupabaseServerComponentClient();

    const session = getCurrentUserSession();

    if (!session) {
      return {
        message: "Please Login",
        isError: true,
      };
    }

    const { count, error } = await supabase
      .from(table)
      .select("*", { count: "exact", head: true });

    if (error) throw error;

    if (!count) {
      return {
        message: "Could not get value",
        isError: true,
      };
    }

    console.log("count in server", count);

    return count as CardValue;
  } catch (error: any) {
    console.log("error in getCardsValue", error);
    return {
      message: error?.message ?? "Error getting card value",
      isError: true,
    };
  }
}
