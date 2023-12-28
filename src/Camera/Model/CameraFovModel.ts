import { EaseType } from "../../Common/EaseType";
const { regClass, property } = Laya;

@regClass()
export class CameraFovModel {
    @property({ type: "number", nullable: false })
    offset: number;
    @property({ type: "number", nullable: false })
    duration: number;
    @property({ type: EaseType, nullable: false })
    easeType: EaseType;
}
