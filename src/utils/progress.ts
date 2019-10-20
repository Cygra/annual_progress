export const getProgress = () => {
  const currentDate = new Date();
  const currentMilliSeconds = currentDate.getTime();
  const currentYear = currentDate.getFullYear();
  const startOfYear = Date.parse(`1/1/${currentYear}`);
  const endOfYear = Date.parse(`1/1/${currentYear + 1}`);
  return (currentMilliSeconds - startOfYear) / (endOfYear - startOfYear);
};

export const getProgressDisplay = (progress: number): string => {
  return `${(progress * 100).toFixed(7)}%`;
};
