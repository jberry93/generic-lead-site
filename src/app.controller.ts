import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * Main controller for entire application
 */
@Controller()
export class AppController {
    public constructor(private readonly appService: AppService) {}

    /**
     * Return string from service
     */
    @Get()
    public getHello(): string {
        return this.appService.getHello();
    }
}
