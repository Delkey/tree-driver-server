export const cleanNullArgs = (args: any): any => {
  const notNull = {};
  Object.keys(args).forEach((key) => {
    if (args[key] !== null && args[key]) {
      notNull[key] = args[key];
    }
  });
  return notNull;
};
