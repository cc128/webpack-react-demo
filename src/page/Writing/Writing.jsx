import writing from "./Writing.scss";

import React from "react";

export default class Writing extends React.Component {
  setate = {
    editor: ""
  };
  componentDidMount() {
    let E = window.wangEditor;
    let editor = new E("#editor");
    editor.customConfig.zIndex = 1;
    // 隐藏“网络图片”tab
    editor.customConfig.showLinkImg = false;
    editor.customConfig.menus = [
      "head", // 标题
      "bold", // 粗体
      "fontSize", // 字号
      "fontName", // 字体
      "italic", // 斜体
      "underline", // 下划线
      "strikeThrough", // 删除线
      "foreColor", // 文字颜色
      "backColor", // 背景颜色
      "link", // 插入链接
      "list", // 列表
      "justify", // 对齐方式
      "quote", // 引用
      "emoticon", // 表情
      "image", // 插入图片
      "table", // 表格
      "video", // 插入视频
      "code", // 插入代码
      "undo", // 撤销
      "redo" // 重复
    ];
    this.setState(
      {
        editor: editor
      },
      function() {
        editor.customConfig.uploadImgShowBase64 = true;
        this.state.editor.create();
      }
    );
  }
  render() {
    return (
      <div>
        <div id="editor" />
      </div>
    );
  }
}
