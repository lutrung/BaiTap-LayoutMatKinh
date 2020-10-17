import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    return (
      <button
        onClick={() => {
          this.props.doiMatKinh(this.props.sanPhamProp);
        }}
        className="btn"
      >
        <img src={this.props.sanPhamProp.url} alt="hinh" width={200} />
      </button>
    );
  }
}
