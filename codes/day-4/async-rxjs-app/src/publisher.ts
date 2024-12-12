import { StorageService } from "./storage";

const service = StorageService.create()
export function publishValue(value: number) {
    service.publish(value)
}
