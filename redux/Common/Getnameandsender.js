import { selectChat } from "../userSlice"

const getUserName=(User,selectedUser)=>{
   return User !==null && User._id !==selectedUser._id && selectedUser.isGroupChat==false ?(selectedUser.users[0]._id !==User._id?selectedUser.users[0].name :selectedUser.users[1].name):selectedUser.chatName
}


export {getUserName}