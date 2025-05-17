
import axios from "axios";

// Update the base URL as needed for your FastAPI deployment
const BASE_URL = "";

export async function sendChatMessage(message: string): Promise<string> {
  try {
    const response = await axios.post(
      BASE_URL + "/chat",
      { message },
      { timeout: 15000 }
    );
    return response.data.response || "";
  } catch (error: any) {
    if (error?.response?.data?.detail) {
      throw new Error(error.response.data.detail);
    }
    throw new Error("Server not reachable");
  }
}
