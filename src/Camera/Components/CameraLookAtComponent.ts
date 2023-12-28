import { CameraData } from "../Model/CameraData";

export class CameraLookAtComponent {
	private defalutRot: Laya.Quaternion;
	private target: Laya.Sprite3D;
	private lagTime: number;
	private curTime: number;
	constructor(defalutRot: Laya.Quaternion, lagTime: number, target?: Laya.Sprite3D) {
		this.defalutRot = new Laya.Quaternion();
		this.target = target;
		this.lagTime = lagTime;
		this.curTime = 0;
	}

	SetTarget(target: Laya.Sprite3D) {
		this.target = target;
	}

	ApplyLookAt(dt: number, data: CameraData) {
		let rot = this.defalutRot;
		if (this.target == null) {
            data.rot = rot;
            return;
		}
		let lookAt = new Laya.Quaternion();
		Laya.Quaternion.forwardLookAt(data.pos, this.target.transform.position, Laya.Vector3.Up, lookAt);
		rot = lookAt;
	}
}
