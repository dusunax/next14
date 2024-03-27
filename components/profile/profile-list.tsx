import React from "react";
import { Avatar, Card } from "antd";

const Profile = ({ name, avatar }) => (
  <div>
    <Avatar src={avatar} size={48} />
    <span>{name}</span>
  </div>
);

export default function ProfileList() {
  const profiles = [
    { name: "John Doe", avatar: "/avatar1.jpg" },
    { name: "Alice Smith", avatar: "/avatar2.jpg" },
    { name: "Emily Clark", avatar: "/avatar3.jpg" },
  ];

  const loading = true;

  return (
    <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
      <div>
        {profiles.map((profile, index) => (
          <Profile key={index} name={profile.name} avatar={profile.avatar} />
        ))}
      </div>
    </Card>
  );
}
