/**
 * Plugin: Demo Adapter
 * ID: demo
 * Version: 1.0.0
 */

// 1. 定义配置项 (Form Schema)
// 前端根据这里生成输入框
const meta = {
    config_schema: [
        { key: "url", label: "面板地址 (URL)", type: "text", placeholder: "http://example.com", required: true },
        { key: "token", label: "API Token", type: "password", required: false }
    ]
};

function fetch(config) {
    console.log("Starting fetch in demo.js...");

    // Return standardized JSON
    return JSON.stringify({
        source: "Demo",
        timestamp: new Date().toISOString(),
        servers: [
            {
                name: "Server 1",
                cpu: 45,
                memory: 60,
                status: "online"
            },
            {
                name: "Server 2",
                cpu: 12,
                memory: 30,
                status: "offline"
            }
        ]
    });
}
