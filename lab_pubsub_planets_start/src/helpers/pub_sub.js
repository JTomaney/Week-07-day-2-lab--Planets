const PubSub = {
  publish: function(channel, payload){
    console.log(`${channel}: ${payload}`);
    const event = new CustomEvent(channel, {
      detail: payload
    });
    document.dispatchEvent(event);
  },

  subscribe: function(channel, callback){
    console.log(channel);
    document.addEventListener(channel, callback);
  }
}

module.exports = PubSub;
