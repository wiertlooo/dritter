import { ProfilePhoto } from "./ProfilePhoto";

export const BackPhoto = (): React.JSX.Element => {
  const containerStyle: React.CSSProperties = {
    marginLeft: "5%",
  };

  return (
    <div className="flex h-96 bg-red-500">
      <div style={containerStyle} className="my-auto">
        <ProfilePhoto />
      </div>
    </div>
  );
};
