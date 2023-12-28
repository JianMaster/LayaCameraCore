import { FovModel } from "../Battle/Skill/Model/FovModel";
import { CameraData } from "./Model/CameraData";
import { CameraSetter } from "./CameraSetter";
import { CameraFollowComponent } from "./Components/CameraFollowComponent";
import { CameraShakeEffect } from "./Components/CameraShakeEffect";
import { CameraFovComponent } from "./Components/CameraFovComponent";
import { CameraFovModel } from "./Model/CameraFovModel";
import { CameraMovementComponent } from "./Components/CameraMovementComponent";
import { CameraMovementModel } from "./Model/CameraMovementModel";
import { CameraRotateModel } from "./Model/CameraRotateModel";
import { CameraRotateComponent } from "./Components/CameraRotateComponent";
const { regClass, property, Sprite3D, Camera, Vector3, Quaternion } = Laya;
const RAD = Laya.MathUtils3D.Deg2Rad;

@regClass()
export class CameraCore extends Laya.Script {
    @property(Camera)
    private mainCamera: Camera;
    get MainCamera(): Sprite3D | any {
        return this.mainCamera ?? { active: false };
    }
    @property(Sprite3D)
    private backgroundCam: Sprite3D;
    get BackgroundCam(): Sprite3D | any {
        return this.backgroundCam ?? { active: false };
    }
    @property(Sprite3D)
    private target: Sprite3D;
    SetTarget(value: Sprite3D) {
        this.target = value;
    }
    @property(Number)
    private lagTime: number;
    @property(Vector3)
    private offset: Vector3;
    @property(Vector3)
    private rot: Vector3;

    @property(FovModel)
    private onAirFOV: FovModel;

    @property(FovModel)
    private normalFOV: FovModel;

    @property(Number)
    private noControllTime: number = 0;
    @property(Number)
    private keepDuration: number = 0;

    private preData: CameraData;
    private afterData: CameraData;
    private followCom: CameraFollowComponent;
    private shakeEffect: CameraShakeEffect;
    private fovCom: CameraFovComponent;
    private movementCom: CameraMovementComponent;
    private rotCom: CameraRotateComponent;

    onAir: boolean = false;

    onAwake() {
        CameraSetter.Instance.Init(this);
        this.preData = new CameraData();
        this.afterData = new CameraData();
        this.lagTime = this.lagTime ? this.lagTime : 0;
        if (this.mainCamera) {
            let outRot = new Quaternion();
            this.rot.scale(RAD, this.rot);
            Quaternion.createFromYawPitchRoll(this.rot.y, this.rot.x, this.rot.z, outRot);
            this.preData.rot = outRot;
            this.preData.fov = this.mainCamera.fieldOfView;
        }
        this.followCom = new CameraFollowComponent(this.offset, this.lagTime);
        this.fovCom = new CameraFovComponent();
        this.movementCom = new CameraMovementComponent();
        this.rotCom = new CameraRotateComponent();
    }

    onUpdate() {
        if (this.mainCamera == null || this.target == null) {
            return;
        }
        let dt = Laya.timer.delta * 0.001;
        //前置数据
        this.followCom.ApplyFollow(dt, this.preData.pos, this.target.transform.position, this.preData);
        this.fovCom.ApplyFov(dt, this.preData);
        this.preData.cloneTo(this.afterData);
        //后处理数据
        this.ApplyShake();
        this.movementCom.ApplyMove(dt, this.afterData);
        this.rotCom.ApplyRotate(dt, this.afterData);
        // 应用到相机
        this.ApplyDataToCamera();
    }

    Move(vec3: Vector3) {
        this.followCom.Move(vec3);
    }

    SetFov(value: number) {
        this.mainCamera.fieldOfView = value;
    }

    GetFov() {
        return this.mainCamera.fieldOfView;
    }

    SetEaseFov(cameraFovModels: CameraFovModel[]) {
        this.fovCom.SetModel(cameraFovModels);
    }

    //设置浮空状态下FOV
    SetOnAirFov() {
        if (this.onAirFOV == null) {
            return;
        }
        this.SetEaseFov([{ offset: this.onAirFOV.value - this.GetFov(), duration: this.onAirFOV.enterTimeSec, easeType: this.onAirFOV.easeType }]);
    }

    //设置普通状态下FOV
    SetNormalFov() {
        if (this.normalFOV == null) {
            return;
        }
        this.SetEaseFov([{ offset: this.normalFOV.value - this.GetFov(), duration: this.normalFOV.enterTimeSec, easeType: this.normalFOV.easeType }]);
    }

    SetShakeEffect(shakeEffect: CameraShakeEffect) {
        this.shakeEffect = shakeEffect;
    }

    SetMovementModel(cameraMovementModels: CameraMovementModel[]) {
        this.movementCom.SetModel(cameraMovementModels);
    }

    SetRotateModel(cameraRotateModels: CameraRotateModel[]) {
        this.rotCom.SetModel(cameraRotateModels);
    }

    [key: string]: any;
    GetField(name: string) {
        return this[name];
    }

    private ApplyShake() {
        if (this.shakeEffect) {
            if (this.shakeEffect.isEnd) {
                this.shakeEffect = null;
                return;
            }
            this.shakeEffect.ApplyEffect(Laya.timer.delta * 0.001, this.afterData);
        }
    }

    private ApplyDataToCamera() {
        this.mainCamera.transform.position = this.afterData.pos;
        this.mainCamera.transform.rotation = this.afterData.rot;
        this.mainCamera.fieldOfView = this.afterData.fov;
    }
}
