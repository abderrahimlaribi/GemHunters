import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const CountDownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const currentTime = new Date(); // Current time
    const targetTime = new Date(); // Create a new Date object for the target time
    targetTime.setMinutes(targetTime.getMinutes() + 1); // Add 1 minute

    const updateCountdown = () => {
      const now = new Date().getTime();
      const remainingTime = Math.max(0, targetTime.getTime() - now);
      setTimeRemaining(remainingTime);
    };

    // Initial call to set countdown immediately
    updateCountdown();

    const countdownInterval = setInterval(() => {
      updateCountdown();
      navigate("/");
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(countdownInterval);
  }, []); // Empty dependency array ensures this runs only once

  // Redirect to '/' when timeRemaining reaches 0
  useEffect(() => {
    if (timeRemaining === 0) {
      console.log("Time ends");
    }
  }, [timeRemaining, navigate]); // Run this effect when timeRemaining changes

  // Convert timeRemaining to minutes and seconds
  const seconds = Math.floor((timeRemaining / 1000) % 60);
  const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);

  return (
    <div className="countdown-timer-container">
      <span className="minutes">{minutes.toString().padStart(2, "0")}</span>
      <span className="dots">:</span>
      <span className="seconds">{seconds.toString().padStart(2, "0")}</span>
    </div>
  );
};

export default CountDownTimer;