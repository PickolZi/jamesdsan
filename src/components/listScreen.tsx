"use client";

import dirtBlockDark from "../../public/backgrounds/dirtBlockDark.png";
// import dirtBlockDarker from "../../public/backgrounds/dirtBlockDarker.png";
import dirtBlockDarkerMid from "../../public/backgrounds/dirtBlockDarkerMid.png";

const ListScreen = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div id={title} className="relative h-[150vh]">
      <Background title={title} />
      <ContentLayer>{children}</ContentLayer>
    </div>
  );
};

const Background = ({ title }: { title: string }) => {
  return (
    <div className="sticky z-0 h-screen top-0 flex flex-col">
      <div
        className="h-[128px]"
        style={{
          backgroundImage: `url(${dirtBlockDark.src})`,
        }}
      >
        <TitleLayer title={title} />
      </div>
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
    <div className="w-full flex justify-center items-end h-[128px] pb-[1rem] text-2xl">
      {capitalizeFirstLetter(title)}
    </div>
  );
};

const ContentLayer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="z-0 absolute top-[128px] h-[calc(100vh-384px)] w-full flex flex-col items-center">
      <div className="h-full w-[80%] flex flex-col justify-center items-center overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default ListScreen;
