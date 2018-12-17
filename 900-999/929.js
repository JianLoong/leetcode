/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  const set = new Set();

  for (let i = 0; i < emails.length; i++) {
    const result = emails[i].slice(emails[i].lastIndexOf("@"));
    if (!set.has(result)) set.add(result);
  }

  return set.size;
};

const arr = [
  "test.email+alex@leetcode.com",
  "test.e.mail+bob.cathy@leetcode.com",
  "testemail+david@lee.tcode.com"
];

console.log(numUniqueEmails(arr));
