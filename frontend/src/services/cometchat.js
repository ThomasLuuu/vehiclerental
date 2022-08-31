export const createAccount = async ({ cometChat, id, fullname, avatar }) => {
  const authKey = `205dc029a69311878c9c867696d1bf6475533238`;
  const user = new cometChat.User(id);
  user.setName(fullname);
  user.setAvatar(avatar);
  return await cometChat.createUser(user, authKey);
};

export const createGroup = async ({ cometChat, guid, name }) => {
  const groupType = cometChat.GROUP_TYPE.PUBLIC;
  const password = "";
  const group = new cometChat.Group(guid, name, groupType, password);
  await cometChat.createGroup(group);
};

export const login = async ({ cometChat, user }) => {
  if (!user) return;
  const authKey = `205dc029a69311878c9c867696d1bf6475533238`;
  return await cometChat.login(user.id, authKey);
};