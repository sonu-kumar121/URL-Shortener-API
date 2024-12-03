const base62 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

exports.generateAlias = (length = 6) => {
  let alias = '';
  for (let i = 0; i < length; i++) {
    alias += base62[Math.floor(Math.random() * base62.length)];
  }
  return alias;
};
