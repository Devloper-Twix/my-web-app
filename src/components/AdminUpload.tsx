"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { uploadImage } from "../lib/pocketbase";

export function AdminUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [orientation, setOrientation] = useState<"landscape" | "portrait">(
    "landscape"
  );

  const handleUpload = async () => {
    if (!file) return;
    try {
      await uploadImage(file, orientation);
      // Reset form and show success message
      setFile(null);
      setOrientation("landscape");
      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error uploading image. Please try again.");
    }
  };

  return (
    <div className="space-y-4">
      <Input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        accept="image/*"
      />
      <Select
        value={orientation}
        onValueChange={(value: "landscape" | "portrait") =>
          setOrientation(value)
        }
      >
        <SelectTrigger>
          <SelectValue placeholder="Select orientation" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="landscape">Landscape</SelectItem>
          <SelectItem value="portrait">Portrait</SelectItem>
        </SelectContent>
      </Select>
      <Button onClick={handleUpload} disabled={!file}>
        Upload Image
      </Button>
    </div>
  );
}
