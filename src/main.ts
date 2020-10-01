import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * Bootstrap the entire application and start server
 */
async function bootstrap(): Promise<void> {
    const app = await NestFactory.create(AppModule);
    const port = process.env.SERVER_PORT || 3000;
    await app.listen(port);
}

bootstrap();
