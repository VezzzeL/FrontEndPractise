const samsFriends = [];
const ashersFriends = [];
const friendsRecommendationAsher = [];
let currentFriend = "";
let isCommonFriend = false;
samsFriends.push("morgan", "riley", "jessie", "skyler", "frankie");
ashersFriends.push("morgan", "aiden", "angel", "ariel", "skyler");
for (let i = 0; i < samsFriends.length; i++) {
  currentFriend = samsFriends[i];
  isCommonFriend = ashersFriends.includes(currentFriend);
  if (!isCommonFriend) {
    friendsRecommendationAsher.push(currentFriend);
  }
  console.log("Friends Recommended for Asher:");
  console.log(friendsRecommendationAsher);
}
