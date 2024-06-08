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
      <Background title={title}>
        <ContentLayer>{children}</ContentLayer>
      </Background>
    </div>
  );
};

const Background = ({ title,children }: { title: string, children: React.ReactNode }) => {
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
        className="flex-grow flex justify-center"
        style={{
          backgroundImage: `url(${dirtBlockDarkerMid.src})`,
        }}
      >
        {children}
      </div>
      <div
        className="h-[128px]"
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
      <div className="h-full overflow-y-auto w-[80%]">
        {children}
      </div>
  );
};

export default ListScreen;
