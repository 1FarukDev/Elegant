import React, { useState, useEffect } from 'react';
import ELText from './ELText';

interface CountdownProps {
    targetDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const [day, month, year] = targetDate.split('-');
        const targetDateObj = new Date(`${year}-${month}-${day}T00:00:00`);

        const countdownInterval = setInterval(() => {
            const now = new Date();
            const difference = targetDateObj.getTime() - now.getTime();

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                clearInterval(countdownInterval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(countdownInterval);
    }, [targetDate]);

    return (
        <div className="flex gap-6">
                <div className="flex flex-col text-center w-max">
                    <ELText text={timeLeft.days} className={'font-medium bg-gray-200 p-3 px-4 w-max text-[30px]'} />
                    <ELText text='Days' className={'text-gray-500 font-normal'} />
                </div>
                <div className="flex flex-col text-center w-max">
                <ELText text={timeLeft.hours} className={'font-medium bg-gray-200 p-3 px-4 w-max text-[30px]'} />
                    <ELText text='Hours' className={'text-gray-500 font-normal'} />
                </div>
                <div className="flex flex-col text-center w-max">
                <ELText text={timeLeft.minutes} className={'font-medium bg-gray-200 p-3 px-4 w-max text-[30px]'} />
                    <ELText text='Mins' className={'text-gray-500 font-normal'} />
                </div>
                <div className="flex flex-col text-center w-max">
                <ELText text={timeLeft.seconds} className={'font-medium bg-gray-200 p-3 px-4 w-max text-[30px]'} />
                    <ELText text='Secs' className={'text-gray-500 font-normal'} />
                </div>
        </div>
    );
};

export default Countdown;
