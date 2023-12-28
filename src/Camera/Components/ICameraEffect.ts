import { CameraData } from "../Model/CameraData";

export interface ICameraEffect {
    isEnd: boolean;
    ApplyEffect(dt: number, data: CameraData): void;
}
