export function IsURL(url) {
  // Returns true if function is a URL, false otherwise.
  const regex = /^(http|https):\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?$/;
  return regex.test(url);
}
