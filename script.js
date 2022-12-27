const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const anniDate = document.querySelector('.starter');
  const items = document.querySelectorAll('h4');
  console.log(items);

  let ourAnniDate = new Date(2022, 9, 2, 21, 0, 0);

  const year = ourAnniDate.getFullYear();
  const hours = ourAnniDate.getHours();
  const minutes = ourAnniDate.getMinutes();

  const month = months[ourAnniDate.getMonth()];
  const day = ourAnniDate.getDate();
  const weekday = weekdays[ourAnniDate.getDay()];

  console.log(year);
  console.log(new Date());

  anniDate.textContent = `our relationship begins on ${weekday} ${month} ${day}, ${year} ${hours}:0${minutes}`;

  // anni date in ms 
  const anniDateInMs = ourAnniDate.getTime();
  console.log(anniDateInMs);

  const countingStars = () => {
    // currenttime in ms
    const currentTime = new Date().getTime();
    const targetTime = currentTime - anniDateInMs;
    
    let days = Math.floor(targetTime / 1000 / 60 / 60 / 24);
    let hours = Math.floor((targetTime / 1000 / 60 / 60) % 24);
    let minutes = Math.floor((targetTime / 1000 / 60) % 60);
    let seconds = Math.floor((targetTime / 1000) % 60);

    console.log(days);
    console.log(seconds);

    // set values in an array
    const values = [days, hours, minutes, seconds];

    const format = (item) => {
        return item < 10 ? '0' + item : item;
    }

    items.forEach((item, index) => {
        item.innerHTML = format(values[index]);
    });

  }

  // counting
  let countdown = setInterval(countingStars, 1000);


  