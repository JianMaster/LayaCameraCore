import { CameraData } from "../Model/CameraData";
import { CameraRotateModel } from "../Model/CameraRotateModel";
const { Vector3, Ease, Quaternion } = Laya;
let _tempRot = new Quaternion();
const RAD = Laya.MathUtils3D.Deg2Rad;

export class CameraRotateComponent {
    private models: CameraRotateModel[];
    private curOffset: Vector3; //弧度
    private _time: number;
    private _index: number;

    SetModel(models: CameraRotateModel[]) {
        this.Reset();
        this.models = models;
    }

    Reset() {
        this.models = null;
        this.curOffset = new Vector3();
        this._time = 0;
        this._index = 0;
    }

    ApplyRotate(dt: number, outData: CameraData) {
        if (this.models == null) {
            return;
        }
        let euler = new Vector3();
        outData.rot.getYawPitchRoll(euler);
        [euler.x, euler.y] = [euler.y, euler.x];
        if (this._index == this.models.length) {
            euler.vadd(this.curOffset, euler);
            Quaternion.createFromYawPitchRoll(euler.y, euler.x, euler.z, _tempRot);
            outData.rot = _tempRot;
            return;
        }

        this._time += dt;
        let model = this.models[this._index];
        let offset = new Vector3();
        model.offset.scale(Ease[model.easeType](Math.min(this._time, model.duration), 0, 1, model.duration), offset);
        offset.scale(RAD, offset);
        this.curOffset.vadd(offset, offset);
        euler.vadd(offset, euler);
        Quaternion.createFromYawPitchRoll(euler.y, euler.x, euler.z, _tempRot);
        outData.rot = _tempRot;

        if (this._time > model.duration) {
            this._time -= model.duration;
            this._index++;
            this.curOffset = offset.clone();
        }
    }
}
