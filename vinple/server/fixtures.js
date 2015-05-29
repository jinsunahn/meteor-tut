if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Vinple',
    url: 'http://vinple.com'
  });
}