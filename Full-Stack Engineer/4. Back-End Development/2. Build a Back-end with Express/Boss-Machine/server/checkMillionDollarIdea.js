const checkMillionDollarIdea = (req, res, next) => {
  const weeklyRevenue = Number(req.body.weeklyRevenue);
  const numWeeks = Number(req.body.numWeeks);
  const checkIdea = weeklyRevenue * numWeeks;
  if (checkIdea >= 1000000) {
    next()
  } else {
    console.log(req.body);
    res.status(400).send("That's not a million-dolar idea!")
  }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
