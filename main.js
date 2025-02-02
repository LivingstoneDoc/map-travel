import { sliderComponent } from "./components/slider.js";
import { dialogComponent } from "./components/dialog.js";
import { mapComponent } from "./components/map.js";
import { playersInfoComponent } from "./components/players-info.js";

const mapApp = () => {
    mapComponent();
    sliderComponent();
    dialogComponent();
    playersInfoComponent();
}
mapApp();