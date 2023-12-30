import "./App.css";
import Dialog from "./Components/Dialog/Dialog";
import RadioButton from "./Components/RadioButtonGroup/RadioButton";
import RadioGroup from "./Components/RadioButtonGroup/RadioGroup";
import Slider from "./Components/Slider/Slider";
import Pane from "./Components/Pane/Pane";
import Button from "./Components/Button/Button";
import InputField from "./Components/InputBox/InputField";
import Switcher from "./Components/ButtonGroup/Switcher";
import BarLoader from "./Components/Loader/BarLoader";
import { useState } from "react";

function App() {
  const [progress, setProgress] = useState<number>(0);
  return (
    <div className="App">
      <Pane className="Pane" mode="light">
        <div className="SubPane">
          {/* <h1 style={{ color: "black" }}>Title</h1> */}
          <InputField
            mode="light"
            type="number"
            placeholder="Enter some numbers"
            onEdited={(text) => {
              console.log(text);
            }}
            responsive={false}
            className="Textfield"
          />
          <InputField
            mode="light"
            type="password"
            placeholder="Enter Password"
            onEdited={(text) => {
              console.log(text);
            }}
            validator={{ charLimit: 4, correctString: "xyzz" }}
            responsive={false}
            className="Textfield"
          />
          <InputField
            mode="light"
            type="text"
            placeholder="Enter some text"
            onEdited={(text) => {
              console.log(text);
            }}
            responsive={false}
            className="Textfield"
          />
          <InputField
            mode="light"
            type="search"
            className="Textfield"
            placeholder="Search for something"
            searchItems={[
              "hello123",
              "text123",
              "text123",
              "hello323",
              "text123",
            ]}
            selectedSearchItem={(value) => {
              console.log("selected search Item:" + value);
            }}
            onEdited={(text) => {
              console.log(text);
            }}
          />
          <RadioGroup
            mode="light"
            onInteracted={(value, index, label) => {
              console.log("label:" + label, "value:" + value, "index:" + index);
            }}
            className="RadioGroupCSS"
          >
            <RadioButton
              color="rgb(95, 95, 95)"
              checked={false}
              label="first rb"
              value={123}
            />
            <RadioButton
              color="rgb(95, 95, 95)"
              checked={false}
              label="second rb"
              value={123}
            />
          </RadioGroup>
          <Slider
            mode="light"
            min={1}
            max={100}
            step={1}
            type="broad"
            onValueUpdate={(value) => {
              console.log(value);
            }}
            style={{
              position: "relative",
              width: "200px",
            }}
          />
          <Button
            label="Click me"
            type="normal"
            design="glossy"
            style={{ width: "150px", height: "40px", margin: "20px" }}
          />
        </div>
        <div className="SubPane">
          <Switcher
            mode="dark"
            defaultPosition={true}
            className="SwitcherCSS"
            onSwitch={(switchValue) => {
              console.log(switchValue);
            }}
          />
          <BarLoader
            completionPercentage={progress}
            style={{ width: "300px" }}
          />
          <div
            style={{
              display: "flex",
              alignContent: "space-around",
              flexDirection: "row",
              gap: "10px",
              width: "500px",
            }}
          >
            <Button
              label="Increase"
              type="normal"
              design="glossy"
              onClick={() => setProgress(progress + 10)}
              style={{
                width: "fit-content",
                paddingLeft: "30px",
                paddingRight: "30px",
                height: "40px",
              }}
            />
            <Button
              label="Decrease"
              type="normal"
              design="glossy"
              onClick={() => setProgress(progress - 10)}
              style={{
                width: "fit-content",
                paddingLeft: "30px",
                paddingRight: "30px",
                height: "40px",
              }}
            />
          </div>
        </div>
        <div className="SubPane"></div>
      </Pane>
      {/* <Dialog
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
      /> */}
    </div>
  );
}

export default App;
