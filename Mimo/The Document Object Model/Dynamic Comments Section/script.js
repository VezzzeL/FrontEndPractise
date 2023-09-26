function createEnclosingDiv() {
  let enclosingDiv = document.createElement("div");
  enclosingDiv.classList.add("comment");
  return enclosingDiv;
}

function createAvatar(initials) {
  let newAvatar = document.createElement("span");
  newAvatar.innerText = initials;
  newAvatar.classList.add("avatar");
  return newAvatar;
}

function createText(text) {
  let newText = document.createElement("span");
  newText.classList.add("text");
  newText.innerText = text;
  return newText;
}

function addComment() {
  let commentsDiv = document.getElementById("commentSection");
  let initialsInput = document.getElementById("initials").value;
  let textInput = document.getElementById("commentText").value;
  let enclosingDiv = createEnclosingDiv();
  let avatar = createAvatar(initialsInput);
  let text = createText(textInput);
  enclosingDiv.appendChild(avatar);
  enclosingDiv.appendChild(text);
  commentsDiv.appendChild(enclosingDiv);
  resetFields();
}

function resetFields() {
  document.getElementById("initials").value = "";
  document.getElementById("commentText").value = "";
}
