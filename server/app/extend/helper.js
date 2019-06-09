module.exports = {
    getToken() {
        function S4() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    },
    getSuccessResponse(data) {
        data = JSON.parse(JSON.stringify(data));
        const defaultConfig = {
            success: true,
            msg:'成功'
        };
        return Object.assign({}, defaultConfig, data);
    },
    getFailedResponse(data) {
        data = JSON.parse(JSON.stringify(data));
        const defaultConfig = {
            success: false,
            msg:'失败'
        };
        return Object.assign({}, defaultConfig, data);
    }
}