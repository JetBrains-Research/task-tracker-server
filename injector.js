const APP_DIR = require("path").dirname(require.main.filename);

const inject_models = () => {
    const models_config = require(`${APP_DIR}/configs/injection-configs/models`);
    for (const model of models_config)
        require(`${APP_DIR}/models/${model.path}`);
};

const inject_dao = (dao_name) => {
    const daos_config = require(`${APP_DIR}/configs/injection-configs/daos`);
    for (const dao of daos_config)
        if (dao.name === dao_name)
            return require(`${APP_DIR}/daos/${dao.path}`);
};

const inject_service = (service_name) => {
    const service_config = require(`${APP_DIR}/configs/injection-configs/services`);
    for (const service of service_config)
        if (service.name === service_name)
            return require(`${APP_DIR}/services/${service.path}`);
};

const inject_controller = (controller_name) => {
    const controllers_config = require(`${APP_DIR}/configs/injection-configs/controllers`);
    for (const controller of controllers_config)
        if (controller.name === controller_name)
            return require(`${APP_DIR}/controllers/${controller.path}`);
};

const inject_routers = (app, injector, agent) => {
    const routers_config = require(`${APP_DIR}/configs/injection-configs/routers`);
    for (const router of routers_config)
        require(`${APP_DIR}/routers/${router.path}`)(app, injector, agent);
};

const inject_configuration = (configuration_name, ...params) => {
    const configurations_config = require(`${APP_DIR}/configs/injection-configs/configurations`);
    for (const configuration of configurations_config)
        if (configuration.name === configuration_name)
            return require(`${APP_DIR}/configs/${configuration.path}`)(params);
};

const inject_const_file = (const_file_name) => {
    const consts_config = require(`${APP_DIR}/configs/injection-configs/consts`);
    for (const const_file of consts_config)
        if (const_file.name === const_file_name)
            return require(`${APP_DIR}/consts/${const_file.path}`);
};

module.exports = {
    inject_models,
    inject_dao,
    inject_service,
    inject_controller,
    inject_routers,
    inject_configuration,
    inject_const_file
};
