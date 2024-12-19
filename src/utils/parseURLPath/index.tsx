const parseURLPath = (url: string) => {
  const newUrl = new URL(url)
  return newUrl.pathname.substring(1);
};

export default parseURLPath;
