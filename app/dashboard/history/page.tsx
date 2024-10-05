"use client";
// lib/fetchUser.js
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { PgRelationalQuery } from "drizzle-orm/pg-core/query-builders/query";
import React, { useEffect, useState } from "react";
import { eq } from "drizzle-orm";
import { getDefaultResultOrder } from "dns/promises";
import { useUser } from "@clerk/nextjs";
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import {
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  Dialog,
} from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";

interface AIOutputRecord {
  id: number;
  formData: string;
  aiResponse: string | null;
  templateSlug: string;
  createdAt: string | null;
}

const Page = () => {
  const { user } = useUser();
  const [userDataArr, setUserDataArr] = useState<AIOutputRecord[]>([]);

  const getUserData = async (userEmail: string) => {
    const userData = await db.query.AIOutput.findMany({
      where: eq(AIOutput.createdBy, userEmail),
      columns: {
        id: true,
        formData: true,
        aiResponse: true,
        createdAt: true,
        templateSlug: true,
      },
      orderBy: (AIOutput, { desc }) => [desc(AIOutput.createdAt)],
    });
    setUserDataArr(userData);
  };

  const userEmail = user?.primaryEmailAddress?.emailAddress;
  useEffect(() => {
    if (userEmail) getUserData(userEmail!);
  }, [userEmail]);
  return (
    <div className="min-h-screen w-full bg-[#E5E7EB] dark:bg-[#20293a] p-8 text-center">
      <h1 className="bg-gradient-to-r from-indigo-400 via-pink-500 to-yellow-600 bg-clip-text text-4xl md:text-5xl font-extrabold text-transparent inline-block mb-8">
        Your History
      </h1>
      <div className="text-sm text-black dark:text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {userDataArr &&
          userDataArr.map((userData) => (
            <Card key={userData.id} className="max-sm:max-w-[500px]">
              <CardHeader>
                <CardTitle className="text-black dark:text-white text-3xl font-extrabold">
                  {userData.templateSlug}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ReactMarkdown className="text-slate-500 font-semibold text-lg overflow-hidden">
                  {userData.aiResponse?.length! < 100
                    ? userData.aiResponse
                    : userData.aiResponse?.slice(0, 100) + "....."}
                </ReactMarkdown>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="dark:text-white bg-slate-600 hover:bg-slate-800 font-semibold text-md">
                      View Full Content
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="w-full max-w-3xl max-h-[80vh] p-6 overflow-hidden">
                    <DialogHeader>
                      <DialogTitle className="text-3xl font-extrabold text-center">
                        {userData.templateSlug}
                      </DialogTitle>
                      <DialogDescription className="text-center">
                        Full response
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4 overflow-y-auto overflow-x-auto max-h-[60vh] w-full">
                      <div className="inline-block min-w-full">
                        <ReactMarkdown className="text-slate-500 whitespace-pre-wrap break-words">
                          {userData.aiResponse}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>{" "}
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Page;
