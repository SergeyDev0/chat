import React from "react";
import io from "socket.io-client";
import { Link, useLocation } from "react-router-dom";

const Chat = () => {
  const socket = io.connect("http://localhost:5173")
  const { search } = useLocation();
  const [params, setParams] = React.useState(null);

  React.useEffect(() => { 
    const searchParams = Object.fromEntries(new URLSearchParams(search));
    setParams(searchParams);
    socket.emit("join", searchParams);
  }, [search]);

  React.useEffect(() => {
    socket.on("message", ({ data }) => {
      console.log(data);
    })
  }, []);
  return (
    <>
      Chat
      <Link to="/">Домой</Link>
    </>
  )
};

export default Chat;
