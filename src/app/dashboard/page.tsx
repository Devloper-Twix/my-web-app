"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { ModeToggle } from "@/components/ui/modetoggle";

export default function Page() {
  return (
    <div className="p-6">
      <div className="absolute top-2 right-6 flex space-x-4">
        <Link href="/" passHref>
          <Button variant="outline" className="flex items-center space-x-2">
            <FaHome className="w-4 h-4" />
            <span>Home</span>
          </Button>
        </Link>
        <ModeToggle />
      </div>

      <Tabs defaultValue="achievements" className="w-full max-w-md">
        <TabsList className="flex space-x-2 border-b">
          <TabsTrigger
            value="achievements"
            className="py-2 px-4 rounded-t-lg transition-colors duration-200"
          >
            Achievements
          </TabsTrigger>
          <TabsTrigger
            value="assignments"
            className="py-2 px-4 rounded-t-lg transition-colors duration-200 focus:outline-none"
          >
            Assignments
          </TabsTrigger>
          <TabsTrigger
            value="routine"
            className="py-2 px-4 rounded-t-lg transition-colors duration-200 focus:outline-none"
          >
            Routine
          </TabsTrigger>
          <TabsTrigger
            value="resources"
            className="py-2 px-4 rounded-t-lg transition-colors duration-200 focus:outline-none"
          >
            Resources
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="achievements"
          className="p-4 border border-t-0 rounded-b-lg"
        >
          <h2 className="text-xl font-semibold">Achievements</h2>
          <p>Here you can view your achievements.</p>
          {/* Add details or lists of achievements here */}
        </TabsContent>

        <TabsContent
          value="assignments"
          className="p-4 border border-t-0 rounded-b-lg"
        >
          <h2 className="text-xl font-semibold">Assignments</h2>
          <p>View your current and upcoming assignments here.</p>
          {/* Add a list or calendar view of assignments */}
        </TabsContent>

        <TabsContent
          value="routine"
          className="p-4 border border-t-0 rounded-b-lg"
        >
          <h2 className="text-xl font-semibold">Routine</h2>
          <p>Check your daily or weekly routine here.</p>
          {/* Add daily or weekly schedule details */}
        </TabsContent>

        <TabsContent
          value="resources"
          className="p-4 border border-t-0 rounded-b-lg"
        >
          <h2 className="text-xl font-semibold">Resources</h2>
          <p>Access study materials and other resources here.</p>
          {/* Add links to study materials, textbooks, etc. */}
        </TabsContent>
      </Tabs>
    </div>
  );
}
