import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import { SecuritySchemeObject } from "@nestjs/swagger/dist/interfaces/open-api-spec.interface";

export function swaggerConfigInit(app : INestApplication) : void {
    const document = new DocumentBuilder()
    .setTitle("SnappFood")
    .setDescription("snapp-food back-end")
    .addBearerAuth(SwaggerAuthConfig(), "Authorization")
    .setVersion("0.0.1")
    .build()
    const swaggerDocument = SwaggerModule.createDocument(app, document)
    SwaggerModule.setup("/swagger", app , swaggerDocument)
}
function SwaggerAuthConfig() : SecuritySchemeObject{
    return {
        type : "http",
        bearerFormat : "jwt",
        in : "header",
        scheme : "bearer"
    }
} 