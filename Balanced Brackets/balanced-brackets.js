// A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].

// Two brackets are considered to be a matched pair if the an opening bracket (i.e., (, [, or {) occurs to the left of a closing bracket (i.e., ), ], or }) of the exact same type. There are three types of matched pairs of brackets: [], {}, and ().

// A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. For example, {[(])} is not balanced because the contents in between { and } are not balanced. The pair of square brackets encloses a single, unbalanced opening bracket, (, and the pair of parentheses encloses a single, unbalanced closing square bracket, ].

// By this logic, we say a sequence of brackets is balanced if the following conditions are met:

// • It contains no unmatched brackets.

// • The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.

// Given n strings of brackets, determine whether each sequence of brackets is balanced. If a string is balanced, return YES. Otherwise, return NO.

// Function Description

// Complete the function isBalanced in the editor below. It must return a string: YES if the sequence is balanced or NO if it is not.

// isBalanced has the following parameter(s):

// • s: a string of brackets

// Input Format

// The first line contains a single integer n, the number of strings.
// Each of the next n lines contains a single string s, a sequence of brackets.

// Constraints

// • 1 <= n <= 10 ^ 3
// • 1 <= |s| <= 10 ^ 3, where |s| is the length of the sequence.
// • All chracters in the sequences ∈ { {, }, (, ), [, ] }.

// Output Format

// For each string, return YES or NO.

// Sample Input

// 3
// {[()]}
// {[(])}
// {{[[(())]]}}
// Sample Output

// YES
// NO
// YES
// Explanation

// The string {[()]} meets both criteria for being a balanced string, so we print YES on a new line.
// The string {[(])} is not balanced because the brackets enclosed by the matched pair { and } are not balanced: [(]).
// The string {{[[(())]]}} meets both criteria for being a balanced string, so we print YES on a new line.

function isBalanced(s) {
  const brackets = {
    open: { "(": ")", "{": "}", "[": "]" },
    close: { ")": "", "}": "", "]": "" },
    pipes: { "|": "|" },
  };

  const stack = [];

  if (s.length % 2 !== 0) return "NO";

  if (s[0] in brackets.close && s[s.length - 1] in brackets.open) return "NO";

  for (let i = 0; i < s.length; i++) {
    if (s[i] in brackets.open) stack.push(s[i]);
    else if (s[i] in brackets.pipes) {
      if (!s[i + 1] in brackets.close) stack.push(s[i]);
      if (s[i - 1] in brackets.open && s[i + 1] in brackets.close) return "NO";
    }

    let current = stack.pop();
    let next = s[i + 1];

    if (current in brackets.open) {
      if (next in brackets.open || next in brackets.pipes) stack.push(current);
      if (next in brackets.close) {
        if (next !== brackets["open"][current]) return "NO";
      }
    } else if (current in brackets.pipes) {
      if (next in brackets.open) stack.push(current);
      if (next in brackets.close) return "NO";
    } else if (!current) {
      if (next in brackets.close) return "NO";
    }
  }

  return stack.length === 0 ? "YES" : "NO";
}

console.log(isBalanced("(")); // NO
console.log(isBalanced("))")); // NO
console.log(isBalanced("({)}")); // NO
console.log(isBalanced("()")); // YES
console.log(isBalanced("}{[()]}{")); // NO
console.log(isBalanced("{[(])}")); // NO
console.log(isBalanced("[{{()}}]")); // YES
console.log(isBalanced("({[]{}})")); // YES

console.log(isBalanced("||")); // YES
console.log(isBalanced("(|)")); // NO
console.log(isBalanced("(|)|")); // NO
console.log(isBalanced("(|[]{}|)")); // YES
console.log(isBalanced("|(|[]{}|)|")); // YES
console.log(isBalanced("()()||{}[]||")); // YES
