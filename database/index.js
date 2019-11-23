const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  gh_id: Number,
  owner: String,
  name: String,
  link: String,
  stargazers: Number,
  description: String
});

repoSchema.path('gh_id').index({unique:true});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data) => {
  console.log('hello from database');
  for (var result of data.items) {
    var record = new Repo({
      gh_id: result.id,
      owner: result.owner.login,
      name: result.name,
      link: result.html_url,
      stargazers: result.stargazers_count,
      description: result.description
    })
    record.save((err, record) => {
      if (err) return console.error(err);
    })
  }
  // This function should save a repo or repos to
  // the MongoDB
}

let get = (callback) => {
  Repo.
   find().
   sort({stargazers: 'desc'}).
   limit(25).
   exec(callback);
}

module.exports.save = save;
module.exports.get = get;