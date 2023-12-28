import { CameraData } from "../Model/CameraData";

export class CameraFollowComponent {
    private curTime: number;
    private offset: Laya.Vector3;
    private lagTime: number;
    private targetPos: Laya.Vector3;
    private startPos: Laya.Vector3;
    private hasMove: boolean;
    constructor(offset: Laya.Vector3, lagTime: number) {
        this.curTime = 0;
        this.offset = offset;
        this.targetPos = new Laya.Vector3();
        this.startPos = new Laya.Vector3();
        this.lagTime = lagTime;
        this.hasMove = false;
    }

    Move(vec3: Laya.Vector3) {
        this.hasMove = true;
        this.offset.vadd(vec3, this.offset);
    }

    ApplyFollow(dt: number, curPos: Laya.Vector3, target: Laya.Vector3, outData: CameraData) {
        if (this.lagTime == 0) {
            target.vadd(this.offset, outData.pos);
            return;
        }
        if (!this.targetPos.equal(target) || this.hasMove) {
            target.cloneTo(this.targetPos);
            curPos.cloneTo(this.startPos);
            this.curTime = 0;
            this.hasMove = false;
        }
        this.curTime += dt;
        this.curTime = Math.min(this.curTime, this.lagTime);

        let intensity = Laya.Ease.quadOut(this.curTime, 0, 1, this.lagTime);
        let newOffset = new Laya.Vector3();
        target.vadd(this.offset, newOffset).vsub(this.startPos, newOffset);
        newOffset.scale(intensity, newOffset);
        this.startPos.vadd(newOffset, outData.pos);
    }
}
