import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/user-avatar";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <h1>Selçuk spor link finder</h1>
      <UserAvatar />
      <Button variant={"outline"} size={"lg"}>
        Search the active link
      </Button>
    </div>
  );
}
