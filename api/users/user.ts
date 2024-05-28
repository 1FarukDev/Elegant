const API_URL = "https://jsonplaceholder.typicode.com/";

export async function GET() {
  const res = await fetch(`${API_URL}/posts`, {
    headers: {
      "Content-Type": "application/json",
      //   "API-Key": process.env.DATA_API_KEY,
    },
  });
  const data = await res.json();
  return Response.json({ data });
}
