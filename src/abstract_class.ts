enum Mode {
  normal = "normal",
  panorama = "panorama",
}

abstract class TakePhoto {
  constructor(
    public cameraMode: Mode,
    public shutterSpeed: number,
    public burstMode: boolean
  ) {}

  abstract processedPhoto(): any;
}

abstract class TakeVideo {
  constructor(public videoMode: Mode, public isPause: boolean) {}

  abstract processedVideo(): any;
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: Mode,
    public shutterSpeed: number,
    public burstMode: boolean,
    public isReel: boolean
  ) {
    super(cameraMode, shutterSpeed, burstMode);
  }

  processedPhoto(): any {
    return "photo is processed";
  }
}

const firstPhoto = new Instagram(Mode.normal, 2, true, false);
console.log(firstPhoto);
console.log(firstPhoto.processedPhoto());
