importPackage(dw.system);

exports.beforeGET = function(scriptCategory, categoryWO) {
    var infoLog = Logger.getLogger("InfoHooks", "customINFO");
    infoLog.info("Se ejecuto el Hooks beforeGET de la categoria: " + scriptCategory + " ");
    return new Status(Status.OK);

}

// exports.modifyGETResponse = function(category) {
//     category = "Hook";
//     var infoLog = Logger.getLogger("InfoHooks", "customINFO");
//     infoLog.info("Se ejecuto el Hooks modifyGETResponse de la categoria: " + category + " ");

//     return new Status(Status.OK);
// }
exports.modifyGETResponse = function(scriptCategory, categoryWO) {
    if (!scriptCategory.online) {
        categoryWO.c_modify_response_data = "modifyResponseData";
    } else {
        categoryWO.c_headerMenuOrientation = "Modificado a vertical"
        categoryWO.c_modify_response_data = "modifyResponseData1";
    }

    return new Status(Status.OK);
}