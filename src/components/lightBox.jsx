import Slider from "./slider";
function LightBox({ setLightBox }) {

  return (
    <div className="light-box">
      <button className="hamburger" onClick={() => { setLightBox(false) }} >
        <span></span>
      </button>
      <Slider />
    </div>
  )
}
export default LightBox;