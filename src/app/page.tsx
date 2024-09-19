"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../components/ui/modetoggle";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const imageList = [
  "Firefly 20240907184659.png",
  "Firefly 20240907193426.png",
  "IMG-20240907-WA0003.png",
  "IMG-20240907-WA0004.png",
  "IMG-20240907-WA0005.png",
  "IMG-20240907-WA0006.png",
  "IMG-20240907-WA0008.jpg",
  "IMG-20240907-WA0009.jpg",
  "IMG-20240907-WA0010.jpg",
  "IMG-20240907-WA0011.jpg",
  "IMG-20240907-WA0012.jpg",
  "IMG-20240907-WA0014.jpg",
  "IMG-20240907-WA0016.jpg",
  "IMG-20240907-WA0016.png",
  "IMG-20240907-WA0017.jpg",
  "IMG-20240907-WA0017.png",
  "IMG-20240907-WA0018.jpg",
  "IMG-20240907-WA0019.jpg",
  "IMG-20240907-WA0019.png",
  "IMG-20240907-WA0020.jpg",
  "IMG-20240907-WA0020.png",
  "IMG-20240907-WA0021.jpg",
  "IMG-20240907-WA0021.png",
  "IMG-20240907-WA0022.jpg",
  "IMG-20240907-WA0022.png",
  "IMG-20240907-WA0023.jpg",
  "IMG-20240907-WA0023.png",
  "IMG-20240907-WA0024.jpg",
  "IMG-20240907-WA0024.png",
  "IMG-20240907-WA0025.jpg",
  "IMG-20240907-WA0025.png",
  "IMG-20240907-WA0026.jpg",
  "IMG-20240907-WA0026.png",
  "IMG-20240907-WA0027.jpg",
  "IMG-20240907-WA0027.png",
  "IMG-20240907-WA0028.jpg",
  "IMG-20240907-WA0028.png",
  "IMG-20240907-WA0030.jpg",
  "IMG-20240907-WA0031.jpg",
  "IMG-20240907-WA0032.jpg",
  "IMG-20240907-WA0033.jpg",
  "IMG-20240907-WA0034.jpg",
  "IMG-20240907-WA0035.jpg",
  "IMG-20240907-WA0036.jpg",
  "IMG-20240907-WA0037.jpg",
  "IMG-20240907-WA0038.jpg",
  "IMG-20240907-WA0039.jpg",
  "IMG-20240907-WA0040.jpg",
  "IMG-20240907-WA0041.jpg",
  "IMG-20240907-WA0042.jpg",
  "IMG-20240907-WA0043.jpg",
  "IMG-20240907-WA0044.jpg",
  "IMG-20240907-WA0045.jpg",
  "IMG-20240907-WA0046.jpg",
  "IMG-20240907-WA0047.jpg",
  "IMG-20240907-WA0048.jpg",
  "SchoolLOGO.png",
  "WhatsApp Image 2024-09-07 at 19.27.14_d653bc67.png",
  "WhatsApp Image 2024-09-07 at 19.27.18_9b94fbf7.png",
  "WhatsApp Image 2024-09-07 at 19.28.43_2be3d7cc.png",
];

export default function Home() {
  return (
    <div className="relative">
      {/* Header Section */}
      <div className="absolute top-2 right-6 flex space-x-4">
        <Link href="/enroll-page" passHref>
          <Button variant="outline">Enroll Now</Button>
        </Link>
        <ModeToggle />
      </div>

      {/* Main Content Section */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-full px-4">
        <Tabs defaultValue="achievement" className="w-full max-w-6xl mx-auto">
          <TabsList className="flex justify-center mb-4 gap-4">
            <TabsTrigger value="achievement">Achievements</TabsTrigger>
            <TabsTrigger value="untitled">Untitled</TabsTrigger>
          </TabsList>
          <TabsContent value="achievement">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {/* Iterate through images for this tab */}
              {imageList.map((image, index) => (
                <Popover key={index}>
                  <PopoverTrigger asChild>
                    <Image
                      src={`/Images/${image}`}
                      alt={`Image ${index + 1}`}
                      width={300} // Adjust width as needed
                      height={200} // Adjust height as needed
                      className="cursor-pointer rounded-md object-cover"
                    />
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="flex flex-col items-center">
                      <Image
                        src={`/Images/${image}`}
                        alt={`Enlarged image ${index + 1}`}
                        width={800} // Adjust width for popover
                        height={600} // Adjust height for popover
                        className="rounded-md"
                      />
                      <p className="mt-2 text-center text-sm">
                        Click outside to close
                      </p>
                    </div>
                  </PopoverContent>
                </Popover>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="untitled">
            <div className="flex items-center justify-center">
              {/* Add any other content or images here */}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
