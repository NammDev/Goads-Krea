import { Composition } from "remotion";
import { HeroVideo } from "./compositions/HeroVideo";

/**
 * Remotion Root - Registers all video compositions
 * Used by Remotion CLI for rendering and studio preview
 */
export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="HeroVideo"
        component={HeroVideo}
        durationInFrames={720} // 24 seconds at 30fps
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
