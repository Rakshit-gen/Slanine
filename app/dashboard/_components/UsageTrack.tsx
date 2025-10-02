"use client";
import React, { useContext, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import Link from "next/link";

export const UsageTrack = ({ setHidden, hidden }: any) => {
  const { user } = useUser();
  const { total, setTotal } = useContext(TotalUsageContext);

  useEffect(() => {
    if (user) {
      getUserData(user?.primaryEmailAddress?.emailAddress ?? "none");
    }
  }, [user]);

  const getUserData = async (userEmail: string) => {
    const userData = await db.query.AIOutput.findMany({
      where: eq(AIOutput.createdBy, userEmail),
      columns: {
        id: true,
        formData: true,
        aiResponse: true,
      },
      orderBy: (AIOutput, { desc }) => [desc(AIOutput.createdAt)],
    });
    let res = 0;
    for (let i = 0; i < userData.length; i++) {
      res = res + (userData[i]?.aiResponse?.split(" ").length ?? 0);
    }
    setTotal(res);
    return res;
  };

  const calcUsage = async () => {
    const usage = await getUserData(
      user?.primaryEmailAddress?.emailAddress ?? "none"
    );
    setTotal(usage);
    return (total / 100000) * 100;
  };

  // Calculate percentage for progress bar
  let perc = Math.round((total / 100000) * 100);
  if (perc >= 100) perc = 100;

  return (
    <div className="p-6 rounded-xl shadow-lg bg-gray-200 dark:bg-slate-950 text-white max-w-md mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg dark:text-white text-black">Word Credits</h2>
        <span
          className={`px-2 py-1 rounded text-xs text-black font-bold ${
            perc < 100 ? "bg-green-500 text-black" : "bg-red-500 text-black"
          }`}
        >
          {perc < 100 ? "Active" : "Limit Reached"}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="relative w-full h-3 bg-blue-400/50 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ease-in-out ${
            perc < 90 ? "dark:bg-white bg-gray-600" : "bg-red-400"
          }`}
          style={{ width: `${perc}%` }}
        />
      </div>

      {/* Usage Stats */}
      <div className="mt-3 flex justify-between text-sm text-black dark:text-white">
        <span>{total.toLocaleString()} words</span>
        <span>100,000 limit</span>
      </div>

      {/* Upgrade Button */}
      <div className="mt-6">
        <Link href="/billing" onClick={() => setHidden(!hidden)}>
          <Button
            name="upgrade"
            className="w-full bg-white text-black font-semibold text-lg border-2 border-transparent 
            hover:border-white hover:bg-transparent hover:text-white 
            dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 
            transition-colors duration-300"
          >
            Upgrade Plan
          </Button>
        </Link>
      </div>
    </div>
  );
};
