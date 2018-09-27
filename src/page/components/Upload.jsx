import React from "react";
import { uploadfile } from "@req";
export default class Upload extends React.Component {
  state = { cont: [] };
  componentDidMount() {}
  render() {
    return (
      <div className="upImg">
        <img alt="" id="img" />
        <input
          type="file"
          name=""
          id=""
          onChange={e => {
            this.setState(
              {
                filesData: e.target.files[0]
              },
              () => {
                var formData = new FormData();
                formData.append("file", this.state.filesData);
                console.log(this.state.filesData);
                console.log(formData);
                uploadfile(formData).then(res => {
                  if (res.code === 0) {
                  }
                });
                let img = document.getElementById("img");
                img.src = URL.createObjectURL(this.state.filesData);
                //销毁上面创建的链接
                //URL.revokeObjectURL(path);
              }
            );
          }}
        />
      </div>
    );
  }
}
