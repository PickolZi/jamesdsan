"use client";

import dirtBlockDark from "../../public/backgrounds/dirtBlockDark.png";
// import dirtBlockDarker from "../../public/backgrounds/dirtBlockDarker.png";
import dirtBlockDarkerMid from "../../public/backgrounds/dirtBlockDarkerMid.png";

const ListScreen = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  return (
    <div id={id} className="relative">
      <BackgroundImage />
      <TitleLayer title={id} />
      <ContentLayer>{children}</ContentLayer>
    </div>
  );
};

const BackgroundImage = () => {
  return (
    <div className="sticky z-0 h-screen top-0 flex flex-col">
      <div
        className="h-[128px]"
        style={{
          backgroundImage: `url(${dirtBlockDark.src})`,
        }}
      />
      <div
        className="flex-auto"
        style={{
          backgroundImage: `url(${dirtBlockDarkerMid.src})`,
        }}
      />
      <div
        className="h-[256px]"
        style={{
          backgroundImage: `url(${dirtBlockDark.src})`,
        }}
      />
    </div>
  );
};

const TitleLayer = ({ title }: { title: string }) => {
  const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="absolute top-0 w-full flex justify-center items-end h-[128px] text-2xl">
      {capitalizeFirstLetter(title)}
    </div>
  );
};

const ContentLayer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="absolute top-[128px] h-[calc(100vh-384px)] flex flex-col justify-center items-center w-full">
      {children}
    </div>
  );
};

export default ListScreen;
