export const changeFileExtension = (fileName: string, newExtension: string) => {
  const arrStr = fileName.split('.');
  const wordWithoutExtension = arrStr.slice(0, arrStr.length - 1).join('');
  return `${wordWithoutExtension}.${newExtension}`;
};
