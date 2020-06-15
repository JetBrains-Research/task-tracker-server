const APP_DIR = require('path').dirname(require.main.filename);

const objectType = {
    MODELS: {
        configPath: `${APP_DIR}/configs/injection-configs/models`,
        filePath: `${APP_DIR}/models`
    },
    DAO: {
        configPath: `${APP_DIR}/configs/injection-configs/daos`,
        filePath: `${APP_DIR}/daos`
    },
    SERVICE: {
        configPath: `${APP_DIR}/configs/injection-configs/services`,
        filePath: `${APP_DIR}/services`
    },
    CONTROLLER: {
        configPath: `${APP_DIR}/configs/injection-configs/controllers`,
        filePath: `${APP_DIR}/controllers`
    },
    ROUTERS: {
        configPath: `${APP_DIR}/configs/injection-configs/routers`,
        filePath: `${APP_DIR}/routers`
    },
    CONFIGURATION: {
        configPath: `${APP_DIR}/configs/injection-configs/configurations`,
        filePath: `${APP_DIR}/configs`
    },
    CONST_FILE: {
        configPath: `${APP_DIR}/configs/injection-configs/consts`,
        filePath: `${APP_DIR}/consts`
    }
};

const injectRouters = (app, injector, agent) => {
    const routersConfig = require(objectType.ROUTERS.configPath);
    for (const router of routersConfig)
        require(`${objectType.ROUTERS.filePath}/${router.path}`)(app, injector, agent);
};

const injectConfiguration = (configurationName, ...params) => {
    const configurationsConfig = require(objectType.CONFIGURATION.configPath);
    for (const configuration of configurationsConfig)
        if (configuration.name === configurationName)
            return require(`${objectType.CONFIGURATION.filePath}/${configuration.path}`)(params);
};

const injectObject = (currentObjectType, objectName) => {
    switch(currentObjectType){
        case objectType.MODELS: {
            const modelsConfig = require(objectType.MODELS.configPath);
            for (const model of modelsConfig)
                require(`${objectType.MODELS.filePath}/${model.path}`);
            return
        }
        default: {
            const config = require(currentObjectType.configPath);
            for (const item of config)
                if (item.name === objectName)
                    return require(`${currentObjectType.filePath}/${item.path}`);
        }
    }

    const modelsConfig = require(`${APP_DIR}/configs/injection-configs/models`);
    for (const model of modelsConfig)
        require(`${APP_DIR}/models/${model.path}`);
};

module.exports = {
    objectType,

    injectObject,
    injectRouters,
    injectConfiguration,
};
