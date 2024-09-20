"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import PocketBase from "pocketbase";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/modetoggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogOverlay, // You can use a DialogOverlay if it's available in your UI library
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Home, User, Settings, LogOut } from "lucide-react";

// Initialize the PocketBase client
const pb = new PocketBase("http://127.0.0.1:8090");

export default function Page() {
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState("/placeholder.svg");

  // Fetch user data once authenticated
  useEffect(() => {
    if (!pb.authStore.isValid) {
      router.push("/login"); // Redirect to login if the user isn't authenticated
    } else {
      const user = pb.authStore.model;
      setUserName(user.username || user.email);

      // Check if user avatar exists and set it dynamically
      if (user.avatar) {
        setUserAvatar(
          `http://127.0.0.1:8090/api/files/users/${user.id}/${user.avatar}`
        );
      }
    }
  }, [router]);

  // Handle logout and redirect to login page
  const handleLogout = async () => {
    try {
      await pb.authStore.clear(); // Clear the auth store
      console.log("Logged out successfully");
      router.push("/login"); // Redirect to login
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="p-6">
      <div className="absolute top-2 right-6 flex items-center space-x-4">
        <Link href="/" passHref>
          <Button variant="outline" className="flex items-center space-x-2">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Button>
        </Link>
        <ModeToggle />
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src={userAvatar} alt="User Avatar" />
              <AvatarFallback>
                {userName ? userName.charAt(0) : "U"}
              </AvatarFallback>
            </Avatar>
          </DialogTrigger>

          {/* Adding the overlay behind the dialog */}
          {isDialogOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
          )}

          <DialogContent className="z-50">
            {" "}
            {/* Ensure the dialog is above the overlay */}
            <DialogHeader>
              <DialogTitle>User Profile</DialogTitle>
            </DialogHeader>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full justify-start">
                  <User className="mr-2 h-4 w-4" />
                  <span>{userName || "Profile"}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex items-center justify-center h-screen">
        <h1>Page under construction.</h1>
      </div>
    </div>
  );
}
