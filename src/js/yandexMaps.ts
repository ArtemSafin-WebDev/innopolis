import type { YMapLocationRequest } from "ymaps3";
import "@yandex/ymaps3-default-ui-theme/dist/esm/index.css";

export default async function yandexMaps() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-yandex-map")
  );
  if (!elements.length) return;
  await ymaps3.ready;
  const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer,
    YMapControls,
  } = ymaps3;
  const { YMapDefaultMarker, YMapZoomControl } = await import(
    "@yandex/ymaps3-default-ui-theme"
  );
  elements.forEach((element) => {
    const lat = Number(element.getAttribute("data-lat"));
    const lng = Number(element.getAttribute("data-lng"));
    const zoom = element.hasAttribute("data-zoom")
      ? Number(element.getAttribute("data-zoom"))
      : 14;

    console.log(lat, lng, zoom);

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
      position: "top right",
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
