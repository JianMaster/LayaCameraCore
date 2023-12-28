import { EaseType } from "../../Common/EaseType";
const { regClass, property } = Laya;

@regClass()
export class CameraMovementModel {
    @property({ type: Laya.Vector3 })
    offset: Laya.Vector3;
    @property({ type: "number" })
    duration: number;
    @property({ type: EaseType })
    easeType: EaseType;
    @property(Boolean)
    isInherit: boolean = false;
}
