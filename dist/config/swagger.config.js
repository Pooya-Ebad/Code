"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerConfigInit = swaggerConfigInit;
const swagger_1 = require("@nestjs/swagger");
function swaggerConfigInit(app) {
    const document = new swagger_1.DocumentBuilder()
        .setTitle("SnappFood")
        .setDescription("snapp-food back-end")
        .addBearerAuth(SwaggerAuthConfig(), "Authorization")
        .setVersion("0.0.1")
        .build();
    const swaggerDocument = swagger_1.SwaggerModule.createDocument(app, document);
    swagger_1.SwaggerModule.setup("/swagger", app, swaggerDocument);
}
function SwaggerAuthConfig() {
    return {
        type: "http",
        bearerFormat: "jwt",
        in: "header",
        scheme: "bearer"
    };
}
//# sourceMappingURL=swagger.config.js.map