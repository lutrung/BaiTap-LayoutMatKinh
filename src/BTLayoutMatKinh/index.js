import React, { Component } from "react";
import SanPham from "./SanPham";
import DanhSachSanPham from "./data.json";

export default class BaiTapMatKinh extends Component {
  state = {
    chiTietGlasses: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  handleDoiMauKinh = (sanPhamDoi) => {
    this.setState({
      chiTietGlasses: sanPhamDoi,
    });
  };

  renderDanhSachSanPham = () => {
    return DanhSachSanPham.map((sanPham, index) => {
      return (
        <SanPham sanPhamProp={sanPham} doiMatKinh={this.handleDoiMauKinh} />
      );
    });
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: "url(./img/background.jpg)",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          position: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="mb-5"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", padding: 20 }}
        >
          <span className="display-4 text-light">TRY CLASSES APP ONLINE</span>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <div className="w-75">
            <div className="model d-flex justify-content-around">
              <div
                className="modelChange"
                style={{ width: "25%", height: "25%", position: "relative" }}
              >
                <img
                  src="./img/model.jpg"
                  style={{ width: "100%", height: "100%" }}
                  alt="hinh"
                />
                <img
                  src={this.state.chiTietGlasses.url}
                  alt="hinh"
                  style={{
                    position: "absolute",
                    top: "25%",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                  width={"55%"}
                />
                <div
                  className="text-left"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    backgroundColor: "rgba(255, 68, 0, 0.416)",
                    width: "100%",
                    padding: "5px",
                  }}
                >
                  <h3 className="text-primary">
                    {this.state.chiTietGlasses.name}
                  </h3>
                  <p className="text-light">{this.state.chiTietGlasses.desc}</p>
                </div>
              </div>
              <div style={{ width: "25%", height: "25%" }}>
                <img
                  src="./img/model.jpg"
                  style={{ width: "100%", height: "100%" }}
                  alt="hinh"
                />
              </div>
            </div>
            {this.renderDanhSachSanPham()}
          </div>
        </div>
      </div>
    );
  }
}
