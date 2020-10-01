import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    /**
     * Return a simple string
     */
    public getHello(): string {
        return 'Hello World!';
    }
}
