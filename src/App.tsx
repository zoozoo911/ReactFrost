import "./App.css";
import Dialog from "./Components/Dialog/Dialog";
import RadioButton from "./Components/RadioButtonGroup/RadioButton";
import RadioGroup from "./Components/RadioButtonGroup/RadioGroup";
import Slider from "./Components/Slider/Slider";
import Pane from "./Components/Pane/Pane";

function App() {
  return (
    <div className="App">
      <Pane className="Pane" mode="light">
        <RadioGroup
          onInteracted={(value, index, label) => {
            console.log("label:" + label, "value:" + value, "index:" + index);
          }}
          className="RadioGroupCSS"
        >
          <RadioButton checked={false} label="first rb" value={123} />
          <RadioButton checked={false} label="second rb" value={123} />
        </RadioGroup>
        <Slider
          min={1}
          max={100}
          step={1}
          type="broad"
          style={{
            position: "relative",
            width: "100%",
          }}
        />
      </Pane>

      <Dialog
        title="Hello"
        body="example text"
        mode="light"
        className="DialogCSS"
        buttons={[
          {
            onClick: () => console.log("button 1"),
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
            onClick: () => console.log("button 2"),
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
    </div>
  );
}

export default App;
