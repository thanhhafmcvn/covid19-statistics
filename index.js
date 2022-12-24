/** @format */

const APIEndpoint =
  "https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST";

const getStatistics = async () => {
  const response = await fetch(APIEndpoint);
  const data = await response.json();
  return data;
};

const showStatistics = () => {
  getStatistics().then((data) => {
    document.querySelector(
      "#infected"
    ).innerHTML = `INFECTED: ${data.infected.toLocaleString()} people`;
    document.querySelector(
      "#recovered"
    ).innerHTML = `RECOVERED: ${data.recovered.toLocaleString()} people`;
    document.querySelector(
      "#deceased"
    ).innerHTML = `DECEASED: ${data.deceased.toLocaleString()} people`;
    document.querySelector(
      "#treated"
    ).innerHTML = `TREATED: ${data.treated.toLocaleString()} people`;

    document.querySelector(".hanoi-list").insertAdjacentHTML(
      "beforeend",
      `<li>CASES: ${data.detail[0].cases.toLocaleString()} people</li>
          <li>DEATH: ${data.detail[0].death.toLocaleString()} people</li>
          <li>TREATING: ${data.detail[0].treating.toLocaleString()} people</li>
          <li>RECOVERED: ${data.detail[0].recovered.toLocaleString()} people</li>
          `
    );
    document.querySelector(".hcmcity-list").insertAdjacentHTML(
      "beforeend",
      `<li>CASES: ${data.detail[1].cases.toLocaleString()} people</li>
          <li>DEATH: ${data.detail[1].death.toLocaleString()} people</li>
          <li>TREATING: ${data.detail[1].treating.toLocaleString()} people</li>
          <li>RECOVERED: ${data.detail[1].recovered.toLocaleString()} people</li>
          `
    );
    document.querySelector(".danang-list").insertAdjacentHTML(
      "beforeend",
      `<li>CASES: ${data.detail[32].cases.toLocaleString()} people</li>
          <li>DEATH: ${data.detail[32].death.toLocaleString()} people</li>
          <li>TREATING: ${data.detail[32].treating.toLocaleString()} people</li>
          <li>RECOVERED: ${data.detail[32].recovered.toLocaleString()} people</li>
          `
    );
  });
};
