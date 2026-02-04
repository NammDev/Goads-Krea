import { Config } from "@remotion/cli/config";

/**
 * Remotion Configuration
 * @see https://www.remotion.dev/docs/config
 */

// Set the entry point for Remotion
Config.setEntryPoint("./src/remotion/index.ts");

// Output settings
Config.setOutputLocation("./public/videos");

// Codec settings for optimal web playback
Config.setCodec("h264");

// Quality settings
Config.setCrf(18); // Lower = higher quality (18-23 recommended)

// Enable concurrency for faster rendering
Config.setConcurrency(4);

// Disable audio (hero video doesn't need audio)
Config.setMuted(true);
