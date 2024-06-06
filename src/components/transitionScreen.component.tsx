const TransitionScreen = ({
  imgUrl,
  children,
}: {
  imgUrl: String;
  children: React.ReactNode;
}) => {
  return (
    <div className="relative h-[150vh]">
      <BackgroundImage imgUrl={imgUrl} />
      <ContentLayer>{children}</ContentLayer>
    </div>
  );
};

const BackgroundImage = ({ imgUrl }: { imgUrl: String }) => {
  return (
    <div
      className="sticky z-0 top-0 h-screen"
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    />
  );
};

const ContentLayer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="absolute top-0 h-screen flex flex-col justify-center items-center w-full">
      {children}
      {/* <h1 className="text-4xl">{text}</h1> */}
    </div>
  );
};

export default TransitionScreen;
