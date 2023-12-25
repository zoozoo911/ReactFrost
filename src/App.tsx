import "./App.css";
import Dialog from "./Components/Dialog/Dialog";
import RadioButton from "./Components/RadioButtonGroup/RadioButton";
import RadioGroup from "./Components/RadioButtonGroup/RadioGroup";
import Slider from "./Components/Slider/Slider";
import Pane from "./Components/Pane/Pane";
import TextField from "./Components/InputBox/AlphanumericField";
import Button from "./Components/Button/Button";
import InputField from "./Components/InputBox/InputField";

function App() {
  return (
    <div className="App">
      <Pane className="Pane" mode="light">
        <h1>This is a</h1>
        <InputField
          type="password"
          placeholder="Enter something"
          onEdited={(text) => {
            console.log(text);
          }}
          responsive={true}
          className="Textfield"
        />
        <RadioGroup
          onInteracted={(value, index, label) => {
            console.log("label:" + label, "value:" + value, "index:" + index);
          }}
          className="RadioGroupCSS"
        >
          <RadioButton
            color="black"
            checked={false}
            label="first rb"
            value={123}
          />
          <RadioButton
            color="black"
            checked={false}
            label="second rb"
            value={123}
          />
        </RadioGroup>
        <Slider
          min={1}
          max={100}
          step={1}
          type="broad"
          style={{
            position: "relative",
            width: "80%",
          }}
        />
        <Button
          label="Click me"
          type="normal"
          design="glossy"
          style={{ width: "50%", height: "40px" }}
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
            design: "glossy",
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
            design: "glossy",
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
