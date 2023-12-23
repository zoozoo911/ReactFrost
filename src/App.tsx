import "./App.css";
import Dialog from "./Components/Dialog/Dialog";
import RadioButton from "./Components/RadioButtonGroup/RadioButton";
import RadioGroup from "./Components/RadioButtonGroup/RadioGroup";
import Slider from "./Components/Slider/Slider";
import Pane from "./Components/Pane/Pane";

function App() {
  return (
    <div className="App">
      <Pane
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          gap: "10px",
          alignItems: "flex-start",
          right: "30%",
          bottom: "50%",
          height: "400px",
          width: "340px",
        }}
        mode="light"
      >
        <RadioGroup
          onInteracted={(value, index, label) => {
            console.log("label:" + label, "value:" + value, "index:" + index);
          }}
          style={{
            color: "black",
            position: "relative",
            width: "fit-content",
            height: "fit-content",
          }}
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
