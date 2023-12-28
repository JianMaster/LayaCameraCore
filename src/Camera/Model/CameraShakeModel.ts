const { regClass, property } = Laya;

@regClass()
export class CameraShakeModel {
    @property(Number)
    shakeTime: number;

    @property(Number)
    shakeStrength: number;

    @property(Number)
    frequence: number;
}
