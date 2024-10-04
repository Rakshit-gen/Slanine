"use client";
// lib/fetchUser.js
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import React, { useEffect, useState } from "react";
import { eq } from "drizzle-orm";
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
    <div className="min-h-screen w-full bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 p-8 text-center relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full opacity-30 blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500 rounded-full opacity-20 blur-3xl animate-float-delay"></div>
      
      {/* Title */}
      <h1 className="bg-gradient-to-r from-pink-500 via-yellow-500 to-indigo-500 bg-clip-text text-4xl md:text-5xl font-extrabold text-transparent inline-block mb-8">
        Your History
      </h1>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
        {userDataArr &&
          userDataArr.map((userData) => (
            <Card key={userData.id} className="bg-white/10 backdrop-blur-lg shadow-lg hover:scale-105 transform transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-white text-3xl font-extrabold">
                  {userData.templateSlug}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ReactMarkdown className="text-slate-200 font-semibold text-lg">
                  {userData.aiResponse?.length! < 100
                    ? userData.aiResponse
                    : userData.aiResponse?.slice(0, 100) + "....."}
                </ReactMarkdown>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="dark:text-white font-semibold text-md bg-gradient-to-r from-indigo-500 to-pink-500 hover:bg-gradient-to-l text-white">
                      View Full Content
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-white/10 backdrop-blur-xl rounded-xl p-6 text-white max-w-3xl mx-auto shadow-lg transition-all duration-500">
                    <DialogHeader>
                      <DialogTitle className="text-3xl font-extrabold text-white">
                        {userData.templateSlug}
                      </DialogTitle>
                      <DialogDescription className="text-center text-slate-300">
                        Full response
                      </DialogDescription>
                    </DialogHeader>
                    <div className="text-slate-200 max-h-[60vh] overflow-y-scroll">
                      <ReactMarkdown>{userData.aiResponse}</ReactMarkdown>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
      </div>

      {/* Keyframes for floating animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 8s ease-in-out infinite;
          animation-delay: 3s;
        }
      `}</style>
    </div>
  );
};

export default Page;
