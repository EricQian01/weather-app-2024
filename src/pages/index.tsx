import Image from "next/image";
import { useState } from "react";
import Container from "@/components/Container/index";


export default function Home() {
  var apiKey = "c3d79670c1549f4b1657910ed1302c9b";
  var url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${apiKey}`;

  const [data, setData] = useState<[]>([]);
  const city = 'Vancouver';

  const GrabInfo = () => {
    fetch(url)
    .then(response => response.json())
    .then((data) => {
      const temperature = data.main.temp;
      const weatherDescription = data.weather[0].description;
      console.log(`Current weather in ${city}: ${temperature}°C, ${weatherDescription}`);
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
  }


  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <button onClick={() => GrabInfo()}>Grab Info</button>
      <Container data={data}/>
    </main>
  );
}
