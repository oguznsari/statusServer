import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const startIndex = 1195; // latest active index
const loopLimit = 50;
const requestTimeout = 4000; // 4 seconds in milliseconds

export default async function search(
  req: NextApiRequest,
  res: NextApiResponse
) {
  for (let i = 0; i <= loopLimit; i++) {
    let currentIndex = startIndex + i;
    let url = `https://www.selcuksportshd${currentIndex}.xyz`;

    try {
      const response = await axios.get(url, { timeout: requestTimeout });
      if (response.status === 200) {
        res.status(200).json({ success: true, url });
        return; // Exit the loop if successful response is received
      } else {
        console.log(`URL ${url} returned status ${response.status}`);
      }
    } catch (error: any) {
      console.log(`catch: URL ${url} failed to fetch:`, error.message);
    }
  }

  console.log("No active link found");
  res.status(404).json({ success: false, message: "No active link found" });
}
