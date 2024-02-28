import { API_URL } from "@constants/common";

async function getVideos(id: string) {
  // throw new Error("Not implemented yet for this API");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return await response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);

  return (
    <ul>
      {videos.map((video) => (
        <li key={video.id}> {video.name}</li>
      ))}
    </ul>
  );
}
