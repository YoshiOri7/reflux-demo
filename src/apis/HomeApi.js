var HomeApi = {
  fetchResolve: function fetchResolve() {
    return new Promise(function(resolve, reject) {
      var data = [{ message: 'bye' }, { message: 'seeYa' }];

      setTimeout(function() {
        resolve(data);
      }, 2000);
    });
    // .catch(function(error) {
    //   console.log('Error: ', error);
    // });
  },
  fetchReject: function fetchReject() {
    return new Promise(function(resolve, reject) {
      var error = { status: 'error', message: 'something went wrong with fetch' };

      setTimeout(function() {
        reject(error);
      }, 2000);
    });
    // .catch(function(error) {
    //   console.log('Error: ', error);
    // });
  }
};

module.exports = HomeApi;
