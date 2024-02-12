// Stopwatch.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../common/store.ts';

const Stopwatch = () => {
  const dispatch = useDispatch();
  const { isRunning, recordedTimes, startTime } = useSelector(
    (state: RootState) => state
  );

  const handleStart = () => {
    dispatch({ type: 'START_STOPWATCH' });
  };

  const handleEnd = () => {
    dispatch({ type: 'END_STOPWATCH' });
  };

  const formatTime = (milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        // Update the elapsed time every 100 milliseconds
        dispatch({ type: 'UPDATE_ELAPSED_TIME' });
      }, 100);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, dispatch]);

  return (
    <div>
      <h2>Stopwatch</h2>
      <p>{isRunning ? 'Running' : 'Stopped'}</p>
      <div>
        <p>
          <strong>Elapsed Time: </strong>
          {startTime && isRunning
            ? formatTime(Date.now() - startTime.getTime())
            : '0:00'}
        </p>
      </div>
      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
      <button onClick={handleEnd} disabled={!isRunning}>
        End
      </button>
      <div>
        <h3>Recorded Times</h3>
        <ul>
          {recordedTimes.map((time, index) => (
            <li key={index}>{`${formatTime(time)}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Stopwatch;
