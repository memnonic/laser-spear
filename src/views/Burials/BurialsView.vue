<script setup lang="ts">
import { QCard, QTable, type QTableColumn } from 'quasar'
import i18n from '@/plugins/i18n.plugin.ts'

export type ISODate = string; // YYYY-MM-DD

interface GraveLocation {
  sector?: string | null;
  row?: string | null;
  grave?: string | null;

  area?: string | null;
}

interface Burial {
  cemetery: string;
  city: string;

  surname: string;
  firstName: string;

  fraternities: string[];

  dateOfBirth: ISODate | null;
  dateOfDeath: ISODate | null;

  location: GraveLocation;

  lat: number | null;
  lon: number | null;
}

const columns: QTableColumn<Burial>[] = [
  {
    name: 'surname',
    label: i18n.t('burials.table.surname'),
    field: 'surname',
    align: 'left',
    sortable: true,
  },
  {
    name: 'firstName',
    label: i18n.t('burials.table.firstName'),
    field: 'firstName',
    align: 'left',
    sortable: true,
  },
  {
    name: 'fraternities',
    label: i18n.t('burials.table.fraternities'),
    field: row => row.fraternities.join(', '),
    align: 'left',
    sortable: true,
    sort: (a, b) => a.localeCompare(b),
  },
  {
    name: 'dateOfBirth',
    label: i18n.t('burials.table.dateOfBirth'),
    field: 'dateOfBirth',
    align: 'left',
    sortable: true,
  },
  {
    name: 'dateOfDeath',
    label: i18n.t('burials.table.dateOfDeath'),
    field: 'dateOfDeath',
    align: 'left',
    sortable: true,
  },
  {
    name: 'cemetery',
    label: i18n.t('burials.table.cemetery'),
    field: 'cemetery',
    align: 'left',
    sortable: true,
  },
  {
    name: 'city',
    label: i18n.t('burials.table.city'),
    field: 'city',
    align: 'left',
    sortable: true,
  },
  {
    name: 'sector',
    label: i18n.t('burials.table.sector'),
    field: row => row.location?.sector ?? '',
    align: 'left',
    sortable: true,
  },
  {
    name: 'row',
    label: i18n.t('burials.table.row'),
    field: row => row.location?.row ?? '',
    align: 'left',
    sortable: true,
  },
  {
    name: 'grave',
    label: i18n.t('burials.table.grave'),
    field: row => row.location?.grave ?? '',
    align: 'left',
    sortable: true,
  },
  {
    name: 'area',
    label: i18n.t('burials.table.area'),
    field: row => row.location?.area ?? '',
    align: 'left',
    sortable: true,
  },
];

