export const removeExtension = (fileName: string) => {
  const reversed = fileName.split('').reverse();
  return reversed
    .slice(reversed.indexOf('.') + 1)
    .reverse()
    .join('');
};
