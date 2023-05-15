
import { Component } from "react";
import './Slider.css'
class SliderClass extends Component {
    noImgs = 5;
    interval;

    showNextImg = (e) => {
        if (this.state.index < this.noImgs - 1) {
          this.setState((prevState) => ({
            index: prevState.index + 1,
            prevDisabled: false,
            nextDisabled: prevState.index + 1 === this.noImgs - 1 ? true : false
          }) );
        }
    }
      

    showPrevImg = (e) => {
        console.log(this.state.index);
        if (this.state.index === this.noImgs - 1) {
          this.setState({ nextDisabled: false });
        }
      
        if (this.state.index > 0) {
          this.setState(
            (prevState) => ({
              index: prevState.index - 1,
              prevDisabled: prevState.index - 1 === 0 ? true : false
            })
          );
        }
    };
      
    startAutoSlider = (e) => {
        this.interval = setInterval(() => {
          this.setState((prevState) => {
            const newIndex = (prevState.index + 1) % this.noImgs;
            return {
              index: newIndex,
              prevDisabled: newIndex > 0 ? false : true,
              nextDisabled: newIndex === this.noImgs - 1 ? true : false
            };
          });
        }, 1000);
      
        this.setState({
          StopDisabled: false,
          playDisabled: true
        });
      };
      
      
    stopAutoSlider = (e) => {
        clearInterval(this.interval);
        this.setState({
          StopDisabled: true,
          playDisabled: false
        });
    };
      
    constructor() {
        super();
        this.state = {
            index: 0,
            StopDisabled: true,
            playDisabled: false,
            nextDisabled: false,
            prevDisabled: true,
        }
    }
    render() {
        return (
            <section class="container m-auto mt-5 outer p-3 rounded-3">
                <div class="container  rounded-3 shadow-lg pt-3 pb-1 px-4 bg-transparent" id="my_slider">
                    <h5 className=" my_slider_header text-center"> My Slideshow</h5>
                    <div class="m-auto py-3 text-center" id="fig-div">
                        <img src={`./images/${this.state.index}.jpg`} className="rounded-1 " id="img" alt="img" />
                    </div>
                    <div class="d-flex justify-content-center my-3">
                        <button class="btn btn-primary mx-2" disabled={this.state.prevDisabled} onClick={this.showPrevImg}><i
                            class="bi bi-caret-left-fill text-white"></i></button>
                        <button class="btn btn-primary mx-2" disabled={this.state.playDisabled} onClick={this.startAutoSlider}><i class="bi bi-power text-white"></i></button>
                        <button class="btn btn-primary mx-2" disabled={this.state.StopDisabled} onClick={this.stopAutoSlider}><i class="bi bi-stop-fill text-white"></i></button>
                        <button class="btn btn-primary mx-2" disabled={this.state.nextDisabled} onClick={this.showNextImg}><i
                            class="bi bi-caret-right-fill text-white"></i></button>
                    </div >
                </div >

            </section >
        )
    }
}

export default SliderClass;
