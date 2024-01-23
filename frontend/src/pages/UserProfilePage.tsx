import { BackPhoto } from "../components/BackPhoto";
import { LeftPanel } from "../components/LeftPanel";
import { Navbar } from "../components/Navbar";
import { RightPanel } from "../components/RightPanel";
import { UserInfo } from "../components/UserInfo";
import { UserPosts } from "../components/UserPosts";

function UserProfilePage(): React.JSX.Element {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  );
}

export default UserProfilePage;
