exports.createMessage = async (req, res) => {
  res.send("Create Message");
};

exports.readMessage = async (req, res) => {
  res.send("Get Message");
};

exports.deleteMessage = async (req, res) => {
  res.send("delete Message");
};

exports.updateMessage = async (req, res) => {
  res.send("update Message");
};
