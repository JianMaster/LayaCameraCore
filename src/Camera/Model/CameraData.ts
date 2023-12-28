export class CameraData implements Laya.IClone {
    pos: Laya.Vector3;
    rot: Laya.Quaternion;
    fov: number;
    constructor() {
        this.pos = new Laya.Vector3();
        this.rot = new Laya.Quaternion();
        this.fov = 0;
    }
    clone(): CameraData {
        let destObject = new CameraData();
        destObject.pos = this.pos.clone();
        destObject.rot = this.rot.clone();
        destObject.fov = this.fov;
        return destObject;
    }
    cloneTo(destObject: CameraData): void {
        destObject.pos = this.pos.clone();
        destObject.rot = this.rot.clone();
        destObject.fov = this.fov;
    }
}
