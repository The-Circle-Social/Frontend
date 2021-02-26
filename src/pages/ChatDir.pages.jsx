import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import io from "socket.io-client";
import { uid } from "uid";
let socket;
const ChatDir = ({ user = "user4", history, setGroup }) => {
  const [groupName, setGroupName] = useState("");
  const [isCreate, setIsCreate] = useState(false);
  const [chats, setChat] = useState([]);
  const [selectedChats, setSelectedChats] = useState([]);
  const [deleteChat, setDeleteChat] = useState(false);
  const [friends, setFriends] = useState([
    "user1",
    "user2",
    "user3",
    "user4",
    "user5",
    "user6",
  ]);
  const [selectedFriends, setSelectedFriends] = useState([]);
  useEffect(() => {
    socket = io("127.0.0.1:3003", { transports: ["websocket"] });
  }, []);
  const fetchMember = () => {
    axios({
      url: "http://localhost:5000/chatList",
      method: "GET",
      params: {
        username: user.name,
      },
    }).then(({ data }) => {
      setChat(data);
    });
  };
  useEffect(() => {
    socket.emit("user_connected", {
      username: "heet",
      currentPosition: "chatdir",
      id: null,
    });
    fetchMember();
  }, []);
  useEffect(() => {
    socket.on("group-noti", (data) => {
      switch (data.type) {
        case "new group":
          console.log(data);
          setGroup(data.content);
          history.push(
            `/group/@${data.content.groupid}/@${data.content.group_name}/@${user.name}`
          );
          break;
        default:
          break;
      }

      console.log(data);
    });
    //return socket.close
  }, []);
  const onMessageSelect = (chat) => {
    let arr = selectedChats;
    if (arr.indexOf(chat) === -1) {
      arr.push({
        username: user.name,
        friend: chat.receiverName,
        last_updated: chat.last_updated,
        type: chat.type,
        groupid: chat.groupid,
      });
    } else {
      arr.splice(arr.indexOf(chat), 1);
    }
    setSelectedChats(arr);
    console.log(arr);
  };
  const onDeleteMessage = (chat) => {
    if (selectedChats.length > 0) {
      axios({
        url: "http://localhost:5000/delete/whole",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          chatrooms: selectedChats,
          username: user.name,
        }),
      }).then((data) => {
        fetchMember();
        console.log(data);
        setSelectedChats([]);
        setDeleteChat(false);
      });
    }
  };
  const createGroup = () => {
    if (isCreate && groupName && selectedFriends.length > 0) {
      const data = {
        members: selectedFriends,
        username: "heet",
        group_name: groupName,
      };
      socket.emit("create-group", data);
      setSelectedFriends([]);
      setIsCreate(false);
      setGroupName("");
    } else {
      alert("Sumaar");
    }
  };
  const onFriendSelected = (friend) => {
    let arr = selectedFriends;
    if (arr.indexOf(friend) === -1) {
      arr.push(friend);
    } else {
      arr.splice(arr.indexOf(friend), 1);
    }
    setSelectedFriends(arr);
  };
  return (
    <div className="">
      <button
        onClick={() => {
          setDeleteChat(!deleteChat);
          setSelectedChats([]);
        }}
      >
        {!deleteChat ? "delete Chat" : "cancel"}
      </button>

      <ul>
        {chats.map((chat) => {
          return (
            <li key={uid()}>
              <Link
                to={
                  chat.type === "private"
                    ? `/dm/@${chat.receiverName}/@${user.name}`
                    : `/group/@${chat.groupid}/@${chat.receiverName}/@${user.name}`
                }
                key={uid()}
              >
                {chat.receiverName}
              </Link>
              {deleteChat ? (
                <label key={uid()}>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    key={uid()}
                    onClick={() => onMessageSelect(chat)}
                  />
                </label>
              ) : null}
            </li>
          );
        })}
      </ul>
      <button onClick={() => setIsCreate(true)}>Create Group</button>
      {deleteChat ? <button onClick={onDeleteMessage}>Delete</button> : null}
      {isCreate ? (
        <div className="">
          <input
            type="text"
            name="createGroup"
            id=""
            onChange={({ target }) => setGroupName(target.value)}
            value={groupName}
          />
          {friends.map((friend) => (
            <label>
              {friend}
              <input
                type="checkbox"
                name=""
                id=""
                onClick={() => onFriendSelected(friend)}
              />
            </label>
          ))}
          <button onClick={createGroup}>Submit</button>
        </div>
      ) : null}
    </div>
  );
};

export default ChatDir;
