import { CameraData } from "../Model/CameraData";
import { CameraMovementModel } from "../Model/CameraMovementModel";
type Vector3 = Laya.Vector3;
const { Vector3, Ease } = Laya;

export class CameraMovementComponent {
    private models: CameraMovementModel[];
    private curOffset: Vector3 = new Vector3();
    private _time: number;
    private _index: number;

    SetModel(models: CameraMovementModel[]) {
        this.Reset();
        this.models = models;
    }

    Reset() {
        this.models = null;
        this._time = 0;
        this._index = 0;
    }

    ApplyMove(dt: number, outData: CameraData) {
        if (this.models == null) {
            return;
        }
        if (this._index == this.models.length) {
            outData.pos.vadd(this.curOffset, outData.pos);
            return;
        }

        this._time += dt;
        let model = this.models[this._index];
        let offset = model.offset.clone();
        offset.scale(Ease[model.easeType](Math.min(this._time, model.duration), 0, 1, model.duration), offset);
        if (!model.isInherit) {
            this.curOffset = Vector3.ZERO;
        }
        this.curOffset.vadd(offset, offset);
        outData.pos.vadd(offset, outData.pos);

        if (this._time > model.duration) {
            this._time -= model.duration;
            this._index++;
            this.curOffset = offset;
        }
    }
}
