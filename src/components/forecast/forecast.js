import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const WEEK_DAYS = [
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
  "Pazar",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDate();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  console.log(forecastDays);

  return (
    <>
      <label className="title">Günlük</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    alt="weather"
                    className="icon-small"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_min)}°C /{" "}
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Basınç: </label>
                  <label>{item.main.pressure} mb</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Nem: </label>
                  <label>%{item.main.humidity}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Bulut Yoğunluğu: </label>
                  <label>%{item.clouds.all}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Rüzgar Hızı: </label>
                  <label>{item.wind.speed} km/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Deniz Seviyesi: </label>
                  <label>{item.main.sea_level} m</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Hissedilen Sıcaklık: </label>
                  <label>{Math.round(item.main.feels_like)}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
