import { useState } from "react";

export default function Events() {
  const [videoUrl, setVideoUrl] = useState(null);

  const events = [
    {
      id: 1,
      title: "Event 1 Topic",
      thumbnail: "https://via.placeholder.com/300",
      videoId: "YOUR_VIDEO_ID_1",
    },
    {
      id: 2,
      title: "Event 2 Topic",
      thumbnail: "https://via.placeholder.com/300",
      videoId: "YOUR_VIDEO_ID_2",
    },
    {
      id: 3,
      title: "Event 3 Topic",
      thumbnail: "https://via.placeholder.com/300",
      videoId: "YOUR_VIDEO_ID_3",
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6">Our Events</h1>

      {/* Event Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="relative group cursor-pointer overflow-hidden rounded-xl"
            onClick={() => setVideoUrl(`https://www.youtube.com/embed/${event.videoId}`)}
          >
            <img
              src={event.thumbnail}
              alt={event.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white text-sm px-4 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {event.title}
            </div>
          </div>
        ))}
      </div>

      {/* Video Popup */}
      {videoUrl && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative bg-black p-4 rounded-lg shadow-lg w-full max-w-3xl">
            <button
              className="absolute top-2 right-2 text-white bg-red-500 rounded-full px-3 py-1"
              onClick={() => setVideoUrl(null)}
            >
              ✕
            </button>
            <iframe
              className="w-full h-80 rounded"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Subscribe Button */}
      <a
        href="https://www.youtube.com/YOUR_CHANNEL"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 bg-red-600 text-white px-6 py-2 rounded-lg text-lg hover:bg-red-700 transition"
      >
        Subscribe
      </a>
    </div>
  );
}

export default Events;
