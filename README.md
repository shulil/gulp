gulp
============

前端代码规范检查，js、css压缩

----------

## 安装 ##

1. 安装[Node.js](http://nodejs.org/download/),安装后可能需要重启电脑
2. 将安装源设置为中国地区，否则会很慢。命令行运行 `npm config set registry http://registry.cnpmjs.org/ --global`
3. 运行`npm install`

## gulp任务 ##

命令行下运行 `gulp 任务名`，即可运行以下任务

- `default` 文件编译任务(默认任务，任务名可忽略不写),编译后监控js和css变化并自动压缩
- `script` 压缩js
- `css` 压缩css

## 使用说明 ##

1. 项目根目录运行命令`gulp`
2. 修改文件（`./script/*.js`、`./css/*.css`)，会自动编译


## 配置约定 ##

- js源文件文件请放在`/script/`目录下，输出目录为`build/script/`
- cssless源文件文件请放在`/css/`目录下，输出目录为`build/css/`
