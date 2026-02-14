
import { BoseSDK } from "./sdk/BoseSDK";

const bose = new BoseSDK();
bose.createAvatar("Genesis");
bose.animate("idle");
