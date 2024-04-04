const friendsArray = (friends) => {
  const newArray = [];
  for (const friend of friends) {
    if (friend.length % 2 == 0) {
      newArray.push(friend);
    }
  }
  return newArray;
}

console.log(friendsArray(['Sayem', 'Mahir', 'Aziz', 'Nazmul', 'Lisan']));