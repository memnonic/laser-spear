<script setup lang="ts">
import { QCard, QTable, type QTableColumn } from 'quasar'

interface Fraternity {
  name: string
  motto: string
  founded: string
  foundedIn: string
  colors: string[]
  colorsRtl: boolean
  isActive: boolean
}

const columns: QTableColumn<Fraternity>[] = [
  {
    name: 'isActive',
    label: 'Is active',
    field: (row) => (row.isActive ? 'Yes' : 'No'),
    align: 'center',
    sortable: true,
  },
  {
    name: 'colors',
    label: 'Colors',
    field: 'colors',
    align: 'center',
    sortable: false,
  },
  {
    name: 'name',
    label: 'Name',
    field: (row) => row.name,
    align: 'left',
    sortable: true,
  },
  {
    name: 'motto',
    label: 'Motto',
    field: (row) => row.motto,
    align: 'left',
    sortable: false,
  },
  {
    name: 'founded',
    label: 'Founding date',
    field: (row) => row.founded,
    align: 'right',
    sortable: true,
  },
  {
    name: 'foundedIn',
    label: 'Founding city',
    field: (row) => row.foundedIn,
    align: 'left',
    sortable: true,
  },
]

const rows: Fraternity[] = [
  {
    name: 'Konwent Polonia',
    motto: 'Jeden za wszystkich, wszyscy za jednego',
    founded: '1828-01-01',
    foundedIn: 'Dorpat (Tartu), Estonia',
    colors: ['#b60063', '#6994b8', '#ffffff'],
    colorsRtl: false,
    isActive: true,
  },
  {
    name: 'Arkonia',
    motto: 'Veritate ac labore',
    founded: '1879-05-09',
    foundedIn: 'Ryga, Łotwa',
    colors: ['#00337c', '#ffffff', '#0c753b'],
    colorsRtl: true,
    isActive: true,
  },
  {
    name: 'Welecja',
    motto: 'Viribus unitis - suum cuique',
    founded: '1883-10-26',
    foundedIn: 'Ryga, Łotwa',
    colors: ['#44916c', '#ffffff', '#56bbed'],
    colorsRtl: true,
    isActive: true,
  },
  {
    name: 'Jagiellonia',
    motto: 'Jeden za wszystkich, wszyscy za jednego',
    founded: '1910-05-28',
    foundedIn: 'Wiedeń, Austria',
    colors: ['#b60063', '#ffffff', '#6994b8'],
    colorsRtl: true,
    isActive: true,
  },
  {
    name: 'Lauda',
    motto: 'Braterstwo i Prawda',
    founded: '1928-05-03',
    foundedIn: 'Kowno, Litwa',
    colors: ['#00337c', '#ffffff', '#e93137'],
    colorsRtl: true,
    isActive: true,
  },
  {
    name: 'Z.A.G. Wisła',
    motto: 'Omnia pro Patria',
    founded: '1913-05-24',
    foundedIn: 'Gdańsk, Polska',
    colors: ['#ffffff', '#b60063'],
    colorsRtl: false,
    isActive: true,
  },
  {
    name: 'Rosevia',
    motto: 'In mari salus Rei Publicae',
    founded: '1925-01-01',
    foundedIn: 'Gdańsk, Polska',
    colors: ['#6b3f2c', '#ffffff', '#fcd60a'],
    colorsRtl: true,
    isActive: false,
  },
  {
    name: 'Baltia',
    motto: 'Salus Reipublicae suprema lex esto',
    founded: '1921-12-07',
    foundedIn: 'Poznań, Polska',
    colors: ['#822626', '#ffffff', '#fcd60a'],
    colorsRtl: true,
    isActive: true,
  },
  {
    name: 'Masovia',
    motto: 'Pro Patria et Masovia',
    founded: '1924-02-22',
    foundedIn: 'Poznań, Polska',
    colors: ['#e93137', '#ffffff', '#44916c'],
    colorsRtl: true,
    isActive: false,
  },
  {
    name: 'Gedania',
    motto: 'Veritate ac labore',
    founded: '1922-02-02',
    foundedIn: 'Gdańsk, Polska',
    colors: ['#6994b8', '#ffffff', '#e93137'],
    colorsRtl: true,
    isActive: false,
  },
  {
    name: 'Gasconia',
    motto: 'Malheur a qui me touche!',
    founded: '1924-01-10',
    foundedIn: 'Lwów, Ukraina',
    colors: ['#dd9ecd', '#fcd60a', '#000000'],
    colorsRtl: true,
    isActive: false,
  },
  {
    name: 'Magna-Polonia',
    motto: 'Omnia Pro Polonia',
    founded: '1920-03-13',
    foundedIn: 'Poznań, Polska',
    colors: ['#ffffff', '#b60063', '#6994b8'],
    colorsRtl: true,
    isActive: true,
  },
  {
    name: 'Kujawja',
    motto: 'Potęga w braterstwie, honor na ostrzu miecza',
    founded: '1919-10-22',
    foundedIn: 'Bydgoszcz, Polska',
    colors: ['#1f1f79', '#6994b8', '#c21e1f'],
    colorsRtl: true,
    isActive: true,
  },
  {
    name: 'Patria',
    motto: 'Homo non sibi natus, sed Patriae',
    founded: '1921-05-02',
    foundedIn: 'Warszawa, Polska',
    colors: ['#9d3e45', '#ffffff', '#44916c'],
    colorsRtl: true,
    isActive: false,
  },
  {
    name: 'Pomerania',
    motto: 'In scientia veritas, in amititia unitas',
    founded: '1923-12-08',
    foundedIn: 'Poznań, Polska',
    colors: ['#6994b8', '#ffffff', '#44916c'],
    colorsRtl: true,
    isActive: false,
  },
  {
    name: 'Lechia',
    motto: 'Honor i Ojczyzna',
    founded: '1920-06-15',
    foundedIn: 'Poznań, Polska',
    colors: ['#0e509e', '#ffffff', '#ba6127'],
    colorsRtl: true,
    isActive: true,
  },
  {
    name: 'Helania',
    motto: 'In necessariis - unitas, in dubiis - libertas, in omnibus autem caritas',
    founded: '1922-05-30',
    foundedIn: 'Gdańsk, Polska',
    colors: ['#7a7d80', '#fcd60a', '#b803ff'],
    colorsRtl: true,
    isActive: false,
  },
  {
    name: 'Batoria',
    motto: 'Scientia - Patria - Honor',
    founded: '1922-01-01',
    foundedIn: 'Wilno, Litwa',
    colors: ['#536f8d', '#ffffff', '#fcd60a'],
    colorsRtl: true,
    isActive: false,
  },
  {
    name: 'Vilnensia',
    motto: 'Unitas laboris, nobilitas animi, res futurae Poloniae',
    founded: '1925-04-01',
    foundedIn: 'Wilno, Litwa',
    colors: ['#ef8237', '#ace1af', '#ffffff'],
    colorsRtl: true,
    isActive: false,
  },
  {
    name: 'Leonidania',
    motto: 'Przez pracę, braterstwo i jedność narodową ku dobru Ojczyzny',
    founded: '1927-03-01',
    foundedIn: 'Wilno, Litwa',
    colors: ['#006600', '#b60063', '#ffffff'],
    colorsRtl: true,
    isActive: false,
  },
  {
    name: 'Slavia',
    motto: 'Polska dla Polaków',
    founded: '1931-12-12',
    foundedIn: 'Lwów, Ukraina',
    colors: ['#0000a0', '#fcd60a', '#9d3e45'],
    colorsRtl: true,
    isActive: false,
  },
  {
    name: 'Chrobria',
    motto: 'Honori et amicitiae',
    founded: '1921-03-28',
    foundedIn: 'Poznań, Polska',
    colors: ['#000000', '#44916c', '#ffffff'],
    colorsRtl: true,
    isActive: true,
  },
  {
    name: 'Polesia',
    motto: 'Fines Poloniae Polonici Sunto',
    founded: '1925-01-05',
    foundedIn: 'Brześć nad Bugiem, Białoruś',
    colors: ['#44916c', '#ffffff', '#fcd60a'],
    colorsRtl: true,
    isActive: false,
  },
  {
    name: 'Obotritia',
    motto: 'Najwyższym prawem dobro Narodu',
    founded: '1927-02-17',
    foundedIn: 'Lwów, Ukraina',
    colors: ['#0f52ba', '#b8b9bb', '#610503'],
    colorsRtl: true,
    isActive: false,
  },
  {
    name: 'Vesalia',
    motto: 'Pro Poloniae bono, fraternitate et labore',
    founded: '1929-10-15',
    foundedIn: 'Kraków, Polska',
    colors: ['#822626', '#ffffff', '#4040ff'],
    colorsRtl: true,
    isActive: false,
  },
  {
    name: 'Piłsudia',
    motto: 'Społem przez wydtrwałą i uczciwą pracę ku chwale i potędze Ojczyzny',
    founded: '1926-01-01',
    foundedIn: 'Wilno, Litwa',
    colors: ['#8794a6', '#b60063', '#ffffff'],
    colorsRtl: true,
    isActive: false,
  },
  {
    name: 'Varsovia',
    motto: 'Virtute et assiduitate',
    founded: '1922-01-18',
    foundedIn: 'Warszawa, Polska',
    colors: ['#a62121', '#fcd60a', '#ace1af'],
    colorsRtl: true,
    isActive: false,
  },
  {
    name: 'Filomatia Varsoviensis',
    motto: 'Semper surgere',
    founded: '1925-03-01',
    foundedIn: 'Warszawa, Polska',
    colors: ['#610503', '#b8b9bb', '#9d3e45'],
    colorsRtl: true,
    isActive: false,
  },
  {
    name: 'Hetmania',
    motto: 'Dla Ciebie Polsko i dla Twojej chwały',
    founded: '1926-01-01',
    foundedIn: 'Lublin, Polska',
    colors: ['#364567', '#ffffff', '#9d3e45'],
    colorsRtl: true,
    isActive: false,
  },
  {
    name: 'Śniadecia',
    motto: 'Prawda, Dobro i Piękno',
    founded: '1926-01-01',
    foundedIn: 'Wilno, Polska',
    colors: ['#800000', '#fcd60a', '#006600'],
    colorsRtl: true,
    isActive: false,
  },
  {
    name: 'Sarmatia',
    motto:
      'Honor i dobro Narodu i Państwa najwyższym prawem każdego obywatela. Gospodarzami w Polsce - Polacy',
    founded: '1908-05-08',
    foundedIn: 'Petersburg, Rosja',
    colors: ['#6b3f2c', '#ffffff', '#ace1af'],
    colorsRtl: true,
    isActive: true,
  },
  {
    name: 'Laudania',
    motto: 'Per vias rectas - semperite',
    founded: '1923-12-15',
    foundedIn: 'Warszawa, Polska',
    colors: ['#6b3f2c', '#fcd60a', '#e93137'],
    colorsRtl: true,
    isActive: false,
  },
  {
    name: 'Cassubia',
    motto: 'Fortiter et constanter',
    founded: '1927-01-01',
    foundedIn: 'Warszawa, Polska',
    colors: ['#fcd60a', '#ef8237', '#000000'],
    colorsRtl: true,
    isActive: false,
  },
  {
    name: 'Lutyko-Venedya',
    motto: 'Braterstwem i pracą',
    founded: '1884-10-14',
    foundedIn: 'Dorpat (Tartu), Estonia',
    colors: ['#6994b8', '#e93137', '#afafaf'],
    colorsRtl: true,
    isActive: false,
  },
  {
    name: 'Cresovia Leopoliensis',
    motto:
      'I ten szczęśliwy, kto padł wśród zawodu, jeżeli poległym ciałem da innym szczebel do sławy grodu',
    founded: '1927-09-01',
    foundedIn: 'Lwów, Ukraina',
    colors: ['#b60063', '#44916c', '#ffffff'],
    colorsRtl: true,
    isActive: true,
  },
  {
    name: 'Corona',
    motto: 'Pro Patria et corona',
    founded: '1922-09-22',
    foundedIn: 'Poznań, Polska',
    colors: ['#ffffff', '#ef8237', '#ef8237'],
    colorsRtl: true,
    isActive: false,
  },
  {
    name: 'Posnania',
    motto: 'Hosti frontem, pectus amico',
    founded: '1921-01-04',
    foundedIn: 'Poznań, Polska',
    colors: ['#b803ff', '#ffffff', '#fcd60a'],
    colorsRtl: true,
    isActive: false,
  },
  {
    name: 'Concordia',
    motto: 'Concordia res parvae crescunt, discordia maxima dilabunter',
    founded: '1922-10-22',
    foundedIn: 'Lublin, Polska',
    colors: ['#7a7d80', '#fcd60a', '#9d3e45'],
    colorsRtl: true,
    isActive: false,
  },
  {
    name: 'Sparta',
    motto: 'Non est ars mori sed vivere',
    founded: '1922-01-13',
    foundedIn: 'Warszawa, Polska',
    colors: ['#800000', '#006600', '#ffffff'],
    colorsRtl: true,
    isActive: true,
  },
  {
    name: 'Primislavia',
    motto: 'Vitam Patriae - honorem nemini',
    founded: '1926-10-15',
    foundedIn: 'Poznań, Polska',
    colors: ['#00337c', '#ffffff', '#fcd60a'],
    colorsRtl: true,
    isActive: false,
  },
  {
    name: 'Laconia',
    motto: 'Tibi et gloriae Tuae, Patria',
    founded: '1926-12-07',
    foundedIn: 'Poznań, Polska',
    colors: ['#44916c', '#b60063', '#fcd60a'],
    colorsRtl: true,
    isActive: false,
  },
  {
    name: 'Filomatia Posnanensis',
    motto: 'Ojczyzna, Nauka, Cnota',
    founded: '1929-05-12',
    foundedIn: 'Poznań, Polska',
    colors: ['#00337c', '#e93137', '#fcd60a'],
    colorsRtl: true,
    isActive: false,
  },
]
</script>

<template>
  <div class="fraternities-view ls-page">
    <QCard style="height: 100%" flat bordered>
      <QTable
        style="height: 100%"
        title="Fraternities"
        :rows="rows"
        :columns="columns"
        row-key="name"
        binary-state-sort
        hide-pagination
        :rows-per-page-options="[0]"
        :grid="$q.screen.lt.md"
      >
        <template v-slot:body-cell-colors="props">
          <td style="display: flex; gap: 4px; justify-content: center; align-items: center;">
            <div
              v-for="color in props.row.colors"
              :key="color"
              :style="{
                backgroundColor: color,
                width: '16px',
                height: '16px',
                border: '1px solid #000',
                borderRadius: '2px',
              }"
            ></div>
          </td>
        </template>
      </QTable>
    </QCard>
  </div>
</template>

<style scoped></style>
