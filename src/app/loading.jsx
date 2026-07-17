import React from "react";

const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-black"></div>
    </div>
  );
};

export default Loading;
