const formatTimestamp = (timestamp) => new Date(timestamp)
  .toLocaleString('en-GB', {
    timeZone: 'Europe/London',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
  .replace(/\//g, '/');

export default formatTimestamp;
