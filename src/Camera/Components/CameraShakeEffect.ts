import { CameraData } from "../Model/CameraData";
import { CameraShakeModel } from "../Model/CameraShakeModel";
import { ICameraEffect } from "./ICameraEffect";

export class CameraShakeEffect implements ICameraEffect {
    declare isEnd: boolean;
    private curTime: number;
    private shakeModel: CameraShakeModel;
    private dir: Laya.Vector3;
    constructor(shakeModel: CameraShakeModel, dir: Laya.Vector3) {
        this.shakeModel = shakeModel;
        this.dir = dir;
        this.curTime = 0;
    }

    ApplyEffect(dt: number, data: CameraData): void {
        if (this.shakeModel.shakeTime < this.curTime) {
            this.isEnd = true;
            return;
        }
        this.curTime += dt;
        let offset = new Laya.Vector3();
        this.dir.scale(
            Math.sin(this.curTime * this.shakeModel.frequence) * this.shakeModel.shakeStrength * (this.shakeModel.shakeTime - this.curTime),
            offset
        );
        data.pos.vadd(offset, data.pos);
    }
}
