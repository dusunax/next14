import ProfileForm from "@components/profile/profile-form";
import ProfileList from "@components/profile/profile-list";

export async function generateMetadata() {
  return {
    title: "Profile",
  };
}

export default async function ProfilePage() {
  return (
    <>
      <ProfileForm />
      <ProfileList />
    </>
  );
}
