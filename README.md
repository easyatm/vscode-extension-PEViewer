# PEViewer - PE 文件查看器 / PE File Viewer

<details>
<summary>中文说明</summary>

## 中文说明

### 功能特性

- 📁 **结构化视图**：以树形结构展示 PE 文件的各个组成部分。
- 🔍 **详细信息**：查看 DOS 头、NT 头、可选头、节表等详细数据。
- 📊 **多格式显示**：同时显示十进制、十六进制和二进制格式。
- 📦 **导入/导出表**：查看 DLL 导入函数和导出函数列表。
- 🎨 **资源查看**：查看 PE 文件中的资源节信息和常见资源类型。
- 🔧 **函数名解码**：自动解码 MSVC / Itanium / Rust 符号名称。
- 💻 **VS Code 集成**：完美融入 VS Code 主题和界面风格。
- 📏 **支持多种格式**：支持 `.exe`、`.dll`、`.ocx`、`.sys`、`.scr`、`.drv`、`.cpl`、`.node`。

### 使用方法

1. 安装此扩展。
2. 在 VS Code 中打开 PE 文件，例如 `.exe` 或 `.dll`。
3. 在资源管理器中右键点击文件，选择 **`使用 PE查看器 打开`**。
4. 在左侧树形视图中点击各个节点查看详细信息。

> **提示**：`使用 PE查看器 打开` 菜单仅会在受支持的 PE 文件类型上显示。

### 支持的文件类型

- `.exe` - 可执行文件
- `.dll` - 动态链接库
- `.ocx` - ActiveX 控件
- `.sys` - 系统驱动
- `.scr` - 屏幕保护程序
- `.drv` - 驱动程序
- `.cpl` - 控制面板程序
- `.node` - Node.js 原生模块

### 可查看的信息

#### DOS 头部

- 魔数 (`e_magic`)：MZ 签名
- NT 头偏移 (`e_lfanew`)：NT 头在文件中的位置

#### NT 头部

- PE 签名
- 机器类型：x86、x64 等
- 节数量
- 时间戳
- 特性标志

#### 可选头部

- 魔数：PE32 或 PE32+
- 入口点地址
- 映像基址
- 节对齐 / 文件对齐
- 映像大小
- 子系统类型

#### 节表

- 节名称（`.text`、`.data`、`.rdata` 等）
- 虚拟地址和虚拟大小
- 原始数据指针和大小
- 特性标志

#### 导入 / 导出表

- 导入的 DLL 列表
- 导入的函数名称或序号
- 导出的函数列表（如果有）
- 自动解码 C++ 函数名

#### 资源

- 资源节（`.rsrc`）基本信息
- 常见资源类型说明：
  - 图标 (`RT_ICON` / `RT_GROUP_ICON`)
  - 位图 (`RT_BITMAP`)
  - 光标 (`RT_CURSOR`)
  - 对话框 (`RT_DIALOG`)
  - 字符串表 (`RT_STRING`)
  - 菜单 (`RT_MENU`)
  - 版本信息 (`RT_VERSION`)
  - 清单文件 (`RT_MANIFEST`)

### 技术栈

- **TypeScript** - 扩展核心代码
- **pe-parser** - PE 文件解析库
- **Webpack** - 打包工具

### 开发

```bash
# 安装依赖
npm install

# 编译
npm run compile

# 监视模式
npm run watch

# 打包 VSIX
npm run package-vsix

# 发布到 VS Code 扩展市场
npm run publish-vscode
```

运行扩展时，按 `F5` 启动扩展开发主机。

### 安装

在 VS Code 扩展市场中搜索 **PEViewer** 并安装。

### 多语言支持

支持中文和英文界面，自动适配 VS Code 语言设置。

### 版本历史

#### 版本 0.0.1

- ✨ 初始版本
- 📁 树形结构显示 PE 文件各部分
- 🔍 详细信息面板
- 📊 支持导入 / 导出表解析
- 🎨 VS Code 主题集成

</details>

A VS Code extension for viewing and analyzing Windows PE (Portable Executable) file structures.  

![PEViewer Screenshot](https://raw.githubusercontent.com/easyatm/vscode-extension-PEViewer/main/media/ScreenShot_2025-12-07_010545_842.png)

## English

### Features

- 📁 **Structured View**: Display PE file components in a tree structure.
- 🔍 **Detailed Information**: View DOS header, NT header, optional header, and section table details.
- 📊 **Multi-format Display**: Show decimal, hexadecimal, and binary formats simultaneously.
- 📦 **Import/Export Tables**: View DLL import functions and export function lists.
- 🎨 **Resource Viewer**: View PE resource section information and common resource types.
- 🔧 **Function Name Decoding**: Automatically decode MSVC / Itanium / Rust symbol names.
- 💻 **VS Code Integration**: Integrates well with VS Code themes and UI.
- 📏 **Multiple Format Support**: Supports `.exe`, `.dll`, `.ocx`, `.sys`, `.scr`, `.drv`, `.cpl`, and `.node`.

### Usage

1. Install this extension.
2. Open a PE file in VS Code, such as `.exe` or `.dll`.
3. Right-click the file in Explorer and choose **`Open with PEViewer`**.
4. Click nodes in the left tree view to inspect detailed information.

> **Tip**: The **`Open with PEViewer`** menu is shown only for supported PE file types.

### Supported File Types

- `.exe` - Executable files
- `.dll` - Dynamic Link Libraries
- `.ocx` - ActiveX Controls
- `.sys` - System drivers
- `.scr` - Screen savers
- `.drv` - Driver programs
- `.cpl` - Control Panel programs
- `.node` - Node.js native modules

### Information You Can View

#### DOS Header

- Magic number (`e_magic`): MZ signature
- NT header offset (`e_lfanew`): position of the NT header in the file

#### NT Header

- PE signature
- Machine type: x86, x64, and more
- Number of sections
- Timestamp
- Characteristic flags

#### Optional Header

- Magic: PE32 or PE32+
- Entry point address
- Image base
- Section alignment / file alignment
- Image size
- Subsystem type

#### Section Table

- Section names such as `.text`, `.data`, and `.rdata`
- Virtual address and virtual size
- Raw data pointer and size
- Characteristic flags

#### Import / Export Tables

- Imported DLL list
- Imported function names or ordinals
- Exported function list, when available
- Automatic C++ symbol name demangling

#### Resources

- Basic information for the resource section (`.rsrc`)
- Common resource types:
  - Icons (`RT_ICON` / `RT_GROUP_ICON`)
  - Bitmaps (`RT_BITMAP`)
  - Cursors (`RT_CURSOR`)
  - Dialogs (`RT_DIALOG`)
  - String tables (`RT_STRING`)
  - Menus (`RT_MENU`)
  - Version info (`RT_VERSION`)
  - Manifest files (`RT_MANIFEST`)

### Tech Stack

- **TypeScript** - Core extension code
- **pe-parser** - PE parsing library
- **Webpack** - Bundling tool

### Development

```bash
npm install
npm run compile
npm run watch
npm run package-vsix
npm run publish-vscode
```

Press `F5` to launch the Extension Development Host.

### Installation

Search for **PEViewer** in the VS Code Marketplace and install it.

### Multi-language Support

Supports both Chinese and English, and adapts automatically to the VS Code display language.

### Version History

#### Version 0.0.1

- ✨ Initial release
- 📁 Tree view for PE file structures
- 🔍 Detailed information panel
- 📊 Import / export table parsing support
- 🎨 VS Code theme integration

## License

MIT
