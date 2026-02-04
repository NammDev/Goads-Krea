/**
 * Remotion Entry Point
 * This file is used by Remotion CLI for rendering
 */
import { registerRoot } from "remotion";
import { RemotionRoot } from "./Root";

registerRoot(RemotionRoot);

export { RemotionRoot } from "./Root";
export { HeroVideo } from "./compositions/HeroVideo";
