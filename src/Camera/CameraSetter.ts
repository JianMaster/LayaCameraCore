import { Singleton } from "../Common/Singleton";
import { CameraCore } from "./CameraCore";
import { CameraShakeEffect } from "./Components/CameraShakeEffect";
import { CameraFovModel } from "./Model/CameraFovModel";
import { CameraMovementModel } from "./Model/CameraMovementModel";
import { CameraRotateModel } from "./Model/CameraRotateModel";
import { CameraShakeModel } from "./Model/CameraShakeModel";

export class CameraSetter extends Singleton<CameraSetter>() {
    private cameraCore: CameraCore;
    Init(cameraCore: CameraCore) {
        this.cameraCore = cameraCore;
    }

    EnterGame(role: Laya.Sprite3D) {
        this.cameraCore.BackgroundCam.active = true;
        this.cameraCore.MainCamera.active = true;
        this.cameraCore.SetTarget(role);
    }

    /**
     * 设置震屏
     * @param shakeTime 震动时间
     * @param shakeStrength 震动强度
     * @param frequence 震动频率
     * @param shakeDir? 震动方向，默认随机方向
     */
    SetShakeEffect(shakeModel: CameraShakeModel, shakeDir?: Laya.Vector2) {
        if (shakeDir == null) {
            shakeDir = new Laya.Vector2(Math.random() * 2 - 1, Math.random() * 2 - 1);
        }
        let dir = new Laya.Vector3(shakeDir.x, shakeDir.y, 0);
        dir.normalize();
        Laya.Vector3.transformQuat(dir, this.cameraCore.MainCamera.transform.rotation, dir);
        this.cameraCore.SetShakeEffect(new CameraShakeEffect(shakeModel, dir));
    }

    Move(vec3: Vector3) {
        this.cameraCore.Move(vec3);
    }

    SetFov(value: number) {
        this.cameraCore.SetFov(value);
    }

    SetEaseFov(cameraFovModels: CameraFovModel[]) {
        this.cameraCore.SetEaseFov(cameraFovModels);
    }

    SetOnAirFov() {
        this.cameraCore.SetOnAirFov();
    }

    SetNormalFov() {
        this.cameraCore.SetNormalFov();
    }

    SetMovementModel(cameraMovementModels: CameraMovementModel[]) {
        this.cameraCore.SetMovementModel(cameraMovementModels);
    }

    SetRotateModel(cameraRotateModels: CameraRotateModel[]) {
        this.cameraCore.SetRotateModel(cameraRotateModels);
    }

    SetTarget(target: Laya.Sprite3D): void {
        this.cameraCore.SetTarget(target);
    }

    GetField<T>(name: string): T {
        return this.cameraCore.GetField(name);
    }
}
