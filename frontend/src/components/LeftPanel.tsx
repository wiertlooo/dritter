import { BackPhoto } from "./BackPhoto";
import { UserInfo } from "./UserInfo";
import { UserPosts } from "./UserPosts";

export const LeftPanel = (): React.JSX.Element => {
  return (
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
  );
};
