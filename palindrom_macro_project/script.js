const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
  return cleaned === cleaned.split("").reverse().join("");
}

button.addEventListener("click", () => {
  const text = input.value;

  if (text.trim() === "") {
    alert("Please input a value");
    return;
  }

  if (isPalindrome(text)) {
    result.textContent = `${text} is a palindrome`;
  } else {
    result.textContent = `${text} is not a palindrome`;
  }
});
