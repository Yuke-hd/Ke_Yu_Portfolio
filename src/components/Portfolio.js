import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

export default class Porfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      modalImg: '',
      modalTitle: '',
      modalDesc: '',
      modalUrl:''
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal(content) {
    this.setState({
      visible: true,
      modalImg: content.imgurl,
      modalTitle: content.name,
      modalDesc: content.description,
      modalUrl: content.projectUrl
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }
  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="portfolio">
        <Modal visible={this.state.visible}  effect="fadeInUp" onClickAway={() => this.closeModal()}>
          <div >
            <h1 style={{margin:'auto'}}>{this.state.modalTitle}</h1>
            <div style={{width:"80%",margin:'auto'}}><img src={this.state.modalImg} alt=""  /></div>
            <p style={{ textAlign: 'center',margin:'auto'}}>{this.state.modalDesc}</p>
            <a target="_blank" rel="noopener noreferrer" href={this.state.modalUrl}>
              <p style={{ textAlign: 'center' }} >Link</p>
            </a>
          </div>
        </Modal>
        <div className="row">
          <div className=" columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {
                resumeData.portfolio && resumeData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item" key={item.name}>
                      <div className="item-wrap">
                        <a href="!#" onClick={() => this.openModal(item)}>
                          <img src={`${item.thumbnail === undefined ? item.imgurl : item.thumbnail}`} className="item-img" alt="" />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}