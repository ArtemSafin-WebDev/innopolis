import { YMapDefaultMarker } from "@yandex/ymaps3-default-ui-theme";
import type { YMapLocationRequest } from "ymaps3";
import "@yandex/ymaps3-default-ui-theme/dist/esm/index.css";

export default async function yandexMaps() {
  await ymaps3.ready;
  const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer,
    YMapControls,
  } = ymaps3;
  const { YMapZoomControl } = await ymaps3.import(
    "@yandex/ymaps3-controls@0.0.1"
  );

  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-yandex-map")
  );
  elements.forEach((element) => {
    const lat = Number(element.parentElement?.getAttribute("data-lat"));
    const lng = Number(element.parentElement?.getAttribute("data-lng"));
    const zoom = element?.parentElement?.hasAttribute("data-zoom")
      ? Number(element?.parentElement?.getAttribute("data-zoom"))
      : 14;

    const LOCATION: YMapLocationRequest = {
      center: [lng, lat],
      zoom: zoom,
    };
    const map = new YMap(element, {
      location: LOCATION,
      behaviors: ["drag", "pinchZoom"],
    });
    map.addChild(new YMapDefaultSchemeLayer({}));
    map.addChild(new YMapDefaultFeaturesLayer({ zIndex: 1800 }));
    const controls = new YMapControls({
      position: "bottom right",
      orientation: "vertical",
    });
    controls.addChild(
      new YMapZoomControl({
        easing: "linear",
      })
    );
    map.addChild(controls);

    map.addChild(
      new YMapDefaultMarker({
        coordinates: [lng, lat],
      })
    );
  });
}
