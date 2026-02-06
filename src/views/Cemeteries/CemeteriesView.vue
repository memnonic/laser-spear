<script setup lang="ts">
import { QCard, QTable, type QTableColumn } from 'quasar'
import i18n from '@/plugins/i18n.plugin.ts'

export interface Cemetery {
  id: string // stable slug / key
  name: string
  city: string

  address: string | null

  latitude: number | null
  longitude: number | null

  phone: string | null
  email: string | null

  openingHours: string | null

  notes?: string | null
}

const columns: QTableColumn<Cemetery>[] = [
  {
    name: 'name',
    label: i18n.t('cemeteries.table.name'),
    field: (row) => row.name,
    align: 'left',
    sortable: true,
  },
  {
    name: 'city',
    label: i18n.t('cemeteries.table.city'),
    field: (row) => row.city,
    align: 'left',
    sortable: true,
  },
  {
    name: 'address',
    label: i18n.t('cemeteries.table.address'),
    field: (row) => row.address ?? '—',
    align: 'left',
    sortable: false,
  },
  {
    name: 'phone',
    label: i18n.t('cemeteries.table.phone'),
    field: (row) => row.phone ?? '—',
    align: 'center',
    sortable: false,
  },
  {
    name: 'email',
    label: i18n.t('cemeteries.table.email'),
    field: (row) => row.email ?? '—',
    align: 'left',
    sortable: false,
  },
  {
    name: 'openingHours',
    label: i18n.t('cemeteries.table.openingHours'),
    field: (row) => row.openingHours ?? '—',
    align: 'left',
    sortable: false,
  },
]

const rows: Cemetery[] = [
  {
    id: 'sopot-komunalny',
    name: 'Cmentarz Komunalny w Sopocie',
    city: 'Sopot',
    address: 'ul. Jacka Malczewskiego 31, 81-817 Sopot, Poland',
    latitude: 54.4516,
    longitude: 18.5459,
    phone: '+48 58 551 03 50',
    email: 'biuro@cmentarz.sopot.pl',
    openingHours: 'Mon–Fri 07:00–15:00',
    notes: null,
  },
  {
    id: 'sopot-katolicki',
    name: 'Cmentarz Katolicki w Sopocie',
    city: 'Sopot',
    address: 'ul. Jacka Malczewskiego 30, 81-817 Sopot, Poland',
    latitude: 54.4499,
    longitude: 18.5484,
    phone: '+48 58 551 35 33',
    email: 'gwiazdamorza@vti.pl',
    openingHours: 'Weekdays, office hours',
    notes: 'Parish cemetery',
  },
  {
    id: 'gdansk-srebrzysko',
    name: 'Cmentarz Centralny Srebrzysko',
    city: 'Gdańsk',
    address: 'ul. Srebrniki 2, 80-282 Gdańsk, Poland',
    latitude: 54.3731,
    longitude: 18.5839,
    phone: '+48 58 341 49 77',
    email: 'zielen@zielen.pl',
    openingHours: 'Mon–Fri 07:00–15:00',
    notes: 'Municipal cemetery',
  },
  {
    id: 'gdansk-oliwa',
    name: 'Cmentarz w Oliwie',
    city: 'Gdańsk',
    address: 'ul. Opacka 8, 80-330 Gdańsk, Poland',
    latitude: 54.4129,
    longitude: 18.5584,
    phone: '+48 58 552 29 22',
    email: 'zielen@zielen.pl',
    openingHours: 'Mon–Fri 07:00–15:00',
    notes: null,
  },
  {
    id: 'gdansk-lostowicki',
    name: 'Cmentarz Łostowicki',
    city: 'Gdańsk',
    address: 'ul. Łostowicka 35, 80-001 Gdańsk, Poland',
    latitude: 54.3403,
    longitude: 18.5857,
    phone: '+48 58 302 02 07',
    email: 'gzz@gdansk.gda.pl',
    openingHours: 'Mon–Fri 07:00–15:00',
    notes: 'Municipal cemetery',
  },
  {
    id: 'gdynia-witomino',
    name: 'Cmentarz w Gdyni Witominie',
    city: 'Gdynia',
    address: 'Witomino, Gdynia, Poland',
    latitude: 54.5073,
    longitude: 18.5134,
    phone: '+48 58 660 89 50',
    email: null,
    openingHours: null,
    notes: 'Municipal cemetery, limited public contact data',
  },
  {
    id: 'gdynia-orlowo',
    name: 'Cmentarz w Gdyni Orłowie',
    city: 'Gdynia',
    address: 'Orłowo, Gdynia, Poland',
    latitude: 54.486,
    longitude: 18.5427,
    phone: null,
    email: null,
    openingHours: null,
    notes: 'Older local cemetery',
  },
]
</script>

<template>
  <div class="cemeteries-view ls-page">
    <QCard style="height: 100%" flat bordered>
      <QTable
        style="height: 100%"
        :title="i18n.t('cemeteries.title')"
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

<style scoped lang="scss"></style>
