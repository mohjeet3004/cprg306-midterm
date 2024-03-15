"use client";
import React, { useEffect, useState } from "react";

const APICallExam = ({ list }) => {
  const [secretCode, setSecretCode] = useState(null);

  const fetchSecretCode = async () => {
    const passcode = "ehen2rfow";
    const url = `https://webdev2-class-demo.vercel.app/api/sampleReqs/${passcode}`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setSecretCode(data.secretCode);
      } else {
        console.error("Error fetching secret code:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching secret code:", error);
    }
  };

  useEffect(() => {
    // This will fetch the secret code when the component mounts
    fetchSecretCode();
  }, []); // Empty dependency array ensures it only runs once on mount

  return (
    <div>
      <div className="flex items-center justify-center">
        <button
          className="bg-red-100 p-2 rounded-md border border-red-500"
          onClick={fetchSecretCode}
        >
          Submit
        </button>
      </div>

      {secretCode && (
        <div className="mt-4 p-2 bg-gray-100 rounded-md">
          <p className="text-sm">Secret Code: {secretCode}</p>
        </div>
      )}
    </div>
  );
};

export default APICallExam;
