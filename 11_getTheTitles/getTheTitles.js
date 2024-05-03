const getTheTitles = function(books) {
  let titles = [];

  titles = books.map((value) => {
    return value.title;
  })
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
