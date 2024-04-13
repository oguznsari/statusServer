"use client";
import axios from "axios";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/user-avatar";
import Link from "next/link";

async function searchForActiveLink(setLink: any) {
  try {
    const response = await axios.get("/api/search");
    if (response.status === 200) {
      setLink(response.data.url);
    }
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error);
  }
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [link, setLink] = useState("");

  const handleButtonClick = async () => {
    setIsLoading(true);
    setLink("");
    await searchForActiveLink(setLink);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col justify-center items-center my-10">
      <h1>Selçuk spor link finder</h1>
      <UserAvatar />
      <Button
        variant={"outline"}
        size={"lg"}
        onClick={handleButtonClick}
        disabled={isLoading}
      >
        {isLoading ? "Searching..." : "Search the active link"}
      </Button>
      {link && (
        <div className="my-10 flex justify-center">
          <div className="flex flex-col items-center">
            <span className="text-2xl mb-2">🥳</span>
            <Button variant={"destructive"}>
              <Link href={link} passHref target="_blank">
                {link}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
