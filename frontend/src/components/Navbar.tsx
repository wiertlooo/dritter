export const Navbar = (): React.JSX.Element => {
  return (
    <div className="flex items-center bg-blue-500 text-white h-14 border-b-4 border-blue-600 shadow-lg">
      <div className="flex flex-row w-4/5 mx-auto items-center">
        <div className="font-bold">DRITTER LOGO</div>
        <div className="flex flex-row ml-auto">
          <div className="mx-2">ICON</div>
          <div className="mx-2">ICON</div>
        </div>
      </div>
    </div>
  );
};
