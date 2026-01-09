/**
 * Background: A media player handles different media types like audio and video files. It has a MediaFile base class with common methods (play, pause, stop), while AudioFile and VideoFile subclasses may have additional needs (e.g., subtitles for video). The player should be able to manage any file type seamlessly without extra conditions.

Question: How would you structure the MediaFile, AudioFile, and VideoFile classes so the player works consistently with all file types?
 */

interface IMediaFile {
  play(): void;
  pause(): void;
  stop(): void;
  getName(): string;
  showSubtitles?(): void;
}

abstract class MediaFile implements IMediaFile {
  protected name: string;
  protected isPlaying: boolean = false;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  play(): void {
    if (!this.isPlaying) {
      console.log(`Playing ${this.getMediaType()} file: ${this.name}`);
      this.isPlaying = true;
    } else {
      console.log(`${this.name} is already playing.`);
    }
  }

  pause(): void {
    if (this.isPlaying) {
      console.log(`Pausing ${this.getMediaType()} file: ${this.name}`);
      this.isPlaying = false;
    } else {
      console.log(`${this.name} is not playing.`);
    }
  }

  stop(): void {
    if (this.isPlaying) {
      console.log(`Stopping ${this.getMediaType()} file: ${this.name}`);
      this.isPlaying = false;
    } else {
      console.log(`${this.name} is already stopped.`);
    }
  }

  showSubtitles(): void {}

  protected abstract getMediaType(): string;
}

class AudioFile extends MediaFile {
  constructor(name: string) {
    super(name);
  }

  protected getMediaType(): string {
    return "audio";
  }
}

class VideoFile extends MediaFile {
  constructor(name: string) {
    super(name);
  }

  protected getMediaType(): string {
    return "video";
  }

  showSubtitles(): void {
    console.log(`Showing subtitles for video: ${this.name}`);
  }
}

class MediaPlayer {
  private currentFile: IMediaFile | null = null;

  loadFile(file: IMediaFile): void {
    this.currentFile = file;
    console.log(`Loaded ${file.getName()}`);
  }

  play(): void {
    if (this.currentFile) {
      this.currentFile.play();
    }
  }

  pause(): void {
    if (this.currentFile) {
      this.currentFile.pause();
    }
  }

  stop(): void {
    if (this.currentFile) {
      this.currentFile.stop();
    }
  }

  showSubtitles(): void {
    if (this.currentFile && this.currentFile.showSubtitles) {
      this.currentFile.showSubtitles();
    }
  }
}

const player = new MediaPlayer();

const audio = new AudioFile("song.mp3");
player.loadFile(audio);
player.play();
player.pause();
player.stop();
player.showSubtitles();

const video = new VideoFile("movie.mp4");
player.loadFile(video);
player.play();
player.showSubtitles();
player.stop();