const rows: Burial[] = [
  {
    "cemetery": "Cmentarz w Gdyni przy ul. Spokojnej",
    "city": "Gdynia",
    "surname": "Korkliński",
    "firstName": "Eugeniusz",
    "fraternities": [
      "Kujawja"
    ],
    "dateOfBirth": "1901-07-09",
    "dateOfDeath": "1981-04-11",
    "location": {
      "sector": "23",
      "row": "2",
      "grave": "47",
      "area": null
    },
    "lat": 54.47297046,
    "lon": 18.52210848
  },
  {
    "cemetery": "Cmentarz Sobieszewski",
    "city": "Gdańsk",
    "surname": "Piorun-Sobieszański",
    "firstName": "Józef",
    "fraternities": [
      "Kujawja"
    ],
    "dateOfBirth": "1910-11-10",
    "dateOfDeath": "1988-03-22",
    "location": {
      "sector": null,
      "row": null,
      "grave": null,
      "area": null
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Żołnierzy Polskich w Gdyni Redłowie",
    "city": "Gdynia",
    "surname": "Kiedrowski",
    "firstName": "Władysław",
    "fraternities": [
      "Baltia"
    ],
    "dateOfBirth": "1900-10-24",
    "dateOfDeath": "1939-11-11",
    "location": {
      "sector": null,
      "row": null,
      "grave": null,
      "area": null
    },
    "lat": 54.49067525,
    "lon": 18.54546515
  },
  {
    "cemetery": "Cmentarz Garnizonowy w Gdańsku",
    "city": "Gdańsk",
    "surname": "Gleinert",
    "firstName": "Hubert",
    "fraternities": [
      "Pomerania"
    ],
    "dateOfBirth": "1915-12-06",
    "dateOfDeath": "2000-12-25",
    "location": {
      "sector": "13",
      "row": "3",
      "grave": "3",
      "area": null
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Łostowicki w Gdańsku",
    "city": "Gdańsk",
    "surname": "Peisert",
    "firstName": "Arkadiusz",
    "fraternities": [
      "Welecja"
    ],
    "dateOfBirth": "1978-03-16",
    "dateOfDeath": "2019-11-13",
    "location": {
      "sector": "139B",
      "row": "2",
      "grave": "13",
      "area": null
    },
    "lat": 54.34031168,
    "lon": 18.58574211
  },
  {
    "cemetery": "Cmentarz Łostowicki w Gdańsku",
    "city": "Gdańsk",
    "surname": "Ciszewski",
    "firstName": "Leon",
    "fraternities": [
      "Lechia"
    ],
    "dateOfBirth": "1914-07-27",
    "dateOfDeath": "1989-12-21",
    "location": {
      "sector": "18",
      "row": "15",
      "grave": "30",
      "area": null
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Łostowicki w Gdańsku",
    "city": "Gdańsk",
    "surname": "Drożdż",
    "firstName": "Kazimierz",
    "fraternities": [
      "ZAG Wisła"
    ],
    "dateOfBirth": "1902-02-10",
    "dateOfDeath": "1988-08-19",
    "location": {
      "sector": "22",
      "row": "39",
      "grave": "10",
      "area": null
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Łostowicki w Gdańsku",
    "city": "Gdańsk",
    "surname": "Lipowicz",
    "firstName": "Roman",
    "fraternities": [
      "ZAG Wisła"
    ],
    "dateOfBirth": "1900-09-04",
    "dateOfDeath": "1991-11-09",
    "location": {
      "sector": "16",
      "row": "15",
      "grave": "5",
      "area": null
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Łostowicki w Gdańsku",
    "city": "Gdańsk",
    "surname": "Masiak",
    "firstName": "Edmund",
    "fraternities": [
      "Baltia"
    ],
    "dateOfBirth": "1903-03-12",
    "dateOfDeath": "1983-08-19",
    "location": {
      "sector": "98",
      "row": "8",
      "grave": "1",
      "area": null
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Łostowicki w Gdańsku",
    "city": "Gdańsk",
    "surname": "Potocki",
    "firstName": "Aleksy",
    "fraternities": [
      "Rosevia"
    ],
    "dateOfBirth": "1909-06-13",
    "dateOfDeath": "2000-08-21",
    "location": {
      "sector": "125",
      "row": "3",
      "grave": "10",
      "area": null
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Bartmański",
    "firstName": "Henryk",
    "fraternities": [
      "Arkonia"
    ],
    "dateOfBirth": "1911-07-21",
    "dateOfDeath": "2002-10-13",
    "location": {
      "sector": "VIII",
      "row": "5",
      "grave": "9",
      "area": "kw VIII"
    },
    "lat": 54.3722179,
    "lon": 18.5809916
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Dąbrowski",
    "firstName": "Józef Aleksander",
    "fraternities": [
      "Konwent Polonia"
    ],
    "dateOfBirth": "1911-11-18",
    "dateOfDeath": "1964-07-11",
    "location": {
      "sector": "V",
      "row": "4",
      "grave": "80",
      "area": "kw II"
    },
    "lat": 54.3731181,
    "lon": 18.5839202
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Druet",
    "firstName": "Kazimierz",
    "fraternities": [
      "Welecja"
    ],
    "dateOfBirth": "1910-04-30",
    "dateOfDeath": "1991-04-13",
    "location": {
      "sector": "VIII",
      "row": "5",
      "grave": "10",
      "area": "kw VIII"
    },
    "lat": 54.3722179,
    "lon": 18.5809916
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Heibert",
    "firstName": "Tadeusz",
    "fraternities": [
      "Konwent Polonia"
    ],
    "dateOfBirth": "1898-11-10",
    "dateOfDeath": "1962-04-15",
    "location": {
      "sector": "V",
      "row": "2",
      "grave": "106/105",
      "area": "kw I taras III"
    },
    "lat": 54.3733099,
    "lon": 18.5839064
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Kisiel",
    "firstName": "Witold",
    "fraternities": [
      "Konwent Polonia"
    ],
    "dateOfBirth": "1909-03-28",
    "dateOfDeath": "1973-02-12",
    "location": {
      "sector": "I",
      "row": "5",
      "grave": "4",
      "area": "groby rodzinne D"
    },
    "lat": 54.3747062,
    "lon": 18.5835933
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Kosmowski",
    "firstName": "Józef",
    "fraternities": [
      "Konwent Polonia"
    ],
    "dateOfBirth": "1888-02-21",
    "dateOfDeath": "1974-04-10",
    "location": {
      "sector": "V",
      "row": "1",
      "grave": "7",
      "area": "taras II"
    },
    "lat": 54.3739081,
    "lon": 18.5832047
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Kuźniar",
    "firstName": "Władysław",
    "fraternities": [
      "Konwent Polonia"
    ],
    "dateOfBirth": "1917-10-23",
    "dateOfDeath": "2006-11-27",
    "location": {
      "sector": "I",
      "row": "3",
      "grave": "43",
      "area": "taras I"
    },
    "lat": 54.3754187,
    "lon": 18.5819119
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Martusewicz",
    "firstName": "Gustaw",
    "fraternities": [
      "Lauda"
    ],
    "dateOfBirth": "1907-09-18",
    "dateOfDeath": "1990-01-28",
    "location": {
      "sector": "IX",
      "row": "1",
      "grave": "123",
      "area": "taras III"
    },
    "lat": 54.3712742,
    "lon": 18.5836245
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Pawlikowski",
    "firstName": "Jerzy",
    "fraternities": [
      "Konwent Polonia"
    ],
    "dateOfBirth": "1903-07-12",
    "dateOfDeath": "1966-08-02",
    "location": {
      "sector": "V",
      "row": "1",
      "grave": "8/9",
      "area": "pol VIII"
    },
    "lat": 54.3747098,
    "lon": 18.5847788
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Rochowicz",
    "firstName": "Kazimierz",
    "fraternities": [
      "Jagiellonia"
    ],
    "dateOfBirth": "1900-03-01",
    "dateOfDeath": "1977-10-24",
    "location": {
      "sector": "III",
      "row": "1",
      "grave": "2",
      "area": "taras I"
    },
    "lat": 54.3749574,
    "lon": 18.5820276
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Sopoćko",
    "firstName": "Józef",
    "fraternities": [
      "Konwent Polonia"
    ],
    "dateOfBirth": "1893-01-01",
    "dateOfDeath": "1960-02-16",
    "location": {
      "sector": "V",
      "row": "1",
      "grave": "106/105",
      "area": "kw V"
    },
    "lat": 54.372547,
    "lon": 18.5857257
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Szawernowski",
    "firstName": "Piotr",
    "fraternities": [
      "Arkonia"
    ],
    "dateOfBirth": "1901-12-08",
    "dateOfDeath": "1975-12-18",
    "location": {
      "sector": "VIII",
      "row": "1",
      "grave": "599",
      "area": "taras III"
    },
    "lat": 54.3742467,
    "lon": 18.5796223
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Wilski",
    "firstName": "Ignacy",
    "fraternities": [
      "Arkonia"
    ],
    "dateOfBirth": "1904-11-10",
    "dateOfDeath": "1969-10-09",
    "location": {
      "sector": "I",
      "row": null,
      "grave": null,
      "area": "groby rodzinne B"
    },
    "lat": 54.375154,
    "lon": 18.582841
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Czerwiński",
    "firstName": "Jerzy",
    "fraternities": [
      "Gedania"
    ],
    "dateOfBirth": "1910-01-08",
    "dateOfDeath": "1990-10-26",
    "location": {
      "sector": "VI",
      "row": null,
      "grave": "564",
      "area": "kw III międzyleśny"
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Dorosz",
    "firstName": "Tadeusz",
    "fraternities": [
      "Slavia"
    ],
    "dateOfBirth": "1912-12-26",
    "dateOfDeath": "1977-08-18",
    "location": {
      "sector": "VII",
      "row": "1",
      "grave": "39",
      "area": "taras VI"
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Drobniak",
    "firstName": "Aleksander",
    "fraternities": [
      "Śniadecia"
    ],
    "dateOfBirth": "1910-08-05",
    "dateOfDeath": "1976-09-18",
    "location": {
      "sector": "I",
      "row": null,
      "grave": "2a",
      "area": "groby rodzinne D"
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Garbolewski",
    "firstName": "Leonard",
    "fraternities": [
      "ZAG Wisła"
    ],
    "dateOfBirth": "1909-08-29",
    "dateOfDeath": "1960-01-18",
    "location": {
      "sector": "V",
      "row": "1",
      "grave": "1b",
      "area": "taras VIII"
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Golędzinowski",
    "firstName": "Tadeusz",
    "fraternities": [
      "ZAG Wisła"
    ],
    "dateOfBirth": "1918-03-10",
    "dateOfDeath": "1991-03-22",
    "location": {
      "sector": "IX",
      "row": "1",
      "grave": "16",
      "area": "taras IV wojskowy cypel"
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Grabski",
    "firstName": "Lucjan",
    "fraternities": [
      "Helania"
    ],
    "dateOfBirth": "1906-12-30",
    "dateOfDeath": "1973-01-13",
    "location": {
      "sector": "XI",
      "row": "1",
      "grave": "5",
      "area": "taras II"
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Groth",
    "firstName": "Paweł",
    "fraternities": [
      "Pomerania"
    ],
    "dateOfBirth": "1901-04-14",
    "dateOfDeath": "1985-08-15",
    "location": {
      "sector": "VII",
      "row": "1",
      "grave": "10",
      "area": "przy schodach"
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Grzybowski",
    "firstName": "Janusz",
    "fraternities": [
      "Patria"
    ],
    "dateOfBirth": "1915-07-02",
    "dateOfDeath": "1968-05-12",
    "location": {
      "sector": "VI",
      "row": null,
      "grave": null,
      "area": "kw I w lasku"
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Grzybowski",
    "firstName": "Tadeusz",
    "fraternities": [
      "Patria"
    ],
    "dateOfBirth": "1916-05-19",
    "dateOfDeath": "1990-05-15",
    "location": {
      "sector": "VI",
      "row": null,
      "grave": null,
      "area": "kw I w lasku"
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Hordyjewski",
    "firstName": "Jerzy",
    "fraternities": [
      "Rosevia"
    ],
    "dateOfBirth": "1906-09-14",
    "dateOfDeath": "1974-03-26",
    "location": {
      "sector": null,
      "row": null,
      "grave": "2",
      "area": "b.d."
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Kaszyński",
    "firstName": "Tadeusz",
    "fraternities": [
      "Masovia"
    ],
    "dateOfBirth": "1910-10-28",
    "dateOfDeath": "1995-10-26",
    "location": {
      "sector": "X",
      "row": null,
      "grave": "8",
      "area": "kw IX grobowce"
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Kaźmierczak",
    "firstName": "Józef",
    "fraternities": [
      "Rosevia"
    ],
    "dateOfBirth": "1903-11-17",
    "dateOfDeath": "1953-02-09",
    "location": {
      "sector": "III",
      "row": "1",
      "grave": null,
      "area": "taras I"
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Kentzer",
    "firstName": "Lech",
    "fraternities": [
      "Helania"
    ],
    "dateOfBirth": "1918-09-13",
    "dateOfDeath": "1991-10-05",
    "location": {
      "sector": "XI",
      "row": "1",
      "grave": "125",
      "area": "taras VI"
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Kieturakis",
    "firstName": "Zdzisław",
    "fraternities": [
      "Leonidania"
    ],
    "dateOfBirth": "1904-11-25",
    "dateOfDeath": "1971-11-07",
    "location": {
      "sector": "IX",
      "row": "0",
      "grave": "300/301",
      "area": "profesorów"
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Knoch",
    "firstName": "Leonard",
    "fraternities": [
      "Sarmatia"
    ],
    "dateOfBirth": "1912-11-23",
    "dateOfDeath": "1995-11-11",
    "location": {
      "sector": "IX",
      "row": "2",
      "grave": "4",
      "area": "kw V"
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Korycki",
    "firstName": "Michał",
    "fraternities": [
      "Vilnensia",
      "Piłsudia"
    ],
    "dateOfBirth": "1904-12-08",
    "dateOfDeath": "1994-02-22",
    "location": {
      "sector": "XII",
      "row": null,
      "grave": null,
      "area": "kw muzułmańska"
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Kula",
    "firstName": "Bernard",
    "fraternities": [
      "Cassubia"
    ],
    "dateOfBirth": "1908-09-15",
    "dateOfDeath": "2001-09-02",
    "location": {
      "sector": "V",
      "row": "1",
      "grave": "27",
      "area": "pol I"
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Leonhard",
    "firstName": "Adam",
    "fraternities": [
      "Slavia"
    ],
    "dateOfBirth": "1913-11-23",
    "dateOfDeath": "1974-02-28",
    "location": {
      "sector": "II",
      "row": null,
      "grave": null,
      "area": "al. zasłużonych"
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Łukomski",
    "firstName": "Wiesław",
    "fraternities": [
      "ZAG Wisła"
    ],
    "dateOfBirth": null,
    "dateOfDeath": "1982-08-17",
    "location": {
      "sector": "VII",
      "row": "2",
      "grave": "5",
      "area": "górka"
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Malicki",
    "firstName": "Longin",
    "fraternities": [
      "Masovia"
    ],
    "dateOfBirth": "1908-01-12",
    "dateOfDeath": "1986-11-19",
    "location": {
      "sector": "I",
      "row": null,
      "grave": "40",
      "area": "groby rodzinne E"
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Markiewicz",
    "firstName": "Wiktor",
    "fraternities": [
      "Vilnensia"
    ],
    "dateOfBirth": "1912-09-04",
    "dateOfDeath": "2004-10-04",
    "location": {
      "sector": "IX",
      "row": "2",
      "grave": "301",
      "area": "taras I wojskowy"
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Milchert",
    "firstName": "Józef",
    "fraternities": [
      "Lutyko-Venedya"
    ],
    "dateOfBirth": "1907-05-26",
    "dateOfDeath": "1972-03-27",
    "location": {
      "sector": "V",
      "row": "3",
      "grave": "4",
      "area": "taras VII/II"
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Morzycki",
    "firstName": "Jerzy",
    "fraternities": [
      "Sarmatia"
    ],
    "dateOfBirth": "1905-01-25",
    "dateOfDeath": "1954-07-08",
    "location": {
      "sector": "IX",
      "row": "1",
      "grave": null,
      "area": "profesorów"
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Ochocki",
    "firstName": "Tadeusz",
    "fraternities": [
      "Chrobria"
    ],
    "dateOfBirth": "1903-07-05",
    "dateOfDeath": "1969-02-05",
    "location": {
      "sector": "VII",
      "row": "4",
      "grave": "18",
      "area": "górka"
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Piasecki",
    "firstName": "Jan Tadeusz",
    "fraternities": [
      "ZAG Wisła"
    ],
    "dateOfBirth": "1903-10-24",
    "dateOfDeath": "1981-12-13",
    "location": {
      "sector": "V",
      "row": "3",
      "grave": "9",
      "area": "kw XIII"
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Raciniewski",
    "firstName": "Bronisław",
    "fraternities": [
      "Rosevia"
    ],
    "dateOfBirth": "1908-01-18",
    "dateOfDeath": "1975-10-23",
    "location": {
      "sector": "VII",
      "row": "4",
      "grave": "18/17",
      "area": "pol A"
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Radziszowski",
    "firstName": "Leszek",
    "fraternities": [
      "Gasconia"
    ],
    "dateOfBirth": "1913-03-26",
    "dateOfDeath": "1980-02-11",
    "location": {
      "sector": "XII",
      "row": "1",
      "grave": null,
      "area": "kw III dzieci"
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Ramczykowski",
    "firstName": "Alojzy",
    "fraternities": [
      "ZAG Wisła"
    ],
    "dateOfBirth": "1910-06-21",
    "dateOfDeath": "1985-12-05",
    "location": {
      "sector": "VII",
      "row": "1",
      "grave": "28",
      "area": "kw II"
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Rodkiewicz",
    "firstName": "Mieczysław",
    "fraternities": [
      "ZAG Wisła"
    ],
    "dateOfBirth": "1903-11-17",
    "dateOfDeath": "1987-08-18",
    "location": {
      "sector": "V",
      "row": "2",
      "grave": "1358",
      "area": "taras II"
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Rudowski",
    "firstName": "Michał",
    "fraternities": [
      "Corona"
    ],
    "dateOfBirth": "1913-10-16",
    "dateOfDeath": "1993-08-21",
    "location": {
      "sector": "IX",
      "row": "1",
      "grave": "1480",
      "area": "taras II wojskowy"
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Sauter",
    "firstName": "Feliks",
    "fraternities": [
      "ZAG Wisła"
    ],
    "dateOfBirth": "1905-01-02",
    "dateOfDeath": "1975-02-24",
    "location": {
      "sector": "VI",
      "row": "9",
      "grave": "8/7",
      "area": "taras V"
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Sobolewski",
    "firstName": "Jan Aleksander",
    "fraternities": [
      "Batoria"
    ],
    "dateOfBirth": null,
    "dateOfDeath": "1977-09-19",
    "location": {
      "sector": "VI",
      "row": "9",
      "grave": null,
      "area": "kw II"
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Szudziński",
    "firstName": "Ludwik",
    "fraternities": [
      "Masovia"
    ],
    "dateOfBirth": "1901-01-19",
    "dateOfDeath": "1979-01-31",
    "location": {
      "sector": "X",
      "row": "17",
      "grave": "4",
      "area": "kw VIII"
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Taylor",
    "firstName": "Karol",
    "fraternities": [
      "Laudania"
    ],
    "dateOfBirth": "1878-11-01",
    "dateOfDeath": "1968-06-17",
    "location": {
      "sector": "IX",
      "row": "0",
      "grave": "991",
      "area": "profesorów"
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Tukalski",
    "firstName": "Jan",
    "fraternities": [
      "Gedania"
    ],
    "dateOfBirth": "1911-01-27",
    "dateOfDeath": "1982-08-12",
    "location": {
      "sector": "XI",
      "row": null,
      "grave": "4",
      "area": "taras II"
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Twardowski",
    "firstName": "Tadeusz",
    "fraternities": [
      "Cresovia Leopoliensis"
    ],
    "dateOfBirth": "1914-01-22",
    "dateOfDeath": "1984-11-13",
    "location": {
      "sector": "IX",
      "row": "1",
      "grave": "63",
      "area": "taras III"
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Srebrzysko w Gdańsku",
    "city": "Gdańsk",
    "surname": "Urbanowicz",
    "firstName": "Antoni",
    "fraternities": [
      "Leonidania"
    ],
    "dateOfBirth": "1914-08-01",
    "dateOfDeath": "1996-09-06",
    "location": {
      "sector": "V",
      "row": "7",
      "grave": null,
      "area": "kw II"
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz w Oliwie",
    "city": "Gdańsk",
    "surname": "Żukowski",
    "firstName": "Kazimierz",
    "fraternities": [
      "Konwent Polonia"
    ],
    "dateOfBirth": "1915-03-04",
    "dateOfDeath": "2000-07-12",
    "location": {
      "sector": "8",
      "row": "13",
      "grave": "10",
      "area": null
    },
    "lat": 54.41337897,
    "lon": 18.55802923
  },
  {
    "cemetery": "Cmentarz w Oliwie",
    "city": "Gdańsk",
    "surname": "O'Rourke",
    "firstName": "Edward",
    "fraternities": [
      "Arkonia"
    ],
    "dateOfBirth": "1876-10-26",
    "dateOfDeath": "1943-06-27",
    "location": {
      "sector": null,
      "row": null,
      "grave": null,
      "area": null
    },
    "lat": 54.41096884,
    "lon": 18.5580232
  },
  {
    "cemetery": "Cmentarz w Oliwie",
    "city": "Gdańsk",
    "surname": "Łukowski",
    "firstName": "Zbigniew",
    "fraternities": [
      "Lauda"
    ],
    "dateOfBirth": "1920-06-26",
    "dateOfDeath": "2012-02-12",
    "location": {
      "sector": "9",
      "row": "10",
      "grave": "1",
      "area": null
    },
    "lat": 54.4131542,
    "lon": 18.55866894
  },
  {
    "cemetery": "Cmentarz w Oliwie",
    "city": "Gdańsk",
    "surname": "Iszora",
    "firstName": "Eugeniusz",
    "fraternities": [
      "Konwent Polonia"
    ],
    "dateOfBirth": "1889-10-23",
    "dateOfDeath": null,
    "location": {
      "sector": "9",
      "row": "14",
      "grave": "4",
      "area": null
    },
    "lat": 54.41313781,
    "lon": 18.55885535
  },
  {
    "cemetery": "Cmentarz w Oliwie",
    "city": "Gdańsk",
    "surname": "Czarnocki",
    "firstName": "Waldemar",
    "fraternities": [
      "Batoria"
    ],
    "dateOfBirth": "1915-09-29",
    "dateOfDeath": "1998-06-10",
    "location": {
      "sector": "4",
      "row": "14",
      "grave": "9",
      "area": null
    },
    "lat": 54.4130826,
    "lon": 18.55799358
  },
  {
    "cemetery": "Cmentarz w Oliwie",
    "city": "Gdańsk",
    "surname": "Gajewski",
    "firstName": "Adam",
    "fraternities": [
      "Hetmania"
    ],
    "dateOfBirth": "1909-06-17",
    "dateOfDeath": "1972-04-05",
    "location": {
      "sector": "22",
      "row": "17",
      "grave": "8",
      "area": null
    },
    "lat": 54.41422303,
    "lon": 18.55917768
  },
  {
    "cemetery": "Cmentarz w Oliwie",
    "city": "Gdańsk",
    "surname": "Gembarski",
    "firstName": "Paweł",
    "fraternities": [
      "Rosevia"
    ],
    "dateOfBirth": "1907-04-11",
    "dateOfDeath": "1951-05-09",
    "location": {
      "sector": "12",
      "row": "5",
      "grave": "3",
      "area": null
    },
    "lat": 54.41379716,
    "lon": 18.55775314
  },
  {
    "cemetery": "Cmentarz w Oliwie",
    "city": "Gdańsk",
    "surname": "Giełdzik",
    "firstName": "Henryk",
    "fraternities": [
      "Rosevia"
    ],
    "dateOfBirth": "1906-04-12",
    "dateOfDeath": "1981-10-11",
    "location": {
      "sector": "11",
      "row": "4",
      "grave": "2",
      "area": null
    },
    "lat": 54.41307081,
    "lon": 18.56013766
  },
  {
    "cemetery": "Cmentarz w Oliwie",
    "city": "Gdańsk",
    "surname": "Kalinowski",
    "firstName": "Bolesław",
    "fraternities": [
      "ZAG Wisła"
    ],
    "dateOfBirth": "1899-10-20",
    "dateOfDeath": "1987-08-26",
    "location": {
      "sector": "12",
      "row": "12",
      "grave": "10",
      "area": null
    },
    "lat": 54.41374261,
    "lon": 18.55808608
  },
  {
    "cemetery": "Cmentarz w Oliwie",
    "city": "Gdańsk",
    "surname": "Kniat",
    "firstName": "Kazimierz",
    "fraternities": [
      "ZAG Wisła"
    ],
    "dateOfBirth": "1897-03-02",
    "dateOfDeath": "1964-02-03",
    "location": {
      "sector": "5",
      "row": "9",
      "grave": "1",
      "area": null
    },
    "lat": 54.41291844,
    "lon": 18.55809651
  },
  {
    "cemetery": "Cmentarz w Oliwie",
    "city": "Gdańsk",
    "surname": "Weideman",
    "firstName": "Stanisław",
    "fraternities": [
      "Filomatia Varsoviensis"
    ],
    "dateOfBirth": "1908-05-03",
    "dateOfDeath": "1984-09-22",
    "location": {
      "sector": "10",
      "row": "B",
      "grave": "19",
      "area": null
    },
    "lat": 54.41327807,
    "lon": 18.55950428
  },
  {
    "cemetery": "Cmentarz w Gdyni Orłowie",
    "city": "Gdynia",
    "surname": "Brzeski",
    "firstName": "Zdzisław",
    "fraternities": [
      "Konwent Polonia"
    ],
    "dateOfBirth": "1901-11-23",
    "dateOfDeath": "1968-11-15",
    "location": {
      "sector": "VII",
      "row": "2",
      "grave": "4",
      "area": null
    },
    "lat": 54.48605085,
    "lon": 18.54274067
  },
  {
    "cemetery": "Cmentarz w Gdyni Orłowie",
    "city": "Gdynia",
    "surname": "Stomma",
    "firstName": "Władysław",
    "fraternities": [
      "Lauda"
    ],
    "dateOfBirth": "1903-08-31",
    "dateOfDeath": "1981-01-31",
    "location": {
      "sector": "V",
      "row": "G",
      "grave": "3",
      "area": null
    },
    "lat": 54.48583279,
    "lon": 18.54242537
  },
  {
    "cemetery": "Cmentarz w Gdyni Witominie",
    "city": "Gdynia",
    "surname": "Sarnecki",
    "firstName": "Władysław",
    "fraternities": [
      "Konwent Polonia"
    ],
    "dateOfBirth": "1908-07-17",
    "dateOfDeath": "1994-06-19",
    "location": {
      "sector": "57",
      "row": "11",
      "grave": "78",
      "area": null
    },
    "lat": 54.50732913,
    "lon": 18.51343004
  },
  {
    "cemetery": "Cmentarz w Gdyni Witominie",
    "city": "Gdynia",
    "surname": "Cetkowski",
    "firstName": "Henryk",
    "fraternities": [
      "Chrobria"
    ],
    "dateOfBirth": "1883-11-07",
    "dateOfDeath": "1955-06-27",
    "location": {
      "sector": "61",
      "row": "72",
      "grave": "7",
      "area": null
    },
    "lat": 54.50832683,
    "lon": 18.51580499
  },
  {
    "cemetery": "Cmentarz w Gdyni Witominie",
    "city": "Gdynia",
    "surname": "Janicki",
    "firstName": "Wacław",
    "fraternities": [
      "Baltia"
    ],
    "dateOfBirth": "1912-08-30",
    "dateOfDeath": "1984-06-20",
    "location": {
      "sector": "55",
      "row": "66",
      "grave": "1",
      "area": null
    },
    "lat": 54.5067866,
    "lon": 18.51498524
  },
  {
    "cemetery": "Cmentarz w Gdyni Witominie",
    "city": "Gdynia",
    "surname": "Jegorow",
    "firstName": "Włodzimierz",
    "fraternities": [
      "Gedania"
    ],
    "dateOfBirth": "1906-06-23",
    "dateOfDeath": "1960-06-14",
    "location": {
      "sector": "73",
      "row": "5",
      "grave": "6_1",
      "area": null
    },
    "lat": 54.50878429,
    "lon": 18.5168618
  },
  {
    "cemetery": "Cmentarz w Gdyni Witominie",
    "city": "Gdynia",
    "surname": "Kajkowski",
    "firstName": "Zbigniew",
    "fraternities": [
      "Lechia"
    ],
    "dateOfBirth": "1905-01-23",
    "dateOfDeath": "1972-04-08",
    "location": {
      "sector": "5",
      "row": "8",
      "grave": "12",
      "area": null
    },
    "lat": 54.51146416,
    "lon": 18.51958318
  },
  {
    "cemetery": "Cmentarz w Gdyni Witominie",
    "city": "Gdynia",
    "surname": "Karolczak",
    "firstName": "Zygmunt",
    "fraternities": [
      "Baltia",
      "Filomatia Posnaniensis"
    ],
    "dateOfBirth": "1907-04-07",
    "dateOfDeath": "1988-04-08",
    "location": {
      "sector": "56",
      "row": "18",
      "grave": "92",
      "area": null
    },
    "lat": 54.5069769,
    "lon": 18.5130589
  },
  {
    "cemetery": "Cmentarz w Gdyni Witominie",
    "city": "Gdynia",
    "surname": "Kłobski",
    "firstName": "Bohdan",
    "fraternities": [
      "Concordia"
    ],
    "dateOfBirth": "1912-10-06",
    "dateOfDeath": "1998-12-27",
    "location": {
      "sector": "71",
      "row": "25",
      "grave": "1",
      "area": null
    },
    "lat": 54.50981018,
    "lon": 18.51436152
  },
  {
    "cemetery": "Cmentarz w Gdyni Witominie",
    "city": "Gdynia",
    "surname": "Kołodziejski",
    "firstName": "Brunon",
    "fraternities": [
      "Masovia"
    ],
    "dateOfBirth": "1904-01-25",
    "dateOfDeath": "1969-12-02",
    "location": {
      "sector": "1",
      "row": "47",
      "grave": "19",
      "area": null
    },
    "lat": 54.50985148,
    "lon": 18.51820362
  },
  {
    "cemetery": "Cmentarz w Gdyni Witominie",
    "city": "Gdynia",
    "surname": "Łazowski",
    "firstName": "Adam",
    "fraternities": [
      "Gasconia"
    ],
    "dateOfBirth": "1910-10-03",
    "dateOfDeath": "1966-03-24",
    "location": {
      "sector": "66",
      "row": "3",
      "grave": "71",
      "area": null
    },
    "lat": 54.50944086,
    "lon": 18.51575129
  },
  {
    "cemetery": "Cmentarz w Gdyni Witominie",
    "city": "Gdynia",
    "surname": "Majewski",
    "firstName": "Franciszek",
    "fraternities": [
      "Pomerania"
    ],
    "dateOfBirth": "1902-01-12",
    "dateOfDeath": "1984-03-02",
    "location": {
      "sector": "63",
      "row": "12",
      "grave": "30",
      "area": null
    },
    "lat": 54.50908625,
    "lon": 18.51599847
  },
  {
    "cemetery": "Cmentarz w Gdyni Witominie",
    "city": "Gdynia",
    "surname": "Oziewicz",
    "firstName": "Leonard Czesław",
    "fraternities": [
      "Polesia"
    ],
    "dateOfBirth": "1913-03-24",
    "dateOfDeath": "1987-06-16",
    "location": {
      "sector": "51",
      "row": "25",
      "grave": "11",
      "area": null
    },
    "lat": 54.50813455,
    "lon": 18.51618159
  },
  {
    "cemetery": "Cmentarz w Gdyni Witominie",
    "city": "Gdynia",
    "surname": "Pernak",
    "firstName": "Zygmunt",
    "fraternities": [
      "Posnania"
    ],
    "dateOfBirth": "1901-05-06",
    "dateOfDeath": "1965-08-17",
    "location": {
      "sector": "67",
      "row": "37",
      "grave": "8",
      "area": null
    },
    "lat": 54.5084229,
    "lon": 18.51369963
  },
  {
    "cemetery": "Cmentarz w Gdyni Witominie",
    "city": "Gdynia",
    "surname": "Piechocki",
    "firstName": "Jan",
    "fraternities": [
      "Magna-Polonia"
    ],
    "dateOfBirth": "1905-05-11",
    "dateOfDeath": "1987-07-19",
    "location": {
      "sector": "66",
      "row": "65",
      "grave": "54",
      "area": null
    },
    "lat": 54.50866838,
    "lon": 18.51544445
  },
  {
    "cemetery": "Cmentarz w Gdyni Witominie",
    "city": "Gdynia",
    "surname": "Roszczynialski",
    "firstName": "Wiktor",
    "fraternities": [
      "Magna-Polonia"
    ],
    "dateOfBirth": "1900-12-20",
    "dateOfDeath": "1972-10-22",
    "location": {
      "sector": "12",
      "row": "16",
      "grave": "231",
      "area": null
    },
    "lat": 54.51007109,
    "lon": 18.51735173
  },
  {
    "cemetery": "Cmentarz w Gdyni Witominie",
    "city": "Gdynia",
    "surname": "Rutkowski",
    "firstName": "Władysław",
    "fraternities": [
      "Masovia"
    ],
    "dateOfBirth": "1916-10-06",
    "dateOfDeath": "2011-02-21",
    "location": {
      "sector": "23",
      "row": "31",
      "grave": "7",
      "area": null
    },
    "lat": 54.5111443,
    "lon": 18.51578097
  },
  {
    "cemetery": "Cmentarz w Gdyni Witominie",
    "city": "Gdynia",
    "surname": "Staśkiewicz",
    "firstName": "Leon",
    "fraternities": [
      "Magna-Polonia"
    ],
    "dateOfBirth": "1910-06-28",
    "dateOfDeath": "1997-08-02",
    "location": {
      "sector": "67",
      "row": "35",
      "grave": "12",
      "area": null
    },
    "lat": 54.50839008,
    "lon": 18.51374897
  },
  {
    "cemetery": "Cmentarz w Gdyni Witominie",
    "city": "Gdynia",
    "surname": "Szwedowski",
    "firstName": "Zygmunt",
    "fraternities": [
      "Baltia"
    ],
    "dateOfBirth": "1899-05-06",
    "dateOfDeath": "1976-05-23",
    "location": {
      "sector": "63",
      "row": "74",
      "grave": "51",
      "area": null
    },
    "lat": 54.50924884,
    "lon": 18.51687743
  },
  {
    "cemetery": "Cmentarz w Gdyni Witominie",
    "city": "Gdynia",
    "surname": "Talaśka",
    "firstName": "Józef",
    "fraternities": [
      "Baltia"
    ],
    "dateOfBirth": "1916-01-27",
    "dateOfDeath": "1985-10-18",
    "location": {
      "sector": "22",
      "row": "58",
      "grave": "4",
      "area": null
    },
    "lat": 54.51068076,
    "lon": 18.51604145
  },
  {
    "cemetery": "Cmentarz w Gdyni Witominie",
    "city": "Gdynia",
    "surname": "Teisseyre",
    "firstName": "Zdzisław",
    "fraternities": [
      "Gasconia"
    ],
    "dateOfBirth": "1903-05-11",
    "dateOfDeath": "1985-08-02",
    "location": {
      "sector": "55",
      "row": "53",
      "grave": "12",
      "area": null
    },
    "lat": 54.50690024,
    "lon": 18.51438068
  },
  {
    "cemetery": "Cmentarz w Gdyni Witominie",
    "city": "Gdynia",
    "surname": "Tutek",
    "firstName": "Stanisław",
    "fraternities": [
      "Obotritia"
    ],
    "dateOfBirth": "1920-08-06",
    "dateOfDeath": "1998-08-24",
    "location": {
      "sector": "71",
      "row": "19",
      "grave": "53",
      "area": null
    },
    "lat": 54.50972222,
    "lon": 18.51433987
  },
  {
    "cemetery": "Cmentarz w Gdyni Witominie",
    "city": "Gdynia",
    "surname": "Wegner",
    "firstName": "Franciszek",
    "fraternities": [
      "Baltia"
    ],
    "dateOfBirth": "1899-04-03",
    "dateOfDeath": "1946-05-11",
    "location": {
      "sector": "2",
      "row": "16",
      "grave": "152",
      "area": null
    },
    "lat": 54.51059948,
    "lon": 18.51786331
  },
  {
    "cemetery": "Cmentarz w Gdyni Witominie",
    "city": "Gdynia",
    "surname": "Wlazłowski",
    "firstName": "Zbigniew",
    "fraternities": [
      "Vesalia"
    ],
    "dateOfBirth": "1916-08-30",
    "dateOfDeath": "1996-04-14",
    "location": {
      "sector": "59",
      "row": "33",
      "grave": "5",
      "area": null
    },
    "lat": 54.50832533,
    "lon": 18.51313738
  },
  {
    "cemetery": "Cmentarz w Gdyni Witominie",
    "city": "Gdynia",
    "surname": "Zabrodzki",
    "firstName": "Czesław",
    "fraternities": [
      "ZAG Wisła"
    ],
    "dateOfBirth": "1913-12-20",
    "dateOfDeath": "1993-02-25",
    "location": {
      "sector": "75",
      "row": "12",
      "grave": "22_1",
      "area": null
    },
    "lat": 54.51051715,
    "lon": 18.51252325
  },
  {
    "cemetery": "Cmentarz w Gdyni Witominie",
    "city": "Gdynia",
    "surname": "Hozakowski",
    "firstName": "Jerzy Sykstus",
    "fraternities": [
      "Primislavia"
    ],
    "dateOfBirth": "1907-03-28",
    "dateOfDeath": "1959-06-15",
    "location": {
      "sector": "78",
      "row": "5",
      "grave": "30",
      "area": null
    },
    "lat": 54.50917091,
    "lon": 18.51312538
  },
  {
    "cemetery": "Cmentarz Katolicki w Sopocie",
    "city": "Sopot",
    "surname": "Doerffer",
    "firstName": "Jerzy Wojciech",
    "fraternities": [
      "Rosevia"
    ],
    "dateOfBirth": "1918-04-21",
    "dateOfDeath": "2006-08-09",
    "location": {
      "sector": "C1",
      "row": "3",
      "grave": "1",
      "area": null
    },
    "lat": 54.44968275,
    "lon": 18.54890569
  },
  {
    "cemetery": "Cmentarz Katolicki w Sopocie",
    "city": "Sopot",
    "surname": "Lisiecki",
    "firstName": "Tadeusz",
    "fraternities": [
      "Lechia"
    ],
    "dateOfBirth": "1906-07-22",
    "dateOfDeath": "1978-02-19",
    "location": {
      "sector": "B6",
      "row": "13",
      "grave": "16",
      "area": null
    },
    "lat": 54.44996228,
    "lon": 18.55029918
  },
  {
    "cemetery": "Cmentarz Katolicki w Sopocie",
    "city": "Sopot",
    "surname": "Rubach",
    "firstName": "Stefan",
    "fraternities": [
      "Kujawja"
    ],
    "dateOfBirth": "1911-10-06",
    "dateOfDeath": "1951-07-12",
    "location": {
      "sector": "F5",
      "row": "5",
      "grave": "5",
      "area": null
    },
    "lat": 54.44958237,
    "lon": 18.54771129
  },
  {
    "cemetery": "Cmentarz Katolicki w Sopocie",
    "city": "Sopot",
    "surname": "Grafka",
    "firstName": "Brunon",
    "fraternities": [
      "Magna-Polonia"
    ],
    "dateOfBirth": "1900-01-04",
    "dateOfDeath": "1964-11-05",
    "location": {
      "sector": "E4",
      "row": "10",
      "grave": "2",
      "area": null
    },
    "lat": 54.45000285,
    "lon": 18.54766128
  },
  {
    "cemetery": "Cmentarz Katolicki w Sopocie",
    "city": "Sopot",
    "surname": "Karpiński",
    "firstName": "Jerzy",
    "fraternities": [
      "Sparta"
    ],
    "dateOfBirth": "1902-11-18",
    "dateOfDeath": "1975-10-08",
    "location": {
      "sector": "F1",
      "row": "1",
      "grave": "21",
      "area": null
    },
    "lat": 54.44948576,
    "lon": 18.54888346
  },
  {
    "cemetery": "Cmentarz Katolicki w Sopocie",
    "city": "Sopot",
    "surname": "Krzywicki",
    "firstName": "Wiesław",
    "fraternities": [
      "Patria"
    ],
    "dateOfBirth": "1911-06-18",
    "dateOfDeath": "1985-05-11",
    "location": {
      "sector": "F3",
      "row": "2",
      "grave": "2",
      "area": null
    },
    "lat": 54.44970085,
    "lon": 18.54825461
  },
  {
    "cemetery": "Cmentarz Katolicki w Sopocie",
    "city": "Sopot",
    "surname": "Cholewo",
    "firstName": "Antoni",
    "fraternities": [
      "Konwent Polonia"
    ],
    "dateOfBirth": "1884-02-16",
    "dateOfDeath": "1954-04-24",
    "location": {
      "sector": "F2",
      "row": "E",
      "grave": "3",
      "area": null
    },
    "lat": 54.44923236,
    "lon": 18.54843814
  },
  {
    "cemetery": "Cmentarz Katolicki w Sopocie",
    "city": "Sopot",
    "surname": "Ciechowski",
    "firstName": "Juliusz",
    "fraternities": [
      "Arkonia"
    ],
    "dateOfBirth": "1910-02-10",
    "dateOfDeath": "1958-06-16",
    "location": {
      "sector": "C6",
      "row": "10",
      "grave": "18",
      "area": null
    },
    "lat": 54.44923652,
    "lon": 18.55035461
  },
  {
    "cemetery": "Cmentarz Katolicki w Sopocie",
    "city": "Sopot",
    "surname": "Jaroszewicz",
    "firstName": "Stanisław",
    "fraternities": [
      "Konwent Polonia"
    ],
    "dateOfBirth": "1911-06-22",
    "dateOfDeath": "1971-09-16",
    "location": {
      "sector": "E6",
      "row": "1",
      "grave": "7",
      "area": null
    },
    "lat": 54.44997771,
    "lon": 18.54794882
  },
  {
    "cemetery": "Cmentarz Katolicki w Sopocie",
    "city": "Sopot",
    "surname": "Józefowicz",
    "firstName": "Wacław",
    "fraternities": [
      "Konwent Polonia"
    ],
    "dateOfBirth": null,
    "dateOfDeath": null,
    "location": {
      "sector": null,
      "row": null,
      "grave": null,
      "area": null
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Katolicki w Sopocie",
    "city": "Sopot",
    "surname": "Łapin",
    "firstName": "Konrad",
    "fraternities": [
      "Lauda"
    ],
    "dateOfBirth": "1915-01-26",
    "dateOfDeath": "2009-05-02",
    "location": {
      "sector": "G4",
      "row": "1",
      "grave": "8",
      "area": null
    },
    "lat": 54.45043762,
    "lon": 18.54697632
  },
  {
    "cemetery": "Cmentarz Katolicki w Sopocie",
    "city": "Sopot",
    "surname": "Mintowt-Czyż",
    "firstName": "Józef",
    "fraternities": [
      "Arkonia"
    ],
    "dateOfBirth": "1898-07-06",
    "dateOfDeath": "1965-12-31",
    "location": {
      "sector": "F1",
      "row": "3",
      "grave": "6",
      "area": null
    },
    "lat": 54.4497033,
    "lon": 18.54877308
  },
  {
    "cemetery": "Cmentarz Katolicki w Sopocie",
    "city": "Sopot",
    "surname": "Skawiński",
    "firstName": "Bolesław",
    "fraternities": [
      "Konwent Polonia"
    ],
    "dateOfBirth": "1915-11-13",
    "dateOfDeath": "2002-08-01",
    "location": {
      "sector": "B6",
      "row": "11",
      "grave": "15",
      "area": null
    },
    "lat": 54.45001519,
    "lon": 18.55027499
  },
  {
    "cemetery": "Cmentarz Katolicki w Sopocie",
    "city": "Sopot",
    "surname": "Szacki",
    "firstName": "Zbigniew",
    "fraternities": [
      "Konwent Polonia"
    ],
    "dateOfBirth": null,
    "dateOfDeath": null,
    "location": {
      "sector": null,
      "row": null,
      "grave": null,
      "area": null
    },
    "lat": null,
    "lon": null
  },
  {
    "cemetery": "Cmentarz Katolicki w Sopocie",
    "city": "Sopot",
    "surname": "Tymiński",
    "firstName": "Witold",
    "fraternities": [
      "Konwent Polonia"
    ],
    "dateOfBirth": "1919-08-19",
    "dateOfDeath": "1996-05-06",
    "location": {
      "sector": "G1",
      "row": "11",
      "grave": "2",
      "area": null
    },
    "lat": 54.4505353,
    "lon": 18.54759124
  },
  {
    "cemetery": "Cmentarz Katolicki w Sopocie",
    "city": "Sopot",
    "surname": "Woroniecki",
    "firstName": "Michał",
    "fraternities": [
      "Konwent Polonia"
    ],
    "dateOfBirth": "1949-06-20",
    "dateOfDeath": "2021-08-13",
    "location": {
      "sector": "E1",
      "row": "2",
      "grave": "8",
      "area": null
    },
    "lat": 54.45011528,
    "lon": 18.54871512
  },
  {
    "cemetery": "Cmentarz Komunalny w Sopocie",
    "city": "Sopot",
    "surname": "Bądzkiewicz",
    "firstName": "Janusz",
    "fraternities": [
      "Konwent Polonia"
    ],
    "dateOfBirth": "1904-03-30",
    "dateOfDeath": "1974-08-15",
    "location": {
      "sector": "H1",
      "row": "2",
      "grave": "10",
      "area": null
    },
    "lat": 54.45182493,
    "lon": 18.54575593
  },
  {
    "cemetery": "Cmentarz Komunalny w Sopocie",
    "city": "Sopot",
    "surname": "Joczyn",
    "firstName": "Bruno",
    "fraternities": [
      "Lauda"
    ],
    "dateOfBirth": "1908-01-19",
    "dateOfDeath": "1976-10-18",
    "location": {
      "sector": "L1",
      "row": "5",
      "grave": "2",
      "area": null
    },
    "lat": 54.45189854,
    "lon": 18.54512615
  },
  {
    "cemetery": "Cmentarz Komunalny w Sopocie",
    "city": "Sopot",
    "surname": "Majewski",
    "firstName": "Józef",
    "fraternities": [
      "Lauda"
    ],
    "dateOfBirth": "1905-08-26",
    "dateOfDeath": "1984-06-09",
    "location": {
      "sector": "F2",
      "row": "1",
      "grave": "8",
      "area": null
    },
    "lat": 54.45163723,
    "lon": 18.54686992
  },
  {
    "cemetery": "Cmentarz Komunalny w Sopocie",
    "city": "Sopot",
    "surname": "Osiecimski",
    "firstName": "Roman",
    "fraternities": [
      "Arkonia"
    ],
    "dateOfBirth": "1911-01-15",
    "dateOfDeath": "1979-11-20",
    "location": {
      "sector": "K",
      "row": "3",
      "grave": "11",
      "area": null
    },
    "lat": 54.45127675,
    "lon": 18.54580604
  },
  {
    "cemetery": "Cmentarz Komunalny w Sopocie",
    "city": "Sopot",
    "surname": "Bielecki",
    "firstName": "Mieczysław",
    "fraternities": [
      "Obotritia"
    ],
    "dateOfBirth": "1916-02-02",
    "dateOfDeath": "2003-05-15",
    "location": {
      "sector": "B4",
      "row": "1",
      "grave": "1",
      "area": null
    },
    "lat": 54.45222555,
    "lon": 18.54792436
  },
  {
    "cemetery": "Cmentarz Komunalny w Sopocie",
    "city": "Sopot",
    "surname": "Buchholz",
    "firstName": "Brunon",
    "fraternities": [
      "Laconia"
    ],
    "dateOfBirth": "1921-04-01",
    "dateOfDeath": "2015-01-26",
    "location": {
      "sector": "L3",
      "row": "4",
      "grave": "21",
      "area": null
    },
    "lat": 54.45202634,
    "lon": 18.54324091
  },
  {
    "cemetery": "Cmentarz Komunalny w Sopocie",
    "city": "Sopot",
    "surname": "Chudecki",
    "firstName": "Franciszek",
    "fraternities": [
      "Piłsudia"
    ],
    "dateOfBirth": "1906-08-08",
    "dateOfDeath": "1999-07-15",
    "location": {
      "sector": "S",
      "row": "13",
      "grave": "2",
      "area": null
    },
    "lat": 54.45354725,
    "lon": 18.54438032
  },
  {
    "cemetery": "Cmentarz Komunalny w Sopocie",
    "city": "Sopot",
    "surname": "Dudziński",
    "firstName": "Brunon",
    "fraternities": [
      "ZAG Wisła"
    ],
    "dateOfBirth": "1909-11-15",
    "dateOfDeath": "1986-06-29",
    "location": {
      "sector": "L1",
      "row": "8",
      "grave": "1A",
      "area": null
    },
    "lat": 54.45197391,
    "lon": 18.54513131
  },
  {
    "cemetery": "Cmentarz Komunalny w Sopocie",
    "city": "Sopot",
    "surname": "Dunin-Wąsowicz",
    "firstName": "Witold",
    "fraternities": [
      "Gasconia"
    ],
    "dateOfBirth": "1909-03-21",
    "dateOfDeath": "1993-11-21",
    "location": {
      "sector": "N5",
      "row": "1",
      "grave": "12",
      "area": null
    },
    "lat": 54.45244434,
    "lon": 18.54273236
  },
  {
    "cemetery": "Cmentarz Komunalny w Sopocie",
    "city": "Sopot",
    "surname": "Łubieński",
    "firstName": "Henryk",
    "fraternities": [
      "Primislavia"
    ],
    "dateOfBirth": "1907-08-02",
    "dateOfDeath": "1990-05-15",
    "location": {
      "sector": "M",
      "row": "3b",
      "grave": "1",
      "area": null
    },
    "lat": 54.4522031,
    "lon": 18.5435232
  },
  {
    "cemetery": "Cmentarz Komunalny w Sopocie",
    "city": "Sopot",
    "surname": "Mroczkowski",
    "firstName": "Stanisław",
    "fraternities": [
      "Gedania"
    ],
    "dateOfBirth": "1911-05-21",
    "dateOfDeath": "1978-04-15",
    "location": {
      "sector": "O1",
      "row": "3",
      "grave": "43",
      "area": null
    },
    "lat": 54.45311558,
    "lon": 18.54600339
  },
  {
    "cemetery": "Cmentarz Komunalny w Sopocie",
    "city": "Sopot",
    "surname": "Nowakowski",
    "firstName": "Aleksander",
    "fraternities": [
      "Gedania"
    ],
    "dateOfBirth": "1906-10-07",
    "dateOfDeath": "1993-03-23",
    "location": {
      "sector": "N4",
      "row": "15",
      "grave": "14",
      "area": null
    },
    "lat": 54.45308842,
    "lon": 18.54333632
  },
  {
    "cemetery": "Cmentarz Komunalny w Sopocie",
    "city": "Sopot",
    "surname": "Sowa",
    "firstName": "Jan Zbigniew",
    "fraternities": [
      "Vesalia"
    ],
    "dateOfBirth": "1916-12-27",
    "dateOfDeath": "2000-04-19",
    "location": {
      "sector": "N3",
      "row": "13",
      "grave": "20",
      "area": null
    },
    "lat": 54.45342938,
    "lon": 18.5434082
  }
]
</script>

<template>
  <div class="burials-view ls-page">
    <QCard style="height: 100%" flat bordered>
      <QTable
        style="height: 100%"
        :title="i18n.t('burials.title')"
        :rows="rows"
        :columns="columns"
        row-key="name"
        binary-state-sort
        hide-pagination
        :rows-per-page-options="[0]"
        :grid="$q.screen.lt.md"
      />
    </QCard>
  </div>
</template>

<style scoped>

</style>
