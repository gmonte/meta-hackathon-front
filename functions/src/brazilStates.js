import find from 'lodash/find'

const states = [
  { shortname: 'AC', name: 'Acre' },
  { shortname: 'AL', name: 'Alagoas' },
  { shortname: 'AM', name: 'Amazonas' },
  { shortname: 'AP', name: 'Amapá' },
  { shortname: 'BA', name: 'Bahia' },
  { shortname: 'CE', name: 'Ceará' },
  { shortname: 'DF', name: 'Distrito Federal' },
  { shortname: 'ES', name: 'Espírito Santo' },
  { shortname: 'GO', name: 'Goiás' },
  { shortname: 'MA', name: 'Maranhão' },
  { shortname: 'MG', name: 'Minas Gerais' },
  { shortname: 'MS', name: 'Mato Grosso do Sul' },
  { shortname: 'MT', name: 'Mato Grosso' },
  { shortname: 'PA', name: 'Pará' },
  { shortname: 'PB', name: 'Paraíba' },
  { shortname: 'PE', name: 'Pernambuco' },
  { shortname: 'PI', name: 'Piauí' },
  { shortname: 'PR', name: 'Paraná' },
  { shortname: 'RJ', name: 'Rio de Janeiro' },
  { shortname: 'RN', name: 'Rio Grande do Norte' },
  { shortname: 'RO', name: 'Rondônia' },
  { shortname: 'RR', name: 'Roraima' },
  { shortname: 'RS', name: 'Rio Grande do Sul' },
  { shortname: 'SC', name: 'Santa Catarina' },
  { shortname: 'SP', name: 'São Paulo' },
  { shortname: 'SE', name: 'Sergipe' },
  { shortname: 'TO', name: 'Tocantins' }
]

export const getBrazilStateByShortname = state => find(
  states,
  ({ shortname }) => shortname === state,
  null
)
