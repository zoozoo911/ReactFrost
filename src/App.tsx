import "./App.css";
import Dialog from "./Components/Dialog/Dialog";
import RadioButton from "./Components/RadioButtonGroup/RadioButton";
import RadioGroup from "./Components/RadioButtonGroup/RadioGroup";
import Slider from "./Components/Slider/Slider";

function App() {
  return (
    <div className="App">
      <RadioGroup
        onInteracted={(value, index, label) => {
          alert("label:" + label + "\nvalue:" + value + "\nindex:" + index);
        }}
        style={{
          position: "absolute",
          left: "10%",
          top: "16%",
          width: "fit-content",
          height: "fit-content",
        }}
      >
        <RadioButton checked={false} label="first rb" value={123} />
        <RadioButton checked={false} label="second rb" value={123} />
      </RadioGroup>
      <Dialog
        title="Hello"
        body="example text"
        mode="light"
        style={{
          position: "absolute",
          height: "fit-content",
          minHeight: "400px",
          width: "fit-content",
          minWidth: "340px",
          right: "70%",
          bottom: "50%",
          transform: "translate(50%,50%)",
        }}
        buttons={[
          {
            onClick: () => alert("button 1"),
            label: "test",
            type: "normal",
            mode: "3D",
            style: {
              position: "relative",
              width: "50%",
              height: "40px",
            },
          },
          {
            onClick: () => alert("button 2"),
            label: "test",
            type: "cancel",
            mode: "3D",
            style: {
              color: "white",
              borderColor: "black",
              position: "relative",
              width: "50%",
              height: "40px",
            },
          },
        ]}
      />
      <Slider
        min={1}
        max={100}
        step={1}
        type="broad"
        style={{
          position: "absolute",
          width: "300px",
          minWidth: "340px",
          right: "50%",
          bottom: "50%",
          transform: "translate(50%,50%) rotate(90deg)",
        }}
      />
    </div>
  );
}

export default App;
