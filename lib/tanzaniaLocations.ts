/**
 * Tanzania regions and district/council data
 * Covers Tanzania Mainland and Zanzibar.
 *
 * Note:
 * The app still uses the name "District" for compatibility with existing components,
 * but this dataset intentionally includes district, town, municipal and city councils
 * so the picker can cover the whole country.
 */

export type Region = {
  id: string;
  name: string;
  capital?: string;
};

export type District = {
  id: string;
  name: string;
  regionId: string;
};

// List of Tanzania regions (31 total)
export const TANZANIA_REGIONS: Region[] = [
  { id: 'arusha', name: 'Arusha', capital: 'Arusha' },
  { id: 'dar-es-salaam', name: 'Dar es Salaam', capital: 'Dar es Salaam' },
  { id: 'dodoma', name: 'Dodoma', capital: 'Dodoma' },
  { id: 'geita', name: 'Geita', capital: 'Geita' },
  { id: 'iringa', name: 'Iringa', capital: 'Iringa' },
  { id: 'kagera', name: 'Kagera', capital: 'Bukoba' },
  { id: 'katavi', name: 'Katavi', capital: 'Mpanda' },
  { id: 'kigoma', name: 'Kigoma', capital: 'Kigoma' },
  { id: 'kilimanjaro', name: 'Kilimanjaro', capital: 'Moshi' },
  { id: 'lindi', name: 'Lindi', capital: 'Lindi' },
  { id: 'manyara', name: 'Manyara', capital: 'Babati' },
  { id: 'mara', name: 'Mara', capital: 'Musoma' },
  { id: 'mbeya', name: 'Mbeya', capital: 'Mbeya' },
  { id: 'morogoro', name: 'Morogoro', capital: 'Morogoro' },
  { id: 'mtwara', name: 'Mtwara', capital: 'Mtwara' },
  { id: 'mwanza', name: 'Mwanza', capital: 'Mwanza' },
  { id: 'njombe', name: 'Njombe', capital: 'Njombe' },
  { id: 'pwani', name: 'Pwani', capital: 'Kibaha' },
  { id: 'rukwa', name: 'Rukwa', capital: 'Sumbawanga' },
  { id: 'ruvuma', name: 'Ruvuma', capital: 'Songea' },
  { id: 'shinyanga', name: 'Shinyanga', capital: 'Shinyanga' },
  { id: 'simiyu', name: 'Simiyu', capital: 'Bariadi' },
  { id: 'singida', name: 'Singida', capital: 'Singida' },
  { id: 'songwe', name: 'Songwe', capital: 'Vwawa' },
  { id: 'tabora', name: 'Tabora', capital: 'Tabora' },
  { id: 'tanga', name: 'Tanga', capital: 'Tanga' },

  // Zanzibar
  { id: 'kaskazini-pemba', name: 'Kaskazini Pemba', capital: 'Wete' },
  { id: 'kusini-pemba', name: 'Kusini Pemba', capital: 'Mkoani' },
  { id: 'kaskazini-unguja', name: 'Kaskazini Unguja', capital: 'Mkokotoni' },
  { id: 'kusini-unguja', name: 'Kusini Unguja', capital: 'Koani' },
  { id: 'mjini-magharibi', name: 'Mjini Magharibi', capital: 'Zanzibar City' },
];

