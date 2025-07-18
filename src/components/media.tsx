"use client";

import { useState } from "react";
import type { ProjectMedia } from "../types";

interface MediaGalleryProps {
  media: ProjectMedia[];
  projectTitle: string;
}

export function MediaGallery({ media, projectTitle }: MediaGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!media || media.length === 0) {
    return (
      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <span className="text-white text-lg font-medium">
          No media available
        </span>
      </div>
    );
  }

  const currentMedia = media[currentIndex];

  const nextMedia = () => {
    setCurrentIndex((prev) => (prev + 1) % media.length);
  };

  const prevMedia = () => {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Main Media Display */}
      <div
        className="relative h-48 bg-gray-100 overflow-hidden cursor-pointer"
        onClick={openModal}
      >
        {currentMedia.type === "image" ? (
          <img
            src={currentMedia.src || "/placeholder.svg"}
            alt={currentMedia.alt || `${projectTitle} screenshot`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src =
                "https://via.placeholder.com/400x200/e5e7eb/6b7280?text=Image+Not+Found";
            }}
          />
        ) : (
          <div className="relative w-full h-full">
            <img
              src={
                currentMedia.thumbnail ||
                "/placeholder.svg?height=200&width=400"
              }
              alt={currentMedia.alt || `${projectTitle} video thumbnail`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src =
                  "https://via.placeholder.com/400x200/e5e7eb/6b7280?text=Video+Thumbnail";
              }}
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
              <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-gray-800 ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* Navigation arrows */}
        {media.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevMedia();
              }}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextMedia();
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}

        {/* Media counter */}
        {media.length > 1 && (
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
            {currentIndex + 1} / {media.length}
          </div>
        )}
      </div>

      {/* Thumbnail strip */}
      {media.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
          {media.map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? "border-blue-500"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <img
                src={
                  item.type === "image"
                    ? item.src
                    : item.thumbnail || "/placeholder.svg?height=48&width=64"
                }
                alt={`${projectTitle} media ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/64x48/e5e7eb/6b7280?text=?";
                }}
              />
            </button>
          ))}
        </div>
      )}

      {/* Modal for full-size view */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 text-xl"
            >
              ✕ Close
            </button>
            {currentMedia.type === "image" ? (
              <img
                src={currentMedia.src || "/placeholder.svg"}
                alt={currentMedia.alt || `${projectTitle} full size`}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/800x600/e5e7eb/6b7280?text=Image+Not+Found";
                }}
              />
            ) : (
              <video
                src={currentMedia.src}
                controls
                className="max-w-full max-h-full"
                onError={() => {
                  console.error("Video failed to load:", currentMedia.src);
                }}
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
    </>
  );
}
