module.exports = {
  envId: "cross-env-1ab71b",
  functionRoot: "./cloud/functions",
  functions: [
    {
      name: "basic",
      // 超时时间
      timeout: 5,
      // 环境变量
      envVariables: {},
      runtime: "Nodejs8.9",
      handler: "index.main"
    }
  ]
};
