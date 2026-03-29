// 'vscode' 模块包含 VS Code 扩展性 API
// '在下面的代码中导入模块并使用别名 vscode 引用它
import * as vscode from 'vscode';
import { PEEditorProvider } from './peViewer';

// 当扩展被激活时调用此方法
// 扩展在第一次执行命令时被激活
export function activate(context: vscode.ExtensionContext) {

	// 使用控制台输出诊断信息（console.log）和错误（console.error）
	// 此行代码将在扩展激活时仅执行一次
	console.log('恭喜，你的扩展 "PEViewer" 现在已激活！');

	// 注册我们的自定义编辑器提供者
	context.subscriptions.push(PEEditorProvider.register(context));

	// 注册打开文件的命令
	const openWithPEViewerCommand = vscode.commands.registerCommand('peviewer.openWithPEViewer', async (uri?: vscode.Uri) => {
		if (!uri) {
			// 如果没有URI，从活动编辑器获取
			const activeEditor = vscode.window.activeTextEditor;
			if (activeEditor) {
				uri = activeEditor.document.uri;
			} else {
				// 让用户选择文件
				const fileUri = await vscode.window.showOpenDialog({
					canSelectFiles: true,
					canSelectFolders: false,
					canSelectMany: false,
					openLabel: 'Open with PEViewer'
				});
				if (fileUri && fileUri[0]) {
					uri = fileUri[0];
				}
			}
		}

		if (uri) {
			// 使用自定义编辑器打开文件
			await vscode.commands.executeCommand('vscode.openWith', uri, 'peviewer.peViewer');
		}
	});

	context.subscriptions.push(openWithPEViewerCommand);

	// 命令已在 package.json 文件中定义
	// 现在使用 registerCommand 提供命令的实现
	// commandId 参数必须与 package.json 中的命令字段匹配
	const disposable = vscode.commands.registerCommand('peviewer.helloWorld', () => {
		// 此代码将在每次执行命令时执行
		// 向用户显示消息框
		vscode.window.showInformationMessage('来自 PEViewer 的 Hello World！');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
