import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import React from "react";

const UserAvatar = () => {
  const imageUrl = "/acun.jpg";

  return (
    <div className="flex justify-center items-center my-10">
      {/* Center the Avatar component */}
      <Avatar className="text-center h-32 w-32">
        {/* Make the AvatarImage bigger */}
        <AvatarImage src={imageUrl} className="w-32 h-32 rounded-full" />
        <AvatarFallback>Acun</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default UserAvatar;
