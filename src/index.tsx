import Manager from 'cloudstudio-sdk/Manager';
import * as React from 'react';

import { actions, PluginContext, appRegistry } from 'cloudstudio-extension';

const context = new PluginContext({});

// 插件唯一 key
// 一定要确保代码中 pluginKey 的唯一性，推荐使用「开发者邮箱-昵称-插件名」的格式
const pluginKey = 'hello-widget-plugin';

const { position, inject, unregister } = context.injectComponent;

class Hello extends React.Component {
    handleClick = () => {
        actions.notification({ message: 'Hello CloudStudio!', notifyType: 'INFO' });
    }
    render() {
        return (
            <button onClick={this.handleClick}>sayHello</button>
        )
    }
}

class MyManager extends Manager {
    pluginWillMount() {
        // 状态栏注入组件
        inject(
            position.STATUSBAR.WIDGET,
            {
                key: pluginKey,
            },
            extension => {
                return React.createElement(extension.app);
            }
        )
    }

    pluginWillUnmount() {
        // 卸载组件
        unregister({ key: pluginKey, app: Hello, position: position.STATUSBAR.WIDGET });
    }
}

appRegistry([{
    Manager: MyManager,
    key: pluginKey,
    app: Hello,
}]);

