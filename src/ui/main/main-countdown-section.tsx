import { Poppins } from 'next/font/google';
import { useState, useEffect } from 'react';

interface timeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const poppins700 = Poppins({ weight: "700", subsets: ["latin"] });
const poppins500 = Poppins({ weight: "500", subsets: ["latin"] });
const poppins300 = Poppins({ weight: "300", subsets: ["latin"] });

const Countdown = () => {
    const calculateTimeLeft = () => {
        const targetDate = new Date('August 29, 2024 00:00:00').getTime();
        const now = new Date().getTime();
        const difference = targetDate - now;

        let timeLeft: timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return null; // Or a loading spinner if desired
  }

    return (
        <div className={`${poppins500.className} bg-[#303F9A] text-white flex flex-col justify-center text-center px-5 py-10 my-20`}>
            <h1 className='text-5xl mb-4'>OPEN MEMBER<br />REGISTRATION</h1>
            <h3 className='text-xl lg:text-2xl mt-4'>29 August 2024 - 31 August 2024</h3>
            <p className='text-md lg:text-2xl mb-4'>Visit our booth at BINUS Kemanggisan!</p>
            <p className={`text-xl mt-8 ${poppins300.className} `}>Countdown:</p>
            {Object.keys(timeLeft).length > 0 ? (
                <div>
                    <p suppressHydrationWarning  className='text-2xl lg:text-5xl'>{timeLeft.days} Days : {timeLeft.hours} Hours : {timeLeft.minutes} Minutes : {timeLeft.seconds} Seconds</p>
                </div>
            ) : (
                <p>Time's up!</p>
            )}
        </div>
    );
};

export default Countdown;