import React, { useState, useEffect } from 'react';

const CouponTimer = ({ expirationTime }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const expirationDate = new Date(expirationTime);
      const difference = expirationDate - now;

      if (difference > 0) {
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [expirationTime]);

  return (
    <div className="flex items-center space-x-2">
      {timeLeft.hours !== undefined ? (
        <>
          <span>{timeLeft.hours.toString().padStart(2, '0')}h : </span><span>{timeLeft.minutes.toString().padStart(2, '0')}m : </span><span>{timeLeft.seconds.toString().padStart(2, '0')}s</span>
        </>
      ) : (
        <span>...</span>
      )}
    </div>
  );
};

export default CouponTimer;
