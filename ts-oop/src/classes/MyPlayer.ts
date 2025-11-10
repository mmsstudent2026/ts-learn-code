import type { OnlinePlayer } from "./OnlinePlayer";
import Player from "./Player";
import type { VideoPlayer } from "./VideoPlayer";

class MyPlayer extends Player implements VideoPlayer, OnlinePlayer {
  public play() {
    console.log("load media");
    console.log("show ui");
    console.log("animate art photo");
  }

  public pause() {
    console.log("stop media");
    console.log("stop animate art photo");
  }

  public next() {
    console.log("load next index media");
    this.play();
  }

  public prev() {
    console.log("load -1 index media");
    this.play();
  }

  public takeSs(): void {
      
  }

  public takeRecord(): void {
      
  }

  public load(url: string): void {
      
  }

  public download(url: string): void {
      
  }
}

export default MyPlayer;
