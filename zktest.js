var ZKLib = require('./zklib/zklib');
var async = require('async');


var zk = new ZKLib({
  ip:"192.168.1.225",
  port:4370,
  inport:5200
});

console.log('eaea');

async.series(
  [
    function(cb) {
      zk.connect(function(err,ret) {
        cb(err,ret);
      });
    },
    function(cb,err,ret) {
      zk.serialNumber( function(err, ret) {
        console.log(err,ret);
        cb(err,ret);
      });
    },
    function(cb,err,ret) {
      zk.version( function(err, ret) {
        console.log(err,ret);
        cb(err,ret);
      });
    },
    function(cb,err,ret) {
      zk.gettime( function(err, ret) {
        console.log(err,ret);
        cb(err,ret);
      });
    },
    function(cb,err,ret) {
      zk.getattendance( function(err, ret) {
        console.log(err,ret);
        cb();
      });
    },
    function(cb,err,ret) {
      zk.getuser( function(err, ret) {
        console.log(err,ret);
        cb(err,ret);
      });
    }
  ],
  function(err) {
    console.log("done!");
  }
);


