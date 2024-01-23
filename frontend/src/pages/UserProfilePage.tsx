import { BackPhoto } from "../components/BackPhoto";
import { Navbar } from "../components/Navbar";
import { RightPanel } from "../components/RightPanel";
import { UserInfo } from "../components/UserInfo";
import { UserPosts } from "../components/UserPosts";

function UserProfilePage(): React.JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <div className="flex flex-row">
        <div className="flex-col w-4/5">
          <BackPhoto />
          <div className="flex flex-row">
            <div className="w-1/4">
              <UserInfo />
            </div>
            <div className="w-3/4">
              <UserPosts />
            </div>
          </div>
        </div>
        <RightPanel />
      </div>
    </div>
  );
}

export default UserProfilePage;
