export function timeAgo(dateString: string): string {
  const now = new Date().getTime();
  const date = new Date(dateString).getTime();
  const diffInMs = now - date;

  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const diffInMonth = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 30));
  const diInYears = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 30 * 12));
  //   console.log({ diffInMs, diffInMinutes, diffInHours, diffInDays });

  if (diffInMinutes < 60) {
    return diffInMinutes < 1 ? "1 min" : `${diffInMinutes} min`;
  }

  if (diffInHours < 24) {
    return diffInHours === 1 ? "1 hours" : `${diffInHours} hours`;
  }

  if (diffInDays < 30) {
    return diffInDays === 1 ? "1 day ago" : `${diffInDays} day ago`;
  }
  if (diffInMonth < 12) {
    return diffInMonth === 1 ? "1 month ago" : `${diffInMonth} month ago`;
  }

  return diInYears === 1 ? "1 year ago" : `${diInYears} year ago`;
}
