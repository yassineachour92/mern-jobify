import React from "react";
import { Form, useOutletContext } from "react-router-dom";
import "../pages/style/dashboard.css";
import FormRow from "../components/Form";

interface userProps {
  name: string;
  lastName: string;
  email: string;
  location: string;
}

const Profile = () => {
  const { user }: { user: userProps } = useOutletContext();

  const { name, lastName, email, location } = user;
  return (
    <main className="profile-style">
      <Form method="post" className="form" encType="multipart/form-data">
        <h4 className="form-title">profile</h4>
        <div className="form-center">
          <div className="form-row">
            <label htmlFor="avatar" className="form-label">
              Select an image file (max 0.5 MB)
            </label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              className="form-input"
              accept="image/*"
            />
          </div>
          <FormRow type="text" name="name" defaultValue={name} />
          <FormRow
            type="text"
            name="lastName"
            labelText="last name"
            defaultValue={lastName}
          />
          <FormRow type="email" name="email" defaultValue={email} />
          <FormRow type="text" name="location" defaultValue={location} />
          {/* <SubmitBtn formBtn /> */}
        </div>
      </Form>
    </main>
  );
};

export default Profile;
