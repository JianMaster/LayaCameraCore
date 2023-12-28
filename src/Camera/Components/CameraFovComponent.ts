import { CameraData } from "../Model/CameraData";
import { CameraFovModel } from "../Model/CameraFovModel";

export class CameraFovComponent {
    private fovModel: CameraFovModel[];
    private curTime: number = 0;
    private index: number = 0;
    private savedFov = 0;

    SetModel(model: CameraFovModel[]) {
        this.Reset();
        this.fovModel = model;
    }

    Reset() {
        this.fovModel = null;
        this.curTime = 0;
        this.index = 0;
        this.savedFov = 0;
    }

    ApplyFov(dt: number, data: CameraData) {
        if (this.fovModel == null) {
            return;
        }
        if (this.index == this.fovModel.length) {
            this.Reset();
            return;
        }
        if (this.savedFov == 0) {
            this.savedFov = data.fov;
        }

        let model = this.fovModel[this.index];
        this.curTime += dt;
        data.fov = this.savedFov + Laya.Ease[model.easeType](Math.min(this.curTime, model.duration), 0, model.offset, model.duration);
        if (this.curTime >= model.duration) {
            this.index++;
            this.savedFov = data.fov;
        }
    }
}
