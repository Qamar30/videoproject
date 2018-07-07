if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://mongodb://<dbuser>:<dbpassword>@ds229771.mlab.com:29771/video-project'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}