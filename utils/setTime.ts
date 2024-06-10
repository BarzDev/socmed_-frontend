export function timeAgo(dateString: string): string {
  const now = new Date().getTime();
  const date = new Date(dateString).getTime();
  const diffInMs = now - date;

  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  //   console.log({ diffInMs, diffInMinutes, diffInHours, diffInDays });

  if (diffInMinutes < 60) {
    return diffInMinutes < 1 ? "1 min" : `${diffInMinutes} min`;
  }

  if (diffInHours < 24) {
    return diffInHours === 1 ? "1 hours" : `${diffInHours} hours`;
  }

  return diffInDays === 1 ? "1 day" : `${diffInDays} day`;
}
