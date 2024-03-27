"use client";
import { Card, Button, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

export default function ProfileForm() {
  const uploadButton = (
    <div>
      <UploadOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <Card title="Upload Profile Image">
      <p>Choose an image to set as your profile picture.</p>
      <div>
        <Upload listType="picture-card" className="avatar-uploader">
          {uploadButton}
        </Upload>
        <div>
          <Input type="file" id="file" style={{ paddingBottom: "24px" }} />
          <Button type="primary">Submit</Button>
        </div>
      </div>
    </Card>
  );
}
