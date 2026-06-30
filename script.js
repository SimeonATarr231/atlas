// ============================================
// ATLAS — DATA LAYER
// ============================================

const countries = [
    { name: "Liberia",       capital: "Monrovia",       language: "English",     region: "West Africa" },
    { name: "Nigeria",       capital: "Abuja",          language: "English",     region: "West Africa" },
    { name: "Ghana",         capital: "Accra",          language: "English",     region: "West Africa" },
    { name: "Senegal",       capital: "Dakar",          language: "French",      region: "West Africa" },
    { name: "Ivory Coast",   capital: "Yamoussoukro",   language: "French",      region: "West Africa" },
    { name: "Sierra Leone",  capital: "Freetown",       language: "English",     region: "West Africa" },
    { name: "Mali",          capital: "Bamako",         language: "French",      region: "West Africa" },
    { name: "Guinea",        capital: "Conakry",        language: "French",      region: "West Africa" },
    { name: "Kenya",         capital: "Nairobi",        language: "Swahili",     region: "East Africa" },
    { name: "Tanzania",      capital: "Dodoma",         language: "Swahili",     region: "East Africa" },
    { name: "Ethiopia",      capital: "Addis Ababa",    language: "Amharic",     region: "East Africa" },
    { name: "Uganda",        capital: "Kampala",        language: "English",     region: "East Africa" },
    { name: "Rwanda",        capital: "Kigali",         language: "Kinyarwanda", region: "East Africa" },
    { name: "Somalia",       capital: "Mogadishu",      language: "Somali",      region: "East Africa" },
    { name: "South Africa",  capital: "Pretoria",       language: "Zulu",        region: "Southern Africa" },
    { name: "Zimbabwe",      capital: "Harare",         language: "English",     region: "Southern Africa" },
    { name: "Zambia",        capital: "Lusaka",         language: "English",     region: "Southern Africa" },
    { name: "Botswana",      capital: "Gaborone",       language: "English",     region: "Southern Africa" },
    { name: "Namibia",       capital: "Windhoek",       language: "English",     region: "Southern Africa" },
    { name: "Mozambique",    capital: "Maputo",         language: "Portuguese",  region: "Southern Africa" },
    { name: "Egypt",         capital: "Cairo",          language: "Arabic",      region: "North Africa" },
    { name: "Morocco",       capital: "Rabat",          language: "Arabic",      region: "North Africa" },
    { name: "Algeria",       capital: "Algiers",        language: "Arabic",      region: "North Africa" },
    { name: "Tunisia",       capital: "Tunis",          language: "Arabic",      region: "North Africa" },
    { name: "Libya",         capital: "Tripoli",        language: "Arabic",      region: "North Africa" },
    { name: "Sudan",         capital: "Khartoum",       language: "Arabic",      region: "North Africa" },
    { name: "Cameroon",      capital: "Yaoundé",        language: "French",      region: "Central Africa" },
    { name: "DR Congo",      capital: "Kinshasa",       language: "French",      region: "Central Africa" },
    { name: "Chad",          capital: "N'Djamena",      language: "French",      region: "Central Africa" },
    { name: "Gabon",         capital: "Libreville",     language: "French",      region: "Central Africa" },
];

// ============================================
// DOM REFERENCES
// ============================================

const entryList    = document.getElementById("entryList");
const emptyState    = document.getElementById("emptyState");
const searchInput   = document.getElementById("searchInput");
const resultCount   = document.getElementById("resultCount");
const themeToggle    = document.getElementById("themeToggle");


// RENDER ENGINE
function renderEntries(list) {
  entryList.innerHTML = "";

  if (list.length === 0) {
    emptyState.hidden = false;
  } else {
    emptyState.hidden = true;

    list.forEach((country, i) => {
      const row = document.createElement("div");
      row.className = "entry-row";

      row.innerHTML = `
        <span class="entry-index">${String(i + 1).padStart(2, "0")}</span>
        <div class="entry-name-block">
          <span class="entry-name">${country.name}</span>
          <span class="entry-region">${country.region}</span>
        </div>
        <span class="entry-capital">${country.capital}</span>
        <span class="entry-language">${country.language}</span>
      `;

      entryList.appendChild(row);
    });
  }

  resultCount.textContent = `${list.length} ${list.length === 1 ? "entry" : "entries"}`;
}


// FILTER ENGINE
function handleSearch() {
  const query = searchInput.value.trim().toLowerCase();

  if (query === "") {
    renderEntries(countries);
    return;
  }

  const filtered = countries.filter((country) => {
    return (
      country.name.toLowerCase().includes(query) ||
      country.capital.toLowerCase().includes(query) ||
      country.language.toLowerCase().includes(query) ||
      country.region.toLowerCase().includes(query)
    );
  });

  renderEntries(filtered);
}


// THEME TOGGLE
function handleThemeToggle() {
  const root    = document.documentElement;
  const current = root.getAttribute("data-theme");
  const next    = current === "dark" ? "light" : "dark";

  root.setAttribute("data-theme", next);
  themeToggle.textContent = next === "light" ? "☀" : "☾";
}


// EVENT LISTENERS
searchInput.addEventListener("input", handleSearch);
themeToggle.addEventListener("click", handleThemeToggle);


renderEntries(countries);