// Districts / Councils by region
export const DISTRICTS_BY_REGION: Record<string, District[]> = {
  'arusha': [
    { id: 'arusha-cc', name: 'Arusha City Council', regionId: 'arusha' },
    { id: 'arusha-dc', name: 'Arusha District Council', regionId: 'arusha' },
    { id: 'karatu-dc', name: 'Karatu District Council', regionId: 'arusha' },
    { id: 'longido-dc', name: 'Longido District Council', regionId: 'arusha' },
    { id: 'meru-dc', name: 'Meru District Council', regionId: 'arusha' },
    { id: 'monduli-dc', name: 'Monduli District Council', regionId: 'arusha' },
    { id: 'ngorongoro-dc', name: 'Ngorongoro District Council', regionId: 'arusha' },
  ],

  'dar-es-salaam': [
    { id: 'ilala-mc', name: 'Ilala Municipal Council', regionId: 'dar-es-salaam' },
    { id: 'kinondoni-mc', name: 'Kinondoni Municipal Council', regionId: 'dar-es-salaam' },
    { id: 'temeke-mc', name: 'Temeke Municipal Council', regionId: 'dar-es-salaam' },
    { id: 'ubungo-mc', name: 'Ubungo Municipal Council', regionId: 'dar-es-salaam' },
    { id: 'kigamboni-mc', name: 'Kigamboni Municipal Council', regionId: 'dar-es-salaam' },
  ],

  'dodoma': [
    { id: 'dodoma-cc', name: 'Dodoma City Council', regionId: 'dodoma' },
    { id: 'bahi-dc', name: 'Bahi District Council', regionId: 'dodoma' },
    { id: 'chamwino-dc', name: 'Chamwino District Council', regionId: 'dodoma' },
    { id: 'chemba-dc', name: 'Chemba District Council', regionId: 'dodoma' },
    { id: 'kondoa-dc', name: 'Kondoa District Council', regionId: 'dodoma' },
    { id: 'kondoa-tc', name: 'Kondoa Town Council', regionId: 'dodoma' },
    { id: 'kongwa-dc', name: 'Kongwa District Council', regionId: 'dodoma' },
    { id: 'mpwapwa-dc', name: 'Mpwapwa District Council', regionId: 'dodoma' },
  ],

  'geita': [
    { id: 'bukombe-dc', name: 'Bukombe District Council', regionId: 'geita' },
    { id: 'chato-dc', name: 'Chato District Council', regionId: 'geita' },
    { id: 'geita-dc', name: 'Geita District Council', regionId: 'geita' },
    { id: 'geita-tc', name: 'Geita Town Council', regionId: 'geita' },
    { id: 'mbogwe-dc', name: 'Mbogwe District Council', regionId: 'geita' },
    { id: "nyang'hwale-dc", name: "Nyang'hwale District Council", regionId: 'geita' },
  ],

  'iringa': [
    { id: 'iringa-mc', name: 'Iringa Municipal Council', regionId: 'iringa' },
    { id: 'iringa-dc', name: 'Iringa District Council', regionId: 'iringa' },
    { id: 'kilolo-dc', name: 'Kilolo District Council', regionId: 'iringa' },
    { id: 'mufindi-dc', name: 'Mufindi District Council', regionId: 'iringa' },
  ],

  'kagera': [
    { id: 'bukoba-mc', name: 'Bukoba Municipal Council', regionId: 'kagera' },
    { id: 'bukoba-dc', name: 'Bukoba District Council', regionId: 'kagera' },
    { id: 'biharamulo-dc', name: 'Biharamulo District Council', regionId: 'kagera' },
    { id: 'karagwe-dc', name: 'Karagwe District Council', regionId: 'kagera' },
    { id: 'kyerwa-dc', name: 'Kyerwa District Council', regionId: 'kagera' },
    { id: 'missenyi-dc', name: 'Missenyi District Council', regionId: 'kagera' },
    { id: 'muleba-dc', name: 'Muleba District Council', regionId: 'kagera' },
    { id: 'ngara-dc', name: 'Ngara District Council', regionId: 'kagera' },
  ],

  'katavi': [
    { id: 'mpanda-mc', name: 'Mpanda Municipal Council', regionId: 'katavi' },
    { id: 'mpanda-dc', name: 'Mpanda District Council', regionId: 'katavi' },
    { id: 'mlele-dc', name: 'Mlele District Council', regionId: 'katavi' },
    { id: 'nsimbo-dc', name: 'Nsimbo District Council', regionId: 'katavi' },
    { id: 'tanganyika-dc', name: 'Tanganyika District Council', regionId: 'katavi' },
  ],

  'kigoma': [
    { id: 'kigoma-ujiji-mc', name: 'Kigoma Ujiji Municipal Council', regionId: 'kigoma' },
    { id: 'kigoma-dc', name: 'Kigoma District Council', regionId: 'kigoma' },
    { id: 'buhigwe-dc', name: 'Buhigwe District Council', regionId: 'kigoma' },
    { id: 'kakonko-dc', name: 'Kakonko District Council', regionId: 'kigoma' },
    { id: 'kasulu-dc', name: 'Kasulu District Council', regionId: 'kigoma' },
    { id: 'kasulu-tc', name: 'Kasulu Town Council', regionId: 'kigoma' },
    { id: 'kibondo-dc', name: 'Kibondo District Council', regionId: 'kigoma' },
    { id: 'uvinza-dc', name: 'Uvinza District Council', regionId: 'kigoma' },
  ],

  'kilimanjaro': [
    { id: 'moshi-mc', name: 'Moshi Municipal Council', regionId: 'kilimanjaro' },
    { id: 'moshi-dc', name: 'Moshi District Council', regionId: 'kilimanjaro' },
    { id: 'hai-dc', name: 'Hai District Council', regionId: 'kilimanjaro' },
    { id: 'mwanga-dc', name: 'Mwanga District Council', regionId: 'kilimanjaro' },
    { id: 'rombo-dc', name: 'Rombo District Council', regionId: 'kilimanjaro' },
    { id: 'same-dc', name: 'Same District Council', regionId: 'kilimanjaro' },
    { id: 'siha-dc', name: 'Siha District Council', regionId: 'kilimanjaro' },
  ],

  'lindi': [
    { id: 'lindi-mc', name: 'Lindi Municipal Council', regionId: 'lindi' },
    { id: 'kilwa-dc', name: 'Kilwa District Council', regionId: 'lindi' },
    { id: 'lindi-dc', name: 'Lindi District Council', regionId: 'lindi' },
    { id: 'liwale-dc', name: 'Liwale District Council', regionId: 'lindi' },
    { id: 'nachingwea-dc', name: 'Nachingwea District Council', regionId: 'lindi' },
    { id: 'ruangwa-dc', name: 'Ruangwa District Council', regionId: 'lindi' },
  ],

  'manyara': [
    { id: 'babati-tc', name: 'Babati Town Council', regionId: 'manyara' },
    { id: 'babati-dc', name: 'Babati District Council', regionId: 'manyara' },
    { id: 'hanang-dc', name: 'Hanang District Council', regionId: 'manyara' },
    { id: 'kiteto-dc', name: 'Kiteto District Council', regionId: 'manyara' },
    { id: 'mbulu-dc', name: 'Mbulu District Council', regionId: 'manyara' },
    { id: 'mbulu-tc', name: 'Mbulu Town Council', regionId: 'manyara' },
    { id: 'simanjiro-dc', name: 'Simanjiro District Council', regionId: 'manyara' },
  ],

  'mara': [
    { id: 'musoma-mc', name: 'Musoma Municipal Council', regionId: 'mara' },
    { id: 'musoma-dc', name: 'Musoma District Council', regionId: 'mara' },
    { id: 'bunda-dc', name: 'Bunda District Council', regionId: 'mara' },
    { id: 'bunda-tc', name: 'Bunda Town Council', regionId: 'mara' },
    { id: 'butiama-dc', name: 'Butiama District Council', regionId: 'mara' },
    { id: 'rorya-dc', name: 'Rorya District Council', regionId: 'mara' },
    { id: 'serengeti-dc', name: 'Serengeti District Council', regionId: 'mara' },
    { id: 'tarime-dc', name: 'Tarime District Council', regionId: 'mara' },
    { id: 'tarime-tc', name: 'Tarime Town Council', regionId: 'mara' },
  ],

  'mbeya': [
    { id: 'mbeya-cc', name: 'Mbeya City Council', regionId: 'mbeya' },
    { id: 'mbeya-dc', name: 'Mbeya District Council', regionId: 'mbeya' },
    { id: 'busokelo-dc', name: 'Busokelo District Council', regionId: 'mbeya' },
    { id: 'chunya-dc', name: 'Chunya District Council', regionId: 'mbeya' },
    { id: 'kyela-dc', name: 'Kyela District Council', regionId: 'mbeya' },
    { id: 'mbarali-dc', name: 'Mbarali District Council', regionId: 'mbeya' },
    { id: 'rungwe-dc', name: 'Rungwe District Council', regionId: 'mbeya' },
  ],

  'morogoro': [
    { id: 'morogoro-mc', name: 'Morogoro Municipal Council', regionId: 'morogoro' },
    { id: 'morogoro-dc', name: 'Morogoro District Council', regionId: 'morogoro' },
    { id: 'gairo-dc', name: 'Gairo District Council', regionId: 'morogoro' },
    { id: 'ifakara-tc', name: 'Ifakara Town Council', regionId: 'morogoro' },
    { id: 'kilombero-dc', name: 'Kilombero District Council', regionId: 'morogoro' },
    { id: 'kilosa-dc', name: 'Kilosa District Council', regionId: 'morogoro' },
    { id: 'malinyi-dc', name: 'Malinyi District Council', regionId: 'morogoro' },
    { id: 'mlimba-dc', name: 'Mlimba District Council', regionId: 'morogoro' },
    { id: 'mvomero-dc', name: 'Mvomero District Council', regionId: 'morogoro' },
    { id: 'ulanga-dc', name: 'Ulanga District Council', regionId: 'morogoro' },
  ],

  'mtwara': [
    { id: 'mtwara-mc', name: 'Mtwara Municipal Council', regionId: 'mtwara' },
    { id: 'mtwara-dc', name: 'Mtwara District Council', regionId: 'mtwara' },
    { id: 'masasi-dc', name: 'Masasi District Council', regionId: 'mtwara' },
    { id: 'masasi-tc', name: 'Masasi Town Council', regionId: 'mtwara' },
    { id: 'nanyamba-tc', name: 'Nanyamba Town Council', regionId: 'mtwara' },
    { id: 'nanyumbu-dc', name: 'Nanyumbu District Council', regionId: 'mtwara' },
    { id: 'newala-dc', name: 'Newala District Council', regionId: 'mtwara' },
    { id: 'newala-tc', name: 'Newala Town Council', regionId: 'mtwara' },
    { id: 'tandahimba-dc', name: 'Tandahimba District Council', regionId: 'mtwara' },
  ],

  'mwanza': [
    { id: 'ilemela-mc', name: 'Ilemela Municipal Council', regionId: 'mwanza' },
    { id: 'nyamagana-mc', name: 'Nyamagana Municipal Council', regionId: 'mwanza' },
    { id: 'kwimba-dc', name: 'Kwimba District Council', regionId: 'mwanza' },
    { id: 'magu-dc', name: 'Magu District Council', regionId: 'mwanza' },
    { id: 'misungwi-dc', name: 'Misungwi District Council', regionId: 'mwanza' },
    { id: 'sengerema-dc', name: 'Sengerema District Council', regionId: 'mwanza' },
    { id: 'ukerewe-dc', name: 'Ukerewe District Council', regionId: 'mwanza' },
  ],

  'njombe': [
    { id: 'njombe-tc', name: 'Njombe Town Council', regionId: 'njombe' },
    { id: 'njombe-dc', name: 'Njombe District Council', regionId: 'njombe' },
    { id: 'ludewa-dc', name: 'Ludewa District Council', regionId: 'njombe' },
    { id: 'makambako-tc', name: 'Makambako Town Council', regionId: 'njombe' },
    { id: 'makete-dc', name: 'Makete District Council', regionId: 'njombe' },
    { id: "wanging'ombe-dc", name: "Wanging'ombe District Council", regionId: 'njombe' },
  ],

  'pwani': [
    { id: 'kibaha-tc', name: 'Kibaha Town Council', regionId: 'pwani' },
    { id: 'kibaha-dc', name: 'Kibaha District Council', regionId: 'pwani' },
    { id: 'bagamoyo-dc', name: 'Bagamoyo District Council', regionId: 'pwani' },
    { id: 'chalinze-dc', name: 'Chalinze District Council', regionId: 'pwani' },
    { id: 'kibiti-dc', name: 'Kibiti District Council', regionId: 'pwani' },
    { id: 'kisarawe-dc', name: 'Kisarawe District Council', regionId: 'pwani' },
    { id: 'mafia-dc', name: 'Mafia District Council', regionId: 'pwani' },
    { id: 'mkuranga-dc', name: 'Mkuranga District Council', regionId: 'pwani' },
    { id: 'rufiji-dc', name: 'Rufiji District Council', regionId: 'pwani' },
  ],

  'rukwa': [
    { id: 'sumbawanga-mc', name: 'Sumbawanga Municipal Council', regionId: 'rukwa' },
    { id: 'sumbawanga-dc', name: 'Sumbawanga District Council', regionId: 'rukwa' },
    { id: 'kalambo-dc', name: 'Kalambo District Council', regionId: 'rukwa' },
    { id: 'nkasi-dc', name: 'Nkasi District Council', regionId: 'rukwa' },
  ],

  'ruvuma': [
    { id: 'songea-mc', name: 'Songea Municipal Council', regionId: 'ruvuma' },
    { id: 'songea-dc', name: 'Songea District Council', regionId: 'ruvuma' },
    { id: 'madaba-dc', name: 'Madaba District Council', regionId: 'ruvuma' },
    { id: 'mbinga-dc', name: 'Mbinga District Council', regionId: 'ruvuma' },
    { id: 'mbinga-tc', name: 'Mbinga Town Council', regionId: 'ruvuma' },
    { id: 'nyasa-dc', name: 'Nyasa District Council', regionId: 'ruvuma' },
    { id: 'namtumbo-dc', name: 'Namtumbo District Council', regionId: 'ruvuma' },
    { id: 'tunduru-dc', name: 'Tunduru District Council', regionId: 'ruvuma' },
  ],

  'shinyanga': [
    { id: 'shinyanga-mc', name: 'Shinyanga Municipal Council', regionId: 'shinyanga' },
    { id: 'shinyanga-dc', name: 'Shinyanga District Council', regionId: 'shinyanga' },
    { id: 'kahama-mc', name: 'Kahama Municipal Council', regionId: 'shinyanga' },
    { id: 'kahama-dc', name: 'Kahama District Council', regionId: 'shinyanga' },
    { id: 'kishapu-dc', name: 'Kishapu District Council', regionId: 'shinyanga' },
  ],

  'simiyu': [
    { id: 'bariadi-tc', name: 'Bariadi Town Council', regionId: 'simiyu' },
    { id: 'bariadi-dc', name: 'Bariadi District Council', regionId: 'simiyu' },
    { id: 'busega-dc', name: 'Busega District Council', regionId: 'simiyu' },
    { id: 'itilima-dc', name: 'Itilima District Council', regionId: 'simiyu' },
    { id: 'maswa-dc', name: 'Maswa District Council', regionId: 'simiyu' },
    { id: 'meatu-dc', name: 'Meatu District Council', regionId: 'simiyu' },
  ],

  'singida': [
    { id: 'singida-mc', name: 'Singida Municipal Council', regionId: 'singida' },
    { id: 'singida-dc', name: 'Singida District Council', regionId: 'singida' },
    { id: 'ikungi-dc', name: 'Ikungi District Council', regionId: 'singida' },
    { id: 'iramba-dc', name: 'Iramba District Council', regionId: 'singida' },
    { id: 'iramba-tc', name: 'Iramba Town Council', regionId: 'singida' },
    { id: 'manyoni-dc', name: 'Manyoni District Council', regionId: 'singida' },
    { id: 'mkalama-dc', name: 'Mkalama District Council', regionId: 'singida' },
  ],

  'songwe': [
    { id: 'tunduma-tc', name: 'Tunduma Town Council', regionId: 'songwe' },
    { id: 'songwe-dc', name: 'Songwe District Council', regionId: 'songwe' },
    { id: 'ileje-dc', name: 'Ileje District Council', regionId: 'songwe' },
    { id: 'mbozi-dc', name: 'Mbozi District Council', regionId: 'songwe' },
    { id: 'momba-dc', name: 'Momba District Council', regionId: 'songwe' },
  ],

  'tabora': [
    { id: 'tabora-mc', name: 'Tabora Municipal Council', regionId: 'tabora' },
    { id: 'tabora-dc', name: 'Tabora District Council', regionId: 'tabora' },
    { id: 'igunga-dc', name: 'Igunga District Council', regionId: 'tabora' },
    { id: 'kaliua-dc', name: 'Kaliua District Council', regionId: 'tabora' },
    { id: 'nzega-dc', name: 'Nzega District Council', regionId: 'tabora' },
    { id: 'nzega-tc', name: 'Nzega Town Council', regionId: 'tabora' },
    { id: 'sikonge-dc', name: 'Sikonge District Council', regionId: 'tabora' },
    { id: 'urambo-dc', name: 'Urambo District Council', regionId: 'tabora' },
    { id: 'uyui-dc', name: 'Uyui District Council', regionId: 'tabora' },
  ],

  'tanga': [
    { id: 'tanga-cc', name: 'Tanga City Council', regionId: 'tanga' },
    { id: 'handeni-dc', name: 'Handeni District Council', regionId: 'tanga' },
    { id: 'handeni-tc', name: 'Handeni Town Council', regionId: 'tanga' },
    { id: 'kilindi-dc', name: 'Kilindi District Council', regionId: 'tanga' },
    { id: 'korogwe-dc', name: 'Korogwe District Council', regionId: 'tanga' },
    { id: 'korogwe-tc', name: 'Korogwe Town Council', regionId: 'tanga' },
    { id: 'lushoto-dc', name: 'Lushoto District Council', regionId: 'tanga' },
    { id: 'muheza-dc', name: 'Muheza District Council', regionId: 'tanga' },
    { id: 'mkinga-dc', name: 'Mkinga District Council', regionId: 'tanga' },
    { id: 'pangani-dc', name: 'Pangani District Council', regionId: 'tanga' },
  ],

  'kaskazini-pemba': [
    { id: 'micheweni', name: 'Micheweni District', regionId: 'kaskazini-pemba' },
    { id: 'wete', name: 'Wete District', regionId: 'kaskazini-pemba' },
  ],

  'kusini-pemba': [
    { id: 'chake-chake', name: 'Chake Chake District', regionId: 'kusini-pemba' },
    { id: 'mkoani', name: 'Mkoani District', regionId: 'kusini-pemba' },
  ],

  'kaskazini-unguja': [
    { id: 'kaskazini-a', name: 'Kaskazini A District', regionId: 'kaskazini-unguja' },
    { id: 'kaskazini-b', name: 'Kaskazini B District', regionId: 'kaskazini-unguja' },
  ],

  'kusini-unguja': [
    { id: 'kusini', name: 'Kusini District', regionId: 'kusini-unguja' },
    { id: 'kati', name: 'Kati District', regionId: 'kusini-unguja' },
  ],

  'mjini-magharibi': [
    { id: 'mjini', name: 'Mjini District', regionId: 'mjini-magharibi' },
    { id: 'magharibi-a', name: 'Magharibi A District', regionId: 'mjini-magharibi' },
    { id: 'magharibi-b', name: 'Magharibi B District', regionId: 'mjini-magharibi' },
  ],
};

// Helper functions
export function getRegionById(regionId: string): Region | undefined {
  return TANZANIA_REGIONS.find((region) => region.id === regionId);
}

export function getRegionByName(regionName: string): Region | undefined {
  return TANZANIA_REGIONS.find(
    (region) => region.name.toLowerCase() === regionName.toLowerCase()
  );
}

export function getDistrictsByRegionId(regionId: string): District[] {
  return DISTRICTS_BY_REGION[regionId] || [];
}

export function getDistrictById(districtId: string): District | undefined {
  for (const regionId in DISTRICTS_BY_REGION) {
    const district = DISTRICTS_BY_REGION[regionId].find((d) => d.id === districtId);
    if (district) return district;
  }
  return undefined;
}

export function getDistrictByName(districtName: string): District | undefined {
  for (const regionId in DISTRICTS_BY_REGION) {
    const district = DISTRICTS_BY_REGION[regionId].find(
      (d) => d.name.toLowerCase() === districtName.toLowerCase()
    );
    if (district) return district;
  }
  return undefined;
}

// Type for location selection
export type LocationSelection = {
  region: string;
  district: string;
};

// Default empty selection
export const EMPTY_LOCATION: LocationSelection = {
  region: '',
  district: '',
